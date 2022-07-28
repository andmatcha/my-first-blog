import { css } from "@emotion/react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import PostCard from "../components/parts/PostCard";
import { MainVisual } from "../components/parts/MainVisual";
import selectAllPosts from "../lib/posts/selectAllPosts";
import { postData, postDataRequired } from "../types/posts";
import SideBar from "../components/parts/SideBar";
import SideProfile from "../components/parts/SideProfile";
import MonthList from "../components/parts/MonthList";

export const getStaticProps = async () => {
    const allPostsData: postData[] = await selectAllPosts();

    let months: string[] = [];
    allPostsData.forEach((postData) => {
        const monthArr = postData.updatedAt.substring(0, 10).split("-");
        const monthStr = `${monthArr[0]}年${monthArr[1]}月`;
        months.push(monthStr);
        const setTmp = new Set(months);
        months = [...setTmp];
    });

    return {
        props: {
            allPostsData,
            months
        },
    };
};

const Index = ({ allPostsData, months }: { allPostsData: postData[], months: string[] }) => {
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
                    content="フロントエンドからバックエンドまでWebサイト・Webアプリケーション開発についての話題を中心に発信しています。"
                />
                <title>{`${siteTitle} - Webエンジニアブログ`}</title>
            </Head>
            <Layout
                head={<MainVisual />}
                aside={
                    <SideBar
                        topSpacer={<div css={styles.sideTopSpacer}></div>}
                        contents={
                            <>
                                <SideProfile />
                                <MonthList months={months} />
                            </>
                        }
                        toc
                    />
                }
            >
                <h2 css={styles.title}>新着記事</h2>
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

export default Index;

const styles = {
    title: css`
        margin: 16px 0;
        font-size: 2rem;
        @media (max-width: 520px) {
            font-size: 1.6rem;
        }
    `,
    sideTopSpacer: css`
        width: 100%;
        height: 44.8px;
    `,
    blogsArea: css`
        display: flex;
        flex-direction: column;
        gap: 24px;
    `,
};
