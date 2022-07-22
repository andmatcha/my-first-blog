import { css } from "@emotion/react";
import Link from "../global/MyLink";
import { postDataRequired } from "../../types/posts";

const PostCard = ({ id, thumbnail, updatedAt, title, description }: postDataRequired) => {
    return (
        <Link href={`/post/${id}`}>
            <article css={styles.card}>
                <picture css={styles.imageBox}>
                    <img
                        src={`/thumbnails/${thumbnail}`}
                        alt=""
                        css={styles.image}
                    />
                </picture>
                <div css={styles.text}>
                    <h4 css={styles.date}>{updatedAt}</h4>
                    <h3 css={styles.title}>{title}</h3>
                    <p>{description}</p>
                </div>
            </article>
        </Link>
    );
};

export default PostCard;

const styles = {
    card: css`
        width: 320px;
        height: 480px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        gap: 12px;
        border: 1px solid #edebe4;
    `,
    imageBox: css`
        width: 100%;
        margin-bottom: 24px;
    `,
    image: css`
        width: 100%;
        object-fit: contain;
    `,
    text: css`
        width: 100%;
        padding: 0 12px;
    `,
    date: css`
        color: #999;
    `,
    title: css`
        font-size: 1.6rem;
        margin-top: 12px;
    `,
};
