interface PostType {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
}

interface BlogPostListType {
    posts: PostType[];
    isLoading: boolean;
}

export type { PostType, BlogPostListType };