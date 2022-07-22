import { css } from "@emotion/react";

const TableOfContents = () => {
    return (
        <div css={styles.wrapper}>
            <p css={styles.title}>もくじ</p>
            <nav className="toc" css={styles.nav} />
        </div>
    );
};

export default TableOfContents;

const styles = {
    wrapper: css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
        box-shadow: 0 0 4px #ccc;
        margin-top: 24px;
        font-family: "Roboto Mono", "Noto Sans JP", sans-serif;
    `,
    title: css`
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 12px;
        border-bottom: 2px solid #f5cf32;
        color: #333;
        padding-bottom: 4px;
    `,
    nav: css`
        width: 100%;
        display: flex;
        flex-direction: column;
        li {
            font-size: 1rem;
            color: #aaa;
            line-height: 1.8rem;
            position: relative;
            padding-left: 1.2rem;
            ::before {
                content: "";
                width: 8px;
                height: 8px;
                margin: 4px;
                background-color: #ccc;
                border-radius: 50%;
                position: absolute;
                top: 0.4rem;
                left: 0;
                box-shadow: 0 0 2px #333;
            }
        }
        .is-active-li {
            .is-active-link {
                color: #333;
                font-weight: 600;
            }
            ::before {
                background-color: #f5cf32;
                box-shadow: 0 0 6px #f5cf32;
            }
        }
        ol > li li {
            /* font-size: 1rem; */
        }
    `,
};
