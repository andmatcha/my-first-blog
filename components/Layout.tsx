import Head from "next/head";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import MainVisual from "./parts/MainVisual";
import { css } from "@emotion/react";

export const siteTitle = "piYo code | Engineering Blog";

const Layout = (props) => {
    return (
        <>
            <div css={styles.wrapper}>
                <Header />
                <div>
                    <MainVisual />
                </div>
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
        background-color: #fffdf5;
    `,
    contents: css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 12px;
    `,
    main: css`
        width: 75%;
    `,
    aside: css`
        width: 25%;
    `,
};
