#!/usr/bin/env python3
"""西岡行政書士事務所サイトの月次点検。

使い方: python3 -I .github/scripts/site_audit.py <リポジトリのパス>
結果を Markdown で標準出力に出す。ファイルは一切書き換えない。
"""
import collections
import datetime
import json
import os
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "."
BASE = "https://nishioka-gyosei.github.io/"
GA_ID = "G-6JQDLBVSQ8"
TOOL_PAGES = {"nishiokanri.html", "task-manager.html", "ininjo.html", "jimusho-shorui.html"}

# 所長が決めた表現ルール（書かない言い方）
BANNED = {
    "審査する側にいたと読める表現": r"審査する側として|内側にいた|内側から(知|熟知|見てき)|内側を知って|審査担当者の視点を内側",
    "誇大な言い方": r"ほぼゼロ|差し戻しなく|確実に通る|必ず許可|許可率\s*100|任せるのが確実",
    "登記を自分でするように読める表現": r"法務局(への)?提出まで",
    "「止まります」（「うまくいきません」にする）": r"止まります",
    "公開しない警察経歴の詳細": r"交番|パトカー|鑑識",
}
POLICE_CATS = {"fueihou", "shinya", "kobutsu", "keibi", "daiko"}
NON_POLICE_CATS = {"nouchi", "kensetsu", "sanpai", "souzoku", "hakajimai", "minpaku",
                   "chintai", "nyukan", "shikin", "shuhan", "inshoku"}
SIG_POLICE = "元広島県警察官・西岡より"
SIG_GENERAL = "行政書士・西岡より"


def read(rel):
    with open(os.path.join(ROOT, rel), encoding="utf-8", errors="ignore") as f:
        return f.read()


def visible_text(html):
    html = re.sub(r"<script(?! type=\"application/ld\+json\").*?</script>|<style.*?</style>", "", html, flags=re.S)
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", html))


pages = []
for d, dirs, files in os.walk(ROOT):
    dirs[:] = [x for x in dirs if x != ".git"]
    for f in files:
        if f.endswith(".html"):
            pages.append(os.path.relpath(os.path.join(d, f), ROOT))
pages.sort()

sitemap = read("sitemap.xml") if os.path.exists(os.path.join(ROOT, "sitemap.xml")) else ""
sm_locs = set(re.findall(r"<loc>\s*(.*?)\s*</loc>", sitemap))
llms = read("llms.txt") if os.path.exists(os.path.join(ROOT, "llms.txt")) else ""

issues = collections.defaultdict(list)
articles = []
today = datetime.date.today()

