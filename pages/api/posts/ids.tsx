import type { NextApiHandler } from "next";
import prisma from "../../../lib/prisma";

// ビルド時に実行してgetStaticPathsに渡すID
const handler: NextApiHandler = async (req, res) => {
    try {
        const postIds = await prisma.post.findMany({
            where: {
                published: true,
            },
            select: {
                id: true,
            },
        });
        res.json(postIds);
        return;
    } catch (error) {
        res.json({ error });
    }
};
export default handler;
