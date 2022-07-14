/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit', // JIT (just-in-time) modeを適用
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/.{js,ts,jsx,tsx}'], // ビルド生成時の未使用のスタイルを除外し、パフォーマンスを最適化
    theme: {
        extend: {},
    },
    plugins: [],
}
