import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function createPost() {
    const allUsers = await prisma.post.create({
        data: {
            published: true,
            title: "はじめてのブログ",
            description: "ブログ、初めてみました。",
            body: `
## 見出し2

ここに文章を記述。ここに文章を記述。

### 見出し3

ここに文章を記述。ここに文章を記述。
`,
        },
    });
    console.dir(allUsers, { depth: null });
}

createPost()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
