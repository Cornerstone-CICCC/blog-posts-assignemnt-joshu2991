import { BlogPostListType } from "../types/types";
import BlogPost from "./BlogPost";

const BlogPostList = ({ posts, isLoading }: BlogPostListType) => {
    return (
        <div>
            {isLoading ? <p>Loading...</p> : (
                posts.map((post) => (
                    <BlogPost key={post.id} post={post} />
                ))
            )}
        </div>
    );
};

export default BlogPostList;