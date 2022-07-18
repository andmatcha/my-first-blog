import Layout, { siteTitle } from "../components/Layout";
import Head from "next/head";
import { css } from "@emotion/react";
import PostCard from "../components/parts/PostCard";
import MainVisual from "../components/parts/MainVisual";
import selectAllPosts from "../lib/posts/selectAllPosts";

export const getStaticProps = async () => {
    const allPostsData: {}[] = await selectAllPosts();

    return {
        props: {
            allPostsData,
        },
    };
};

interface postData {
    id: string;
    title: string;
    updatedAt: string;
    thumbnail: string;
}

const index = ({ allPostsData }) => {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Layout
                head={<MainVisual />}
                main={
                    <div css={styles.blogsArea}>
                        {allPostsData.map(
                            ({ id, title, updatedAt, thumbnail }: postData) => (
                                <PostCard
                                    key={id}
                                    postId={id}
                                    title={title}
                                    src={thumbnail}
                                    date={updatedAt}
                                />
                            )
                        )}
                    </div>
                }
            />
        </>
    );
};

export default index;

const styles = {
    test: css`
        background-color: #ffdf38;
    `,
    blogsArea: css`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    `,
};
