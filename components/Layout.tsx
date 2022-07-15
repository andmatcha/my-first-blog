import Head from 'next/head';
import Header from './parts/Header';
import { css } from '@emotion/react';

export const siteTitle = 'ぴよこーど | Tech Blog';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <div>
            <Header />
                <main css={styles.main}>
                    { children }
                </main>
                <footer></footer>
            </div>
        </>
    );
}

export default Layout;

const styles = {
    main: css`
        padding: 24px 48px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `,
}