for p in pages:
    h = read(p)
    url = BASE + p
    is_redirect = "http-equiv=\"refresh\"" in h
    noindex = bool(re.search(r"<meta[^>]+robots[^>]+noindex", h, re.I))

    # 構造化データが壊れていないか
    for block in re.findall(r"<script type=\"application/ld\+json\">(.*?)</script>", h, re.S):
        try:
            json.loads(block)
        except Exception as e:  # noqa: BLE001
            issues["構造化データ（JSON-LD）が読めない"].append(f"{p}（{e.__class__.__name__}）")

    # 内部リンク切れ
    for href in set(re.findall(r"href=[\"']([^\"'#?]+)", h)):
        if href.startswith(("mailto:", "tel:", "javascript:", "data:")) or "${" in href:
            continue
        if href.startswith("http") and not href.startswith(BASE):
            continue
        if href.startswith(BASE):
            target = href[len(BASE):]
        elif href.startswith("/"):
            target = href[1:]
        else:
            target = os.path.normpath(os.path.join(os.path.dirname(p), href))
        if target in ("", "."):
            target = "index.html"
        if target.endswith("/"):
            target += "index.html"
        if not os.path.exists(os.path.join(ROOT, target)) and not os.path.exists(os.path.join(ROOT, target, "index.html")):
            issues["内部リンク切れ"].append(f"{p} → {href}")

    if p in TOOL_PAGES:
        if not noindex:
            issues["業務アプリが検索に出る設定になっている（noindexなし）"].append(p)
        continue
    if is_redirect or noindex or p == "404.html":
        continue

    if GA_ID not in h:
        issues[f"GA4（{GA_ID}）が入っていない"].append(p)
    if url not in sm_locs and url.replace("index.html", "") not in sm_locs:
        issues["sitemap.xml に載っていない"].append(p)
    if not re.search(r"<meta\s+name=[\"']description[\"']", h):
        issues["検索結果の説明文（meta description）がない"].append(p)

    text = visible_text(h)
    for label, pat in BANNED.items():
        for m in re.finditer(pat, text):
            issues[label].append(f"{p}：…{text[max(0, m.start() - 25):m.end() + 25].strip()}…")

    if p.startswith("blog/") and os.path.basename(p) != "index.html":
        parts = p.split("/")
        cat = parts[1] if len(parts) > 2 else "cross"
        pub = re.search(r"\"datePublished\"\s*:\s*\"([\d-]{10})", h)
        title = re.search(r"<title>(.*?)</title>", h, re.S)
        art = dict(p=p, cat=cat, pub=pub.group(1) if pub else "", title=(title.group(1).strip() if title else p))
        articles.append(art)
        for need, label in (("geo-summary", "直接回答ブロック（geo-summary）"), ("FAQPage", "FAQPage"),
                            ("LegalService", "LegalService"), ("BreadcrumbList", "BreadcrumbList")):
            if need not in h:
                issues[f"記事に {label} がない"].append(p)
        if "\"Article\"" not in h and "\"BlogPosting\"" not in h:
            issues["記事に Article スキーマがない"].append(p)
        if p not in llms and url not in llms:
            issues["llms.txt に載っていない記事"].append(p)
        if "monologue" not in h:
            issues["「現場の話」がない記事（書き足し候補）"].append(f"{p}｜{art['title']}")
        if cat in POLICE_CATS and SIG_GENERAL in h and SIG_POLICE not in h:
            issues["警察申請の記事なのに署名が「行政書士・西岡より」"].append(p)
        if cat in NON_POLICE_CATS and SIG_POLICE in h:
            issues["警察以外の記事なのに署名が「元広島県警察官・西岡より」"].append(p)
        if art["pub"] and art["pub"] > today.isoformat():
            issues["公開日が未来の日付"].append(f"{p}（{art['pub']}）")

for loc in sorted(sm_locs):
    rel = loc[len(BASE):] if loc.startswith(BASE) else loc
    if not os.path.exists(os.path.join(ROOT, rel or "index.html")) and not os.path.exists(os.path.join(ROOT, rel, "index.html")):
        issues["sitemap.xml にあるのにファイルがない"].append(loc)

for f in os.listdir(ROOT):
    if f.endswith((".zip", ".jsx", ".bak", ".tmp")):
        issues["サイト直下の作業ファイル（公開されている）"].append(f)

# 出力
print(f"# サイト月次点検（{today.isoformat()}）\n")
print(f"- ページ数：{len(pages)}（うちブログ記事 {len(articles)} 本）")
recent = [a for a in articles if a["pub"] and (today - datetime.date.fromisoformat(a["pub"])).days <= 35]
print(f"- 直近35日に公開した記事：{len(recent)} 本")
for a in sorted(recent, key=lambda x: x["pub"]):
    print(f"  - {a['pub']} {a['title']}")
print()
order = [k for k in issues if "書き足し候補" not in k] + [k for k in issues if "書き足し候補" in k]
if not order:
    print("問題は見つかりませんでした。")
for k in order:
    v = issues[k]
    print(f"## {k}：{len(v)} 件")
    for x in v[:40]:
        print(f"- {x}")
    if len(v) > 40:
        print(f"- ほか {len(v) - 40} 件")
    print()
