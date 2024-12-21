import { BlogPostType } from "../types/types";
import Post from "./Post";

const BlogPost = ({ post, users }: BlogPostType) => {
    return (
        <div>
            <Post post={post} users={users} />
        </div>
    );
};

export default BlogPost;