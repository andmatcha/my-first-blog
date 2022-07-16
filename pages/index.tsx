import Layout, { siteTitle } from "../components/Layout";
import { getPostsData } from "../lib/post";
import Link from "../components/global/MyLink";
import Head from "next/head";
import { css } from "@emotion/react";
import PostCard from "../components/parts/PostCard";
import MainVisual from "../components/parts/MainVisual";

export const getStaticProps = async () => {
    const allPostsData: {}[] = getPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};

interface postData {
    postId: string;
    title: string;
    date: string;
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
                            ({ postId, title, date, thumbnail }: postData) => (
                                <PostCard
                                    key={postId}
                                    postId={postId}
                                    title={title}
                                    src={thumbnail}
                                    date={date}
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
