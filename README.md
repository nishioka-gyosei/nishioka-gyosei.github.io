# Deploy — リポジトリ直下バージョン

このフォルダの中身を **そのまま** `nishioka-gyosei.github.io` リポジトリのルートに配置すると、GitHub Pages で公開されます。

## ファイル構成

```
（リポジトリのルート）
├── index.html              ← トップページ
├── shinya-eigyou.html      ← 深夜営業届出 LP
├── colors_and_type.css     ← デザイントークン（色・タイポ）
├── kit.css                 ← UIコンポーネントの基本スタイル
├── polish.css              ← ビジュアル仕上げレイヤー（スクロール演出など）
├── lp.css                  ← サブLP専用スタイル
├── enhance.js              ← スクロール監視・カウンター・FAB
├── atoms.jsx               ← ボタン、ラベルなど小さい部品
├── components.jsx          ← カード類
├── sections.jsx            ← ヘッダー・ヒーロー・各セクション
├── lp-sections.jsx         ← サブLP用コンポーネント（Hero/Steps/Pricing/FAQ）
├── app.jsx                 ← トップページのエントリ
└── assets/
    ├── photo.jpg             ← 西岡先生の写真
    ├── logo-transparent.png  ← もみじロゴ（透過）
    ├── logo.png              ← もみじロゴ（白背景）
    └── logo-mark.png         ← ファビコン
```

## デプロイ手順

### 方法A：GitHub上でファイルをまとめてアップ

1. `nishioka-gyosei/nishioka-gyosei.github.io` リポジトリを開く
2. **Add file → Upload files** をクリック
3. このフォルダの全ファイル＋ `assets/` を**まとめてドラッグ&ドロップ**
4. 既存の `index.html` を上書きすることを確認
5. 下にスクロールして **Commit changes** をクリック
6. 数分で `https://nishioka-gyosei.github.io/` に反映

### 方法B：Git CLI でローカルから

```bash
git clone https://github.com/nishioka-gyosei/nishioka-gyosei.github.io.git
cd nishioka-gyosei.github.io

# このフォルダの全部のファイルをコピーしてくる
cp -r /path/to/deploy/* .

git add .
git commit -m "Redesign: navy + gold, ex-police identity, momiji logo"
git push origin main
```

## 移行前に確認すること

- 既存の `photo.jpg`（オリジナル原寸）はリポジトリのルートにあります。OG画像として参照されているので **消さずに残してください**（`index.html` の `og:image` が参照中）。
- **Google Analytics（GA4・`G-6JQDLBVSQ8`）が統合済み** ✓ — 既存サイトと同じ計測ID。デプロイ後、新サイトでもそのまま計測されます。
- 既存の他ページ（`fuueihou_lp.html`、`kobutu_lp.html`、`/blog/` など）はこのデプロイには含まれていません。古いまま残ります。デザインを揃えたい場合は順番に作り直します。

## GA4で取れるカスタムイベント

通常のページビュー＋スクロールに加えて、以下を自動で計測しています：

| イベント名 | 中身 |
|---|---|
| `cta_click` | LINE / 電話 / シミュレーターのクリック（`cta_type` + `cta_location` 付き） |
| `service_click` | 各サービスカードの「詳しく見る」（`service_name` 付き） |
| `simulator_row_click` | シミュレーターの個別サービス行クリック |
| `hero_cta_click` | ヒーローのボタンクリック |
| `scroll_depth` | 25% / 50% / 75% / 100% スクロール到達 |
| `section_view` | 各セクションの可視化（hero, services, about, etc.） |

GA4のレポート → 「探索」で `cta_type` や `service_name` を**カスタムディメンション**として登録すると、どのCTAが押されているか・どのサービスが人気か、ピボット分析できます。

## 注意

- このサイトは **CDNから React と Babel を読み込んで、ブラウザ内でJSXをコンパイル** します。初回アクセス時は少しだけ重くなります（〜1秒）。気になる場合は将来「ビルド済みJSに変換」する選択肢があります。
- インターネット接続が必要です（オフライン版が必要なら別途 `Nishioka Gyosei — Standalone.html` を使ってください）。

## 次のステップの候補

1. ✅ **Google Analytics（G-6JQDLBVSQ8）の統合** — 完了
2. ✅ **既存のサブページを同じデザインで再構築** — 9LP すべて完成
   - ✅ 警察申請まとめ（`police.html`）
   - ✅ 風営法（`fueihou.html`）
   - ✅ 深夜営業届出（`shinya-eigyou.html`）
   - ✅ 古物商（`kobutu.html`）
   - ✅ 道路使用・占用（`douroshiyou.html`）
   - ✅ 建設業（`kensetsu.html`）
   - ✅ 会社設立（`kaisha-setsuritsu.html`）
   - ✅ 民泊（`minpaku.html`）
   - ✅ 農地転用（`nochi.html`）
   - ✅ 士業の先生方へ（`sagyoshi-renkai.html`）
3. **シミュレーター（`simulator.html`）の作り直し**
4. **ブログ記事テンプレート（`/blog/`）の整備**
5. **未作成の小型LP**：飲食店営業許可・酒類販売・遺言書作成・墓じまい・創業融資
