import prisma from "../prisma";

// ビルド時に実行して投稿ページを生成するためのデータをDBから取得
const findPost = async (postId) => {
    const data = await prisma.post
        .findUniqueOrThrow({
            where: {
                id: Number(postId),
            },
        })
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
    const post = JSON.parse(JSON.stringify(data));
    return post;
};
export default findPost;
