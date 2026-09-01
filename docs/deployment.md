# licklider.ai デプロイ手順

`corp-site` を [licklider.ai](https://licklider.ai) の正本として Vercel に接続する手順です。

## 前提

| 項目 | 値 |
| ---- | --- |
| リポジトリ | `licklider-ai/corp-site` |
| Production Branch | `main` |
| Framework | Astro (static) |
| Node.js | 22.x (`.nvmrc`) |
| Package Manager | pnpm 10.33.0 |
| Output | `dist/` |

ビルド設定はリポジトリルートの [`vercel.json`](../vercel.json) で管理しています。

## 1. Vercel プロジェクトの作成または付け替え

### 推奨: 既存 `licklider.ai` プロジェクトを付け替える

ドメイン移管が不要で、DNS / SSL の切り替えが最も簡単です。

1. [Vercel Dashboard](https://vercel.com/dashboard) で現在 `licklider.ai` に紐づいているプロジェクトを開く
2. **Settings → Git** で接続先を変更
   - Repository: `licklider-ai/corp-site`
   - Production Branch: `main`
3. **Settings → General → Root Directory** を `./`（リポジトリルート）に設定
   - 旧設定: `licklider-v1` の `site/` サブディレクトリ
4. **Settings → Build and Deployment** を確認
   - Framework Preset: **Astro**
   - Install Command: `pnpm install --frozen-lockfile`
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Node.js Version: **22.x**

### 代替: 新規プロジェクトを作成する場合

1. **Add New → Project** から `licklider-ai/corp-site` を Import
2. 上記ビルド設定を確認して Deploy
3. **Settings → Domains** で `licklider.ai` と `www.licklider.ai` を追加
4. 旧プロジェクトから同ドメインを削除

## 2. ドメインとリダイレクト

正規 URL は `https://www.licklider.ai` です（`licklider.ai` は Vercel のドメイン設定で www へリダイレクトされます）。

確認:

```bash
curl -sI https://licklider.ai | grep -i location
curl -sI https://www.licklider.ai | grep -i location
curl -sI https://licklider.ai/thesis/ | head -n 1
```

期待結果:

- `https://www.licklider.ai/` が 200 を返す（新コーポレートサイト）
- `https://www.licklider.ai/thesis/` が 200 を返す
- `https://licklider.ai/` は `www` へリダイレクトされる

## 3. 本番デプロイの確認

`main` への push で Production デプロイが走ります。
手動デプロイする場合:

```bash
vercel login
vercel link          # プロジェクトをリンク
vercel --prod        # 本番デプロイ
```

デプロイ後に以下を確認:

- [ ] トップページの Hero 見出しが "The verification layer for AI research agents"
- [ ] `/roadmap/` が表示され、Available / candidate / next / planned が区別される
- [ ] `/thesis/` が表示される
- [ ] `favicon.svg` / `robots.txt` / `sitemap-index.xml` が配信される
- [ ] OGP メタタグが出力されている
- [ ] canonical URL が `https://www.licklider.ai/...` を指す
- [ ] `licklider.ai/...` が同じパスの `www.licklider.ai/...` へ恒久リダイレクトされる

## 4. 検索インデックス更新

大幅なトップページ変更後は、古いタイトル・説明・本文断片が検索結果に残って
いないか確認する。リポジトリ側で次を成立させたうえで、Google Search Console
の URL 検査から再クロールを依頼する。

1. `https://www.licklider.ai/` の `<title>`、description、canonical、JSON-LD が
   現在の会社説明と一致する。
2. `https://www.licklider.ai/sitemap-index.xml` が最新のページを含む。
3. `https://licklider.ai/` と下層パスが `www` の同一パスへ恒久リダイレクトされる。
4. 公開HTMLに旧見出しまたは `Placeholder testimonial` が存在しない。
5. Search Console の URL 検査でトップページと `/roadmap/` のインデックス登録を
   依頼し、サイトマップを再送信する。

検索結果の反映は即時ではない。再クロール依頼の完了と、実際の検索スニペットの
更新は別の状態として記録する。

## 5. 旧デプロイの無効化（完了: 2026-08-17）

`licklider-v1` の `site/` ディレクトリ由来のデプロイは停止済みです。

- [x] Vercel プロジェクト `licklidermvp/website` を `corp-site` に付け替え（Root Directory: `./`）
- [x] `licklider.ai` / `www.licklider.ai` は `corp-site` の `main` から配信
- [x] `licklider-v1/site/` を退役し、移行先 README を配置（[licklider-ai/licklider-v1#site](https://github.com/licklider-ai/licklider-v1/tree/main/site)）

## 6. CLI でのローカル確認

```bash
fnm use --install-if-missing   # Node 22.22.2
corepack enable
corepack prepare pnpm@10.33.0 --activate
pnpm install --frozen-lockfile
pnpm build
pnpm preview                   # http://localhost:4321
```

## 関連ファイル

- [`vercel.json`](../vercel.json) — Vercel ビルド・リダイレクト設定
- [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) — PR / push 時のビルド検証
- [`astro.config.mjs`](../astro.config.mjs) — `site` URL と sitemap 連携
