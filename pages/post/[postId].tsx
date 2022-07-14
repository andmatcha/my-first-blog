import Layout, { siteTitle } from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import sanitizeHtml from 'sanitize-html';
import Head from 'next/head';

export const getStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.postId);

    return {
        props: { postData },
    };
}

const post = ({ postData }) => {
    return (
        <>
            <Head>
                <title>{postData.title} | { siteTitle }</title>
            </Head>
            <Layout>
                {postData.title}
                <br />
                {postData.date}
                <br />
                <div
                    dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(postData.blogHTML),
                    }}
                ></div>
            </Layout>
        </>
    );
}

export default post;
