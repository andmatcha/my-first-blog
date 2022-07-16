import Header from "./parts/Header";
import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import { css } from "@emotion/react";

export const siteTitle = "piYo code | Engineering Blog";

const Layout = (props: { head: any; main: any; }) => {
    return (
        <>
            <div css={styles.wrapper}>
                <Header />
                <div>{props.head}</div>
                <div css={styles.contents}>
                    <main css={styles.main}>{props.main}</main>
                    <aside css={styles.aside}>
                        <SideBar />
                    </aside>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;

const styles = {
    wrapper: css`
        font-family: "Roboto Mono", "Noto Sans JP", sans-serif;
        background-color: #fffef5;
    `,
    contents: css`
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 24px;
        padding: 8rem 13%;
        @media (max-width: 960px) {
            flex-direction: column;
        }
    `,
    main: css`
        width: calc(75% - 12px);
        @media (max-width: 960px) {
            width: 100%;
        }
    `,
    aside: css`
        width: calc(25% - 12px);
        @media (max-width: 960px) {
            width: 100%;
        }
    `,
};
