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
                <link rel="canonical" href="https://www.piyocode.blog"></link>
                <meta
                    name="description"
                    content="フロントエンドからバックエンドまでWebアプリケーション制作についての話題を中心に発信しています。趣味でReact, Next.js, TypeScriptをやっています。インターンでLaravelもやっています。"
                ></meta>
                <title>{`${siteTitle} - engineer blog`}</title>
            </Head>
            <Layout head={<MainVisual />}>
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
    blogsArea: css`
        display: flex;
        flex-direction: column;
        gap: 12px;
    `,
};
