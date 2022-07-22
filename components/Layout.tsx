import Header from "./parts/Header";
import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import { css } from "@emotion/react";
import { ReactNode } from "react";

export const siteTitle: string = "piYo code | Engineering Blog";

const Layout = ({ head, children }: { head: ReactNode; children: ReactNode; }) => {
    return (
        <>
            <div css={styles.wrapper}>
                <Header />
                <div>{head}</div>
                <div css={styles.contents}>
                    <main css={styles.main}>{children}</main>
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
        gap: 24px;
        width: 90%;
        max-width: 1200px;
        margin: 8rem auto;
        padding: 4rem 0;
        @media (max-width: 1140px) {
            flex-direction: column;
        }
    `,
    main: css`
        width: calc(75% - 12px);
        padding-left: 24px;
        @media (max-width: 1140px) {
            width: 100%;
            padding-right: 24px;
        }
    `,
    aside: css`
        width: calc(25% - 12px);
        @media (max-width: 1140px) {
            width: 100%;
        }
    `,
};
