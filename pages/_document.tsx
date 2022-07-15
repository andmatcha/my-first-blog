import Document, { Html, Head, Main, NextScript } from "next/document";

// font-family: 'Comfortaa', cursive;
// font-family: 'Noto Sans JP', sans-serif;
// font-family: 'Roboto Mono', monospace;

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* google fonts */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap"
                        rel="stylesheet"
                    />

                    {/* favicon.ico */}
                    <link
                        rel="shortcut icon"
                        href="favicon.ico"
                        type="image/x-icon"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
