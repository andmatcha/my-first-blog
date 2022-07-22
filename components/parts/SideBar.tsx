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
        box-shadow: 0 0 4px #ccc;
        width: 100%;
        height: 100%;
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
        @media (max-width: 1140px) {
            box-shadow: none;
        }
    `,
};
