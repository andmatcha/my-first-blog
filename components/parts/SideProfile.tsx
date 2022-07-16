import { css } from "@emotion/react";

const SideProfile = () => {
    return (
        <div css={styles.profileArea}>
            <div css={styles.profilePicture}>
                <picture>
                    <img src={"/profile.jpeg"} alt="profile" />
                </picture>
            </div>
            <h4 css={styles.writerName}>andmatcha</h4>
            <p css={styles.role}>engineer</p>
            <p css={styles.writerComment}>
                大学1年目の春、プログラミングの面白さを知る。沼にハマること早1年。
            </p>
            <ul css={styles.links}>
                <li>
                    <a href="https://jinaoyagi.com">Portfolio</a>
                </li>
                <li>
                    <a href="https://github.com/andmatcha">GitHub</a>
                </li>
                <li>
                    <a href="https://twitter.com/andmatcha_">Twitter</a>
                </li>
            </ul>
        </div>
    );
};

export default SideProfile;

const styles = {
    profileArea: css`
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid #edebe4;
    `,
    profilePicture: css`
        border-radius: 50%;
        overflow: hidden;
        width: 160px;
        height: 160px;
        img {
            width: 100%;
            object-fit: cover;
        }
    `,
    writerName: css`
        color: #333;
        font-size: 1.2rem;
        letter-spacing: 0.05rem;
        margin: 1rem 0 0.2rem;
        text-align: center;
    `,
    role: css`
        color: #333;
        text-align: center;
        margin-bottom: 1rem;
    `,
    writerComment: css`
        line-height: 1.5rem;
    `,
    links: css`
        margin: 1rem 0;
        li {
            margin: 0.2rem 0;
            text-align: center;
        }
        a {
            line-height: 1.5rem;
            color: #4e979c;
            text-decoration: underline;
        }
    `,
};
