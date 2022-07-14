import { css } from "@emotion/react";
import Link from "../global/MyLink";

const PostCard = (props: { postId: string; title: string; src: string; date: string; }) => {
    return (
        <Link href={`/post/${props.postId}`}>
            <article css={styles.card}>
                <picture css={styles.imageBox}>
                    <img
                        src={`/thumbnails/${props.src}`}
                        alt=""
                        css={styles.image}
                    />
                </picture>
                <div css={styles.text}>
                    <h4 css={styles.date}>{props.date}</h4>
                    <h3 css={styles.title}>{props.title}</h3>
                </div>
            </article>
        </Link>
    );
}

export default PostCard;

const styles = {
    card: css`
        width: 480px;
        height: 560px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        gap: 12px;
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
    `

}
