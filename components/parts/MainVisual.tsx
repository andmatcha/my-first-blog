import { css } from "@emotion/react";

export const MainVisual = () => {
    return (
        <div css={styles.wrapper}>
            <picture css={styles.picture}>
                <img src={"/main_visual.svg"} alt="" />
            </picture>
            <div css={styles.textBox}>
                <h2 css={styles.title}>Little by little...🐥</h2>
                <div css={styles.description}>
                    <div css={styles.headText}>
                        <h2>生まれたてWebエンジニアブログ</h2>
                        <p>
                            ひよっこエンジニアならではの視点でWebフロントエンド・バックエンド・周辺知識を噛み砕いてお届け
                        </p>
                    </div>
                </div>
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
        @media (max-width: 1024px) {
            height: 120px;
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
    `,
    title: css`
        font-family: "Comfortaa", cursive;
        font-size: 4.8rem;
        letter-spacing: 0.5rem;
        color: #888;
        z-index: 50;
        text-shadow: 2px 2px 2px #ccc;
        @media (max-width: 1024px) {
            font-size: 2.4rem;
            letter-spacing: 0.3rem;
        }
        @media (max-width: 520px) {
            font-size: 1.6rem;
            letter-spacing: 0.2rem;
        }
    `,
    description: css`
        color: #333;
        @media (max-width: 1024px) {
            display: none;
        }
    `,
    headText: css`
        width: 100%;
        display: flex;
        margin-top: 24px;
        align-items: center;
        flex-direction: column;
        h2 {
            font-size: 2rem;
            letter-spacing: 0.06rem;
            line-height: 3rem;
            @media (max-width: 1024px) {
                font-size: 1.6rem;
            }
        }
        p {
            padding: 12px;
            width: 60%;
            font-size: 1.2rem;
            letter-spacing: 0.05rem;
            line-height: 1.8rem;
            text-align: center;
            @media (max-width: 960px) {
                width: 80%;
            }
            @media (max-width: 760px) {
                width: 90%;
                font-size: 1rem;
            }
        }
    `,
};
