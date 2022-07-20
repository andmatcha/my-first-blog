import Layout, { siteTitle } from "../../components/Layout";
import sanitizeHtml from "sanitize-html";
import Head from "next/head";
import { css } from "@emotion/react";
import findPost from "../../lib/posts/findPost";
import Showdown from "showdown";
import selectAllIds from "../../lib/posts/selectAllIds";

export const getStaticPaths = async () => {
    const ids = await selectAllIds();
    const paths = [];
    ids.forEach((v) => {
        const postId = v.id.toString();
        paths.push({ params: { postId: postId } });
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const postData = await findPost(params.postId);
    return {
        props: { postData },
    };
};

const post = ({ postData }) => {
    const converter = new Showdown.Converter();
    const bodyHtml = sanitizeHtml(converter.makeHtml(postData.body));
    const dateArr = postData.updatedAt.substring(0, 10).split("-");
    const date = `${dateArr[0]}年${dateArr[1]}月${dateArr[2]}日`;
    return (
        <>
            <Head>
                <title>{`${postData.title} | siteTitle`}</title>
            </Head>
            <Layout
                head=""
                main={
                    <div css={styles.contentWrapper}>
                        <div css={styles.content}>
                            <p
                                css={styles.date}
                            >{`最終更新日 ${date}`}</p>
                            <h1 css={styles.title}>{postData.title}</h1>
                            <div css={styles.thumbnail}>
                                <picture>
                                    <img
                                        src={`/thumbnails/${postData.thumbnail}`}
                                        alt=""
                                    />
                                </picture>
                            </div>
                            <div
                                css={styles.body}
                                dangerouslySetInnerHTML={{
                                    __html: bodyHtml,
                                }}
                            ></div>
                        </div>
                    </div>
                }
            />
        </>
    );
};

export default post;

const styles = {
    contentWrapper: css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    content: css`
        width: 100%;
    `,
    title: css`
        font-size: 2.4rem;
        font-weight: 500;
        margin: 1rem 0;
    `,
    date: css`
        font-size: 1rem;
        color: #7d6f5e;
        position: relative;
        margin-left: 1.6rem;
        &::before {
            content: "";
            width: 1rem;
            height: 1rem;
            background-color: #f5cf32;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: -1.6rem;
            transform: translate(0, -50%);
        }
    `,
    thumbnail: css`
        width: 100%;
        img {
            width: 100%;
            object-fit: contain;
        }
    `,
    body: css`
        color: #333;
        margin-top: 4rem;
        width: 100%;
        @import "~normalize.css";
        h2 {
            font-size: 2rem;
            font-weight: 600;
            border-bottom: 1px solid #aaa;
            margin: 1.6rem 0;
        }
        h3 {
            font-size: 1.6rem;
            line-height: 2.4rem;
            margin: 1.2rem 0 1.2rem 1rem;
            position: relative;
            ::before {
                content: "";
                width: 0.4rem;
                height: 2.4rem;
                background-color: #f5cf32;
                border-radius: 0.5rem;
                position: absolute;
                top: 50%;
                left: -1rem;
                transform: translate(0, -50%);
            }
        }
        p {
            font-size: 1rem;
            letter-spacing: 0.04rem;
            line-height: 1.6rem;
            margin: 2.4rem 0;
        }
        ul {
            list-style: inside;
            padding: 0;
            ul {
                padding-left: 2rem;
            }
        }
        li {
            line-height: 1.5rem;
        }
        a {
            color: #4e979c;
        }
    `,
};
