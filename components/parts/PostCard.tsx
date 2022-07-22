import { css } from "@emotion/react";
import Link from "../global/MyLink";
import { postDataRequired } from "../../types/posts";

const PostCard = ({
    id,
    thumbnail,
    updatedAt,
    title,
    description,
}: postDataRequired) => {
    return (
        <Link href={`/post/${id}`}>
            <article css={styles.card}>
                <div css={styles.imageBox}>
                    <picture>
                        <img
                            src={`/thumbnails/${thumbnail}`}
                            alt=""
                            css={styles.image}
                        />
                    </picture>
                </div>
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
        width: 100%;
        height: 240px;
        display: flex;
        cursor: pointer;
        gap: 12px;
        box-shadow: 0 0 4px #ccc;
        background-color: #fffef5;
        border-radius: 4px;
        padding: 12px;
    `,
    imageBox: css`
        width: 480px;
        display: flex;
        align-items: center;
    `,
    image: css`
        width: 100%;
        object-fit: contain;
    `,
    text: css`
        width: 100%;
        padding: 24px 0;
    `,
    date: css`
        color: #999;
    `,
    title: css`
        font-size: 1.6rem;
        margin: 8px 0;
    `,
};
