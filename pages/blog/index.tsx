import Layout, { siteTitle } from '../../components/Layout';
import { getPostsData } from '../../lib/post';
import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {
    const allPostsData: {}[] = getPostsData();
    console.log(allPostsData);

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
                                    <img src={`${thumbnail}`} alt="" />
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
