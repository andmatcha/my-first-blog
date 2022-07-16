import { css } from "@emotion/react";
import SideProfile from "./SideProfile";

const SideBar = () => {
    return (
        <div css={styles.wrapper}>
            <SideProfile />
        </div>
    );
};

export default SideBar;

const styles = {
    wrapper: css`
        border-left: 1px solid #edebe4;
        width: 100%;
        height: 100%;
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
};
