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
        justify-content: space-between;
        width: 100%;
        padding: 8rem 15%;
        @media (max-width: 960px) {
            flex-direction: column;
        }
    `,
    main: css`
        width: 75%;
        padding: 0 36px;
        @media (max-width: 960px) {
            width: 100%;
        }
    `,
    aside: css`
        width: 25%;
        @media (max-width: 960px) {
            width: 100%;
        }
    `,
};
