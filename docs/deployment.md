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

- [ ] トップページの Hero 見出しが "Engineering Accountability at Machine Scale"
- [ ] `/thesis/` が表示される
- [ ] `favicon.svg` / `robots.txt` / `sitemap-index.xml` が配信される
- [ ] OGP メタタグが出力されている

## 4. 旧デプロイの無効化

`licklider-v1` の `site/` ディレクトリ由来のデプロイを止めます。

1. 旧 Vercel プロジェクト（`licklider-v1` + Root `site`）から `licklider.ai` ドメインを削除
2. 旧プロジェクトの Git 連携を解除するか、プロジェクトを Archive
3. `licklider-v1` リポジトリの `site/` に README を置き、移行先を明記（別 PR）

## 5. CLI でのローカル確認

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
