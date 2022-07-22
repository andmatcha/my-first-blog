import { css } from "@emotion/react";

const SideProfile = () => {
    return (
        <div css={styles.profileArea}>
            <div css={styles.namePicBox}>
                <div css={styles.profilePicture}>
                    <picture>
                        <img src={"/profile.jpeg"} alt="profile" />
                    </picture>
                </div>
                <div>
                    <h4 css={styles.writerName}>andmatcha</h4>
                    <p css={styles.role}>engineer</p>
                </div>
            </div>
            <p css={styles.writerComment}>
                趣味プログラマー。好きな食べ物は自分で作ったフレンチトーストです。
            </p>
            <ul css={styles.links}>
                <li>
                    <a href="https://jinaoyagi.com">Portfolio(準備中)</a>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
        box-shadow: 0 0 4px #ccc;
        padding: 24px;
        width: 100%;
        min-width: 240px;
    `,
    namePicBox: css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
    `,
    profilePicture: css`
        border-radius: 50%;
        overflow: hidden;
        width: 60px;
        height: 60px;
        img {
            width: 100%;
            object-fit: cover;
        }
    `,
    writerName: css`
        color: #888;
        font-size: 1.2rem;
        letter-spacing: 0.05rem;
        margin: 1rem 0 0.2rem;
        text-align: center;
    `,
    role: css`
        color: #888;
        text-align: center;
        margin-bottom: 1rem;
    `,
    writerComment: css`
        line-height: 1.5rem;
        color: #888;
        text-align: center;
        font-size: 0.8rem;
    `,
    links: css`
        margin: 1rem 0;
        li {
            margin: 0.2rem 0;
            text-align: center;
            font-size: 0.9rem;
        }
        a {
            line-height: 1.5rem;
            color: #4e979c;
            text-decoration: underline;
        }
    `,
};
