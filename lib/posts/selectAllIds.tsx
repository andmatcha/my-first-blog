import prisma from "../prisma";

// ビルド時に実行してgetStaticPathsに渡すID
const selectAllIds = async () => {
    const postIds = await prisma.post
        .findMany({
            where: {
                published: true,
            },
            select: {
                id: true,
            },
        })
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
    return postIds;
};
export default selectAllIds;
