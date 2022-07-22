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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 1140px) {
            box-shadow: none;
        }
    `,
};
