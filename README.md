# ブログサイト

## スタック
- TypeScript
- React
- Next.js
- Emotion
### 詳細
- @emotion/babel-plugin@11.9.2
- @emotion/react@11.9.3
- @types/node@18.0.3
- @types/react@18.0.15
- @types/sanitize-html@2.6.2
- destyle.css@3.0.2
- eslint-config-next@12.2.2
- eslint@8.19.0
- gray-matter@4.0.3
- minutemd@1.1.6
- next@12.2.2
- react-dom@18.2.0
- react@18.2.0
- sanitize-html@2.7.0
- typescript@4.7.4

## 注意事項
- emotionの関係でLinkタグがデフォルトでうまく機能しないので、`import Link from 'next/link';`ではなく、`import Link from "/components/global/MyLink";`を利用する。(ファイルごとに適切な相対パスで指定するように)
- emotionでクラスをつけるときは`className={}`ではなく、`css={}`を使うように。
