import { css } from "@emotion/react";

export const MainVisual = ({ children }) => {
    return (
        <div css={styles.wrapper}>
            <picture css={styles.picture}>
                <img src={"/main_visual.svg"} alt="" />
            </picture>
            <div css={styles.textBox}>
                <h2 css={styles.title}>Little by little...🐥</h2>
                <div css={styles.description}>{children}</div>
            </div>
        </div>
    );
};

const styles = {
    wrapper: css`
        position: relative;
        /* height: 360px; */
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fffef5;
        @media (max-width: 1140px) {
            /* height: 120px; */
        }
    `,
    picture: css`
        position: absolute;
        width: 100%;
        z-index: 10;
    `,
    textBox: css`
        margin: 48px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 1140px) {
            font-size: 2.4rem;
            letter-spacing: 0.3rem;
        }
        @media (max-width: 520px) {
            font-size: 1.6rem;
            letter-spacing: 0.2rem;
        }
    `,
    title: css`
        font-family: "Comfortaa", cursive;
        font-size: 4.8rem;
        letter-spacing: 0.5rem;
        color: #888;
        z-index: 50;
        text-shadow: 2px 2px 2px #ccc;
    `,
    description: css`
        color: #333;
    `
};
