import { css } from "@emotion/react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import PostCard from "../components/parts/PostCard";
import { MainVisual } from "../components/parts/MainVisual";
import selectAllPosts from "../lib/posts/selectAllPosts";
import { postData, postDataRequired } from "../types/posts";

export const getStaticProps = async () => {
    const allPostsData: postData[] = await selectAllPosts();

    return {
        props: {
            allPostsData,
        },
    };
};

const index = ({ allPostsData }: { allPostsData: postData[] }) => {
    // 表示データをカスタマイズ
    const allPostsDataRequired: postDataRequired[] = allPostsData.map(
        ({ id, title, thumbnail, updatedAt, description }) => {
            // idをstringに変換
            const idStr = id.toString();
            // 日付のフォーマットを修正
            const dateArr = updatedAt.substring(0, 10).split("-");
            updatedAt = `${dateArr[0]}年${dateArr[1]}月${dateArr[2]}日`;
            return { id: idStr, title, thumbnail, updatedAt, description };
        }
    );

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Layout
                head={
                    <MainVisual>
                        <div css={styles.headText}>
                            <h2>生まれたて技術ブログ</h2>
                            <p>
                                新しく学んだことや自分が勉強していてハマったことなどを投稿しています。Web系(React,
                                Next.js,
                                TypeScript)がメインですが、最近いろんな言語に手を出しています...
                            </p>
                        </div>
                    </MainVisual>
                }
            >
                <div css={styles.blogsArea}>
                    {allPostsDataRequired.map(
                        ({
                            id,
                            title,
                            thumbnail,
                            updatedAt,
                            description,
                        }: postDataRequired) => (
                            <PostCard
                                key={id}
                                id={id.toString()}
                                title={title}
                                thumbnail={thumbnail}
                                updatedAt={updatedAt}
                                description={description}
                            />
                        )
                    )}
                </div>
            </Layout>
        </>
    );
};

export default index;

const styles = {
    headText: css`
        width: 100%;
        display: flex;
        margin-top: 24px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h2 {
            font-size: 2rem;
            letter-spacing: 0.06rem;
            line-height: 3rem;
        }
        p {
            padding: 12px;
            width: 60%;
            font-size: 1.2rem;
            letter-spacing: 0.05rem;
            line-height: 1.8rem;
            text-align: center;
        }
    `,
    blogsArea: css`
        display: flex;
        flex-direction: column;
        gap: 12px;
    `,
};
