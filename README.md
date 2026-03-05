# Cursor実践トレーニング

Cursor 研修用のカリキュラム表示アプリです。入門・中級・上級・GitHub のタブで、各段階の説明と手順を表示します。

## 利用の仕方

- **受講者（CS）**: デプロイ済みの URL（例: xxx.vercel.app）をブラウザで開き、タブを切り替えて内容を読んでください。リポジトリや Node のインストールは不要です。
- **開発者**: このリポジトリをクローンし、下記の手順でローカル開発またはビルド・デプロイができます。

## 開発

```bash
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開いてください。

## ビルド・デプロイ

```bash
npm run build
```

`dist/` に出力されます。Vercel にデプロイする場合は、このリポジトリを接続し、ビルドコマンド `npm run build`、出力ディレクトリ `dist` を指定してください。

## 技術スタック

- Vite + React (TypeScript)
- Tailwind CSS v4
- グラスモーフィズム + Bento 風レイアウト
