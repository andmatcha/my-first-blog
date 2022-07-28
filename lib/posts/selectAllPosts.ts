import prisma from "../prisma";

// ビルド時に実行して投稿ページを生成するためのデータをDBから取得(公開設定の投稿を全件取得 (Postのpublished=trueのレコード))
const selectAllPosts = async () => {
    const data = await prisma.post
        .findMany({
            where: {
                published: true,
            },
            orderBy: {
                updatedAt: 'desc'
            }
        })
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
    const posts = JSON.parse(JSON.stringify(data));
    return posts;
};
export default selectAllPosts;
