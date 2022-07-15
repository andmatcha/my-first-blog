import { css } from "@emotion/react";

const Header = () => {
    return (
        <>
            <header css={styles.header}>
                <div css={styles.titleBox}>
                    <h1 css={styles.title}>piYo code</h1>
                    <h2 css={styles.titleSmall}>- engineer blog -</h2>
                </div>
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
    `,
    title: css`
        color: #333;
        font-size: 1.6rem;
        font-family: "Comfortaa", cursive;
        letter-spacing: 0.1rem;
    `,
    titleSmall: css`
        color: #333;
        font-size: 1.2rem;
        font-family: "Comfortaa", cursive;
    `,
};
