import type { NextApiHandler } from "next";
import prisma from "../../../lib/prisma";

// ビルド時に実行して投稿ページを生成するためのデータをDBから取得
const handler: NextApiHandler = async (req, res) => {
    try {
        const postId: number = Number(req.query.id);
        const post = await prisma.post.findUniqueOrThrow({
            where: {
                id: postId
            },
        });
        res.json(post);
        return;
    } catch (error) {
        res.json({ error });
    }
};
export default handler;
