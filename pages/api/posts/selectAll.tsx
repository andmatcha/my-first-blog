import type { NextApiHandler } from "next";
import prisma from "../../../lib/prisma";

// ビルド時に実行して投稿ページを生成するためのデータをDBから取得(公開設定の投稿を全件取得 (Postのpublished=trueのレコード))
const handler: NextApiHandler = async (req, res) => {
    const posts = await prisma.post
        .findMany({
            where: {
                published: true,
            },
        })
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
    res.json({
        posts,
    });
    return;
};
export default handler;
