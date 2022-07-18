import type { NextApiHandler } from "next";
import prisma from "../../../lib/prisma";

// ビルド時に実行して投稿ページを生成するためのデータをDBから取得
const handler: NextApiHandler = async (req, res) => {
    const postId: number = Number(req.query.id);
    const post = await prisma.post
        .findUniqueOrThrow({
            where: {
                id: postId,
            },
        })
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
    res.json(post);
    return;
};
export default handler;
