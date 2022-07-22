import prisma from "../prisma";
import { postData } from "../../types/posts";

// ビルド時に実行して投稿ページを生成するためのデータをDBから取得
export const findPost = async (postId: string) => {
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
    const post: postData = JSON.parse(JSON.stringify(data));
    return post;
};
