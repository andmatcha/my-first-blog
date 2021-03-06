# ブログサイト

## スタック
- TypeScript
- React
- Next.js
- Emotion

### 詳細
- @emotion/babel-plugin@11.9.2
- @emotion/react@11.9.3
- @next-auth/prisma-adapter@1.0.3
- @prisma/client@4.0.0
- @types/node@18.0.3
- @types/react@18.0.15
- @types/sanitize-html@2.6.2
- @types/showdown@2.0.0
- destyle.css@3.0.2
- eslint-config-next@12.2.2
- eslint@8.19.0
- gray-matter@4.0.3
- next-auth@4.10.0
- next-sitemap@3.1.11
- next@12.2.2
- prisma@4.0.0
- react-dom@18.2.0
- react@18.2.0
- sanitize-html@2.7.0
- showdown@2.1.0
- tocbot@4.18.2
- typescript@4.7.4

## 注意事項
- emotionの関係でLinkタグがデフォルトでうまく機能しないので、`import Link from 'next/link';`ではなく、`import Link from "/components/global/MyLink";`を利用する。(ファイルごとに適切な相対パスで指定するように)
- emotionでクラスをつけるときは`className={}`ではなく、`css={}`を使うように。
