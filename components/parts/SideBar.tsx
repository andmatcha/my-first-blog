import { css } from "@emotion/react";
import SideProfile from "./SideProfile";
import TableOfContents from "./TableOfContents";

const SideBar = ({ toc }) => {
    return (
        <div css={styles.wrapper}>
            <SideProfile />
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
