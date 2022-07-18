import type { NextApiHandler } from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import prisma from "../../../lib/prisma";

const postsDirectory: string = path.join(process.cwd(), "posts");

// mdファイルからデータ取得
const getPostsDataFromMd = () => {
    const fileNames: string[] = fs.readdirSync(postsDirectory);
    const allPostsData: {
        published: boolean;
        title: string;
        thumbnail: string;
        description: string;
        body: string;
    }[] = [];
    fileNames.forEach((fileName) => {
        // const postId = fileName.replace(/\.md$/, ""); // 拡張子を除いたファイル名

        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const matterResult = matter(fileContent);
        const postData: {
            published: boolean;
            title: string;
            thumbnail: string;
            description: string;
            body: string;
        } = {
            published: matterResult.data.published,
            title: matterResult.data.title,
            thumbnail: matterResult.data.thumbnail,
            description: matterResult.data.description,
            body: matterResult.content,
        };

        allPostsData.push(postData);
        return;
    });
    console.log(allPostsData);
    return allPostsData;
};

const postHandler = async (req, res) => {
    const allPostsData: any = getPostsDataFromMd();
    const allPostsDataOnDB = await prisma.post
        .createMany({
            data: allPostsData,
        })
        .catch((err) => {
            console.log(err);
            return { error: "Failed to read posts" };
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
    console.dir(allPostsDataOnDB, { depth: null });

    return;
};

const handler: NextApiHandler = (req, res) => {
    switch (req.method) {
        case "GET":
            postHandler(req, res);
            break;
        default:
            return res.status(405).json({ error: "Method not allowed." });
    }
};

export default handler;
