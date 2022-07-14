import Layout, { siteTitle } from '../../components/blog/Layout';
import { getPostsData } from '../../lib/post';
import Link from "../../components/global/MyLink";
import Head from 'next/head';

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
                <title>{ siteTitle }</title>
            </Head>
            <Layout>
                {allPostsData.map(
                    ({ postId, title, date, thumbnail }: postData) => (
                        <article key={postId}>
                            <Link href={`/blog/post/${postId}`}>
                                <div>
                                    <img src={`/blog/thumbnails/${thumbnail}`} alt="" />
                                </div>
                            </Link>
                            <h3>
                                <a>{`${title}`}</a>
                            </h3>
                        </article>
                    )
                )}
            </Layout>
        </>
    );
}

export default index;
