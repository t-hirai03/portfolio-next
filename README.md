# ポートフォリオ

## 概要

後から記載予定

## ディレクトリ構成イメージ

```
src/
├── app/           # ページやルートに関連するコード
│   ├── layout.tsx # 全体のレイアウト
│   ├── page.tsx   # ページごとのコード
│   ├── about/     # aboutページ用ディレクトリ
│   │   └── page.tsx
├── components/    # 再利用可能なUIコンポーネント
│   ├── Header/    # ヘッダーコンポーネント
│   │   ├── index.tsx
│   │   └── index.module.css
│   ├── Footer/    # フッターコンポーネント
│   │   └── index.tsx
├── lib/           # ユーティリティ関数（例: API呼び出しやフォーマッター）
├── hooks/         # カスタムフック
└── styles/        # グローバルスタイル（Tailwind CSS や共通の CSS 設定）
```

## 使用技術

- shadncn ui
  - <https://ui.shadcn.com/docs/components/accordion>

## URL

- <https://portfolio-next-ts-orpin.vercel.app/>
