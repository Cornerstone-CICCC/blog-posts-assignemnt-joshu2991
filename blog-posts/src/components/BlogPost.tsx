import { PostType } from "../types/types";
import Post from "./Post";

const BlogPost = ({ post }: { post: PostType }) => {
    return (
        <div>
            <Post post={post} />
        </div>
    );
};

export default BlogPost;