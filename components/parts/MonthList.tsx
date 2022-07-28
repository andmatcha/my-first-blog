import { css } from "@emotion/react";

const MonthList = () => {
    return (
        <div css={styles.wrapper}>
            <h3 css={styles.title}>月別アーカイブ</h3>
            <ul css={styles.monthList}>
                <li>2022年7月</li>
            </ul>
        </div>
    );
};

export default MonthList;

const styles = {
    wrapper: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
        box-shadow: 0 0 4px #ccc;
        padding: 24px;
        width: 100%;
        min-width: 240px;
    `,
    title: css`
        font-size: 1.2rem;
        color: #333;
        margin-bottom: 12px;
        padding-bottom: 4px;
        border-bottom: 2px solid #f5cf32;
    `,
    monthList: css`
        width: 100%;
        li {
            color: #4e979c;
            text-align: left;
        }
    `,
};
