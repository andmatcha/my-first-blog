import { css } from "@emotion/react";
import SideProfile from "./SideProfile";
import MonthList from "./MonthList";

const SideBar = ({ toc, topSpacer, contents }) => {
    return (
        <div css={styles.wrapper}>
            {topSpacer}
            {contents}
            <div css={styles.table}>{toc}</div>
        </div>
    );
};

export default SideBar;

const styles = {
    wrapper: css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        @media (max-width: 1024px) {
            box-shadow: none;
        }
    `,
    table: css`
        width: 100%;
        height: fit-content;
        @media (max-width: 1024px) {
            display: none;
        }
    `,
};
