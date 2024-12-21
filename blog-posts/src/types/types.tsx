interface UserType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

interface PostType {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
    users: UserType[];
}

interface BlogPostType {
    post: PostType;
    users: UserType[];
}

interface BlogPostListType {
    posts: PostType[];
    isLoading: boolean;
    users: UserType[];
}

export type { PostType, BlogPostListType, UserType, BlogPostType };