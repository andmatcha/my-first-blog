import { css } from "@emotion/react";
import SideProfile from "./SideProfile";
import TableOfContents from "./TableOfContents";

const SideBar = () => {
    return (
        <div css={styles.wrapper}>
            <SideProfile />
            <TableOfContents />
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
};
