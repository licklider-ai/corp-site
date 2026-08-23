# corp-site

Astro で構築するコーポレートサイト。

## 必要な環境

| ツール  | バージョン    | 備考                                   |
| ------- | ------------- | -------------------------------------- |
| Node.js | `>= 22.12.0`  | `.nvmrc` / `.node-version` は 22.22.2 を指定 |
| pnpm    | `>= 10.0.0`   | `packageManager` で 10.33.0 に固定      |

`engine-strict=true` を `.npmrc` に設定しているため、条件を満たさない Node.js では
インストールが中断されます。

## セットアップ

### 1. Node.js

バージョン管理ツールを使う場合は、リポジトリのルートで以下を実行します。

```bash
# nvm
nvm install   # .nvmrc を読み込む
nvm use

# fnm
fnm use --install-if-missing

# mise / asdf
mise install  # .node-version を読み込む
```

バージョン管理ツールを使わない場合は https://nodejs.org/ から 22.12.0 以上を
インストールしてください。確認:

```bash
node -v   # v22.12.0 以上であること
```

### 2. pnpm

Node.js に同梱の Corepack を使う方法が最も手軽です。

```bash
corepack enable
corepack prepare pnpm@10.33.0 --activate
```

Corepack を使わない場合は npm でグローバルインストールします。

```bash
npm install -g pnpm@10.33.0
```

確認:

```bash
pnpm -v   # 10.33.0
```

### 3. 依存関係のインストール

```bash
pnpm install
```

## スクリプト

| コマンド        | 内容                                              |
| --------------- | ------------------------------------------------- |
| `pnpm dev`      | 開発サーバーを起動 (http://localhost:4321)        |
| `pnpm build`    | 型チェック後に `dist/` へ本番ビルド               |
| `pnpm preview`  | ビルド結果をローカルで確認                        |
| `pnpm check`    | Astro の型チェックのみ実行                        |

## デプロイ

本番サイトは [licklider.ai](https://licklider.ai) 向けに Vercel へデプロイします。
リポジトリルートの [`vercel.json`](./vercel.json) でビルド設定を管理しています。

| 設定項目           | 値                                |
| ------------------ | --------------------------------- |
| Framework          | Astro (static)                    |
| Install Command    | `pnpm install --frozen-lockfile`  |
| Build Command      | `pnpm build`                      |
| Output Directory   | `dist`                            |
| Production Branch  | `main`                            |
| Node.js Version    | 22.x (`.nvmrc` 参照)              |

`main` への push と PR では [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) が
`pnpm build` を実行します。

本番デプロイ手順の詳細は [`docs/deployment.md`](./docs/deployment.md) を参照してください。

## 公開情報の分類

公開記事は **Research / Engineering / News** の3系統に分けます。`/latest/` とホームの **Latest** は3系統を時系列でまとめ、ヘッダーはLatestを共通入口とします。各項目には分類を表示します。

配置、成熟度ラベル、公開文の書き方、公開前チェック、必須メタデータの正本は [`docs/publication-architecture.md`](./docs/publication-architecture.md) を参照してください。
