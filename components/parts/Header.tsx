import { css } from "@emotion/react";
import Link from "../global/MyLink";

const Header = () => {
    return (
        <>
            <header css={styles.header}>
                <Link href={"https://www.piyocode.blog"}>
                    <div css={styles.titleBox}>
                        <h1 css={styles.title}>ぴよこーど</h1>
                        <h2 css={styles.titleSmall}>- engineer blog -</h2>
                    </div>
                </Link>
            </header>
            <div css={styles.headerSpacer}></div>
        </>
    );
};

export default Header;

const styles = {
    header: css`
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #f2f0e9;
        display: flex;
        align-items: center;
        padding: 0 12px;
        height: 36px;
    `,
    headerSpacer: css`
        width: 100%;
        height: 36px;
    `,
    titleBox: css`
        display: flex;
        align-items: center;
        gap: 24px;
        cursor: pointer;
    `,
    title: css`
        color: #333;
        font-size: 1.6rem;
        font-family: "Noto Sans JP", sans-serif;
        letter-spacing: 0.1rem;
    `,
    titleSmall: css`
        color: #333;
        font-size: 1.2rem;
        font-family: "Comfortaa", cursive;
    `,
};
