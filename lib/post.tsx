import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { convertToHTMLString } from "minutemd";

const postsDirectory: string = path.join(process.cwd(), "posts");

// mdファイルからデータ取得
export const getPostsData = () => {
    const fileNames: string[] = fs.readdirSync(postsDirectory);
    const allPostsData: {}[] = fileNames.map((fileName) => {
        const postId = fileName.replace(/\.md$/, ''); // 拡張子を除いたファイル名

        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const matterResult = matter(fileContent);

        return {
            postId,
            ...matterResult.data,
        };
    });

    return allPostsData;
};

// getStaticPathsで使用するためのpathを返す関数
export const getAllPostIds = () => {
    const fileNames: string[] = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: { postId: fileName.replace(/\.md$/, '') },
        };
    });
    /*
    [
        {
            params: { postId: xxx }
        }
    ]
    */
};

// postIdに対応する投稿データを取得
export const getPostData = async (postId) => {
    const fullPath = path.join(postsDirectory, `${postId}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContent);
    const blogHTML = convertToHTMLString(matterResult.content);

    return {
        postId,
        blogHTML,
        ...matterResult.data,
    }
}
