import { css } from "@emotion/react";

const Header = () => {
    return (
        <header css={styles.header}>
            <h1 css={styles.title}>OMU Code - Tech Blog -</h1>
            <p className="intro">現役大学生の個人運営ブログ</p>
        </header>
    );
};

export default Header;

const styles = {
    header: css`
        background-color: #ffdf38;
        padding: 24px 48px;
    `,
    title: css`
        color: #333;
        font-size: 3rem;
    `,
    intro: css`
        color: #333;
        font-size: 1.2rem;
    `
};
