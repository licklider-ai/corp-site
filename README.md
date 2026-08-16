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

Astro 本体の導入後に利用できます。

| コマンド        | 内容                                     |
| --------------- | ---------------------------------------- |
| `pnpm dev`      | 開発サーバーを起動 (http://localhost:4321) |
| `pnpm build`    | 本番用に `dist/` へビルド                 |
| `pnpm preview`  | ビルド結果をローカルで確認                |
| `pnpm check`    | Astro の型チェック                        |

## 次のステップ

Astro 本体と初期ページはまだ導入していません。次のコミットで
`pnpm create astro@latest` 相当のセットアップを行います。
