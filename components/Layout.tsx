import Head from 'next/head';

export const siteTitle = 'OmuCode Tech Blog';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <div>
                <header>
                    test
                </header>
                <main>
                    { children }
                </main>
                <footer></footer>
            </div>
        </>
    );
}

export default Layout;
