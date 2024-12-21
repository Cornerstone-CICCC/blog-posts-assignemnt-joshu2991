import { BlogPostListType } from "../types/types";
import BlogPost from "./BlogPost";

const BlogPostList = ({ posts, isLoading, users }: BlogPostListType) => {
    return (
        <div>
            {isLoading ? <p>Loading...</p> : (
                posts.map((post) => (
                    <BlogPost key={post.id} post={post} users={users} />
                ))
            )}
        </div>
    );
};

export default BlogPostList;