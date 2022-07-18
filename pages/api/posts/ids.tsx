import type { NextApiHandler } from "next";
import prisma from "../../../lib/prisma";

// ビルド時に実行してgetStaticPathsに渡すID
const handler: NextApiHandler = async (req, res) => {
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
    res.json(postIds);
    return;
};
export default handler;
