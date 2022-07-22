export type postData = {
    id: number;
    fileName: string;
    published: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    thumbnail: string;
    description: string;
    body: string;
};

export type postDataRequired = {
    id: string;
    title: string;
    thumbnail: string;
    updatedAt: string;
    description: string;
};
