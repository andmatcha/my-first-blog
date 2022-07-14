import Layout, { siteTitle } from '../components/Layout';
import { getPostsData } from '../lib/post';
import Link from "../components/global/MyLink";
import Head from 'next/head';
import { css } from '@emotion/react';
import PostCard from '../components/parts/PostCard';

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
            <Layout>
                {allPostsData.map(
                    ({ postId, title, date, thumbnail }: postData) => (
                        <PostCard key={postId} postId={postId} title={title} src={thumbnail} date={date} />
                    )
                )}
            </Layout>
        </>
    );
}

export default index;

const styles = {
    test: css`
        background-color: #ffdf38;
    `,
};
