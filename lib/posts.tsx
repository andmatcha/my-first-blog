export const selectAllPosts = async () => {
    const res = await fetch("http://localhost:3000/api/posts/selectAll");
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return data;
};

export const findPost = async (postId: string) => {
    const res = await fetch(
        `http://localhost:3000/api/posts/find?id=${postId}`
    );
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return data;
};
