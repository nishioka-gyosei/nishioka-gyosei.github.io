#!/usr/bin/env python3
"""IndexNow で Bing などへ更新ページを知らせる（GitHub Actions から実行）。

- 通常（main への push）: その push で追加・変更された .html のうち、
  sitemap.xml に載っている URL だけを送る（noindex のツールや移転用ページは送らない）。
- 全件: 手動実行（Run workflow）か、この仕組み自体（ワークフロー・本スクリプト・鍵ファイル）
  を変えた push のときは、sitemap.xml の全 URL を送る。
- 送る前に、GitHub Pages への反映が終わるのを待つ（古い版を取りに来させないため）。
"""
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request

HOST = 'nishioka-gyosei.github.io'
BASE = f'https://{HOST}/'
KEY = 'dc969be8a041056c178f8bdabed76df9'
KEY_FILE = KEY + '.txt'
KEY_LOCATION = BASE + KEY_FILE
ENDPOINT = 'https://api.indexnow.org/indexnow'
SELF_FILES = {'.github/workflows/indexnow.yml', '.github/scripts/indexnow.py', KEY_FILE}
WAIT_TRIES = 20          # 反映待ち：最大 20 回 × 30 秒 = 10 分
WAIT_INTERVAL = 30


def git(*args):
    return subprocess.run(['git', *args], capture_output=True, text=True,
                          check=True).stdout


def sitemap_urls():
    s = open('sitemap.xml', encoding='utf-8').read()
    return re.findall(r'<loc>\s*([^<\s]+)\s*</loc>', s)


def changed_files():
    before = os.environ.get('BEFORE', '')
    ranges = []
    if before and set(before) != {'0'}:
        ranges.append([before, 'HEAD'])
    ranges.append(['HEAD~1', 'HEAD'])
    for r in ranges:
        try:
            out = git('diff', '--name-only', '--diff-filter=AMR', *r)
            return [line for line in out.splitlines() if line]
        except subprocess.CalledProcessError:
            continue
    return []


def url_candidates(path):
    """リポジトリ内のパス → sitemap と同じ形の URL 候補。"""
    c = [BASE + path]
    if path == 'index.html':
        c.append(BASE)
    elif path.endswith('/index.html'):
        c.append(BASE + path[:-len('index.html')])
    return c


def fetch(url):
    sep = '&' if '?' in url else '?'
    req = urllib.request.Request(f'{url}{sep}indexnow={int(time.time())}',
                                 headers={'Cache-Control': 'no-cache'})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.status, r.read()
    except urllib.error.HTTPError as e:
        return e.code, b''
    except Exception:
        return 0, b''


def wait_until_live(check_path=None):
    """鍵ファイル（と変更ページ1つ）が公開側に反映されるまで待つ。"""
    local = open(check_path, 'rb').read() if check_path else None
    for i in range(1, WAIT_TRIES + 1):
        ks, kb = fetch(KEY_LOCATION)
        key_ok = ks == 200 and kb.strip() == KEY.encode()
        page_ok = True
        if local is not None:
            ps, pb = fetch(BASE + check_path)
            page_ok = ps == 200 and pb == local
        if key_ok and page_ok:
            print(f'公開側への反映を確認（{i} 回目）')
            return True
        print(f'反映待ち {i}/{WAIT_TRIES}（鍵={"OK" if key_ok else "未"}'
              f'{"" if local is None else "・ページ=" + ("OK" if page_ok else "未")}）')
        time.sleep(WAIT_INTERVAL)
    return False


def main():
    event = os.environ.get('EVENT', '')
    all_mode = event == 'workflow_dispatch' and os.environ.get('ALL', 'true') != 'false'
    files = [] if all_mode else changed_files()
    if SELF_FILES & set(files):
        all_mode = True
        print('IndexNow の設定が変わったので、サイトマップの全URLを送ります')

    sm = sitemap_urls()
    smset = set(sm)
    if all_mode:
        urls = sm
        check_path = None
    else:
        urls, html = [], []
        for f in files:
            if not f.endswith('.html'):
                continue
            for u in url_candidates(f):
                if u in smset:
                    urls.append(u)
                    html.append(f)
                    break
        check_path = html[0] if html else None

    urls = list(dict.fromkeys(urls))
    if not urls:
        print('送信対象のページはありません（sitemap.xml に載っている .html の変更なし）')
        return 0

    if not wait_until_live(check_path):
        print('::warning::10分待っても公開側への反映を確認できませんでした。このまま送信します')

    print(f'{len(urls)} 件を送信します')
    for u in urls:
        print('  ', u)
    body = json.dumps({'host': HOST, 'key': KEY, 'keyLocation': KEY_LOCATION,
                       'urlList': urls}).encode('utf-8')
    req = urllib.request.Request(ENDPOINT, data=body, method='POST', headers={
        'Content-Type': 'application/json; charset=utf-8'})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            print(f'IndexNow 応答: {r.status}（200=受付済み / 202=受付・鍵の確認待ち）')
            return 0
    except urllib.error.HTTPError as e:
        msg = e.read().decode('utf-8', 'replace')[:500]
        print(f'::error::IndexNow 応答: {e.code} {msg}')
        return 1


if __name__ == '__main__':
    sys.exit(main())
