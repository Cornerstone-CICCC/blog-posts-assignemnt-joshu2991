import { PostType } from "../types/types";

const Post = ({ post }: { post: PostType }) => {
    return (
        <div className="post" key={post.id}>
            <h2>Post</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;