import { css } from "@emotion/react";
import selectAllPosts from "../../lib/posts/selectAllPosts";

// const months: string[] = [];
// const getPostMonths = async () => {
//     const posts = await selectAllPosts();
//     posts.forEach((post: {updatedAt: string}) => {
//         const monthArr = post.updatedAt.substring(0, 10).split("-");
//         const month = `${monthArr[0]}年${monthArr[1]}月`;
//         months.push(month);
//     });
// };

// getPostMonths();

const MonthList = ({ months }: {months: string[]}) => {
    return (
        <div css={styles.wrapper}>
            <h3 css={styles.title}>月別アーカイブ</h3>
            <ul css={styles.monthList}>
                {months.map((month) => (
                    <li key={month}>{month}</li>
                ))}
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
