import Layout, { siteTitle } from "../../components/Layout";
import sanitizeHtml from "sanitize-html";
import Head from "next/head";
import { css } from "@emotion/react";
import { findPost } from "../../lib/posts/findPost";
import { postData } from "../../types/posts";
import Showdown from "showdown";
import selectAllIds from "../../lib/posts/selectAllIds";
import { useEffect } from "react";
import tocbot from "tocbot";
import SideBar from "../../components/parts/SideBar";
import TableOfContents from "../../components/parts/TableOfContents";

export const getStaticPaths = async () => {
    const ids: { id: number }[] = await selectAllIds();
    const paths: { params: { postId: string } }[] = [];
    ids.forEach((v) => {
        const postId = v.id.toString();
        paths.push({ params: { postId: postId } });
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({
    params,
}: {
    params: { postId: string };
}) => {
    const postData: postData = await findPost(params.postId);
    return {
        props: { postData },
    };
};

const Post = ({ postData }: { postData: postData }) => {
    const converter = new Showdown.Converter({ ghCompatibleHeaderId: true });
    const bodyHtml = sanitizeHtml(converter.makeHtml(postData.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            h1: ["id"],
            h2: ["id"],
            h3: ["id"],
            h4: ["id"],
            h5: ["id"],
            h6: ["id"],
        },
    });

    const dateArr = postData.updatedAt.substring(0, 10).split("-");
    const date = `${dateArr[0]}年${dateArr[1]}月${dateArr[2]}日`;

    useEffect(() => {
        tocbot.init({
            tocSelector: ".toc",
            contentSelector: ".body",
            headingSelector: "h2, h3",
        });

        return () => tocbot.destroy();
    }, []);

    return (
        <>
            <Head>
                <link
                    rel="canonical"
                    href={`https://www.piyocode.blog/post/${postData.id}`}
                ></link>
                <meta name="description" content={postData.description} />
                <title>{`${postData.title} | ${siteTitle}`}</title>
            </Head>
            <Layout head="" aside={<SideBar toc={<TableOfContents />} />}>
                <div css={styles.contentWrapper}>
                    <div css={styles.content}>
                        <p css={styles.date}>{`最終更新日 ${date}`}</p>
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
                            className="body"
                            css={styles.body}
                            dangerouslySetInnerHTML={{
                                __html: bodyHtml,
                            }}
                        ></div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Post;

const styles = {
    thumbnail: css`
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 0 4px #ccc;
        img {
            width: 100%;
            object-fit: contain;
        }
    `,
    title: css`
        font-size: 2.4rem;
        font-weight: 500;
        margin-bottom: 24px;
    `,
    contentWrapper: css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    content: css`
        width: 100%;
        padding: 24px;
        box-shadow: 0 0 4px #ccc;
        border-radius: 4px;
    `,
    date: css`
        font-size: 1rem;
        color: #7d6f5e;
        position: relative;
        margin-left: 1.8rem;
        margin-bottom: 8px;
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
    body: css`
        color: #333;
        margin-top: 4rem;
        width: 100%;
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
