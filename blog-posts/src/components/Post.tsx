import { PostType, UserType } from "../types/types";

const Post = ({ post, users }: { post: PostType, users: UserType[] }) => {

    const author = users.find(user => user.id === post.userId)?.name;

    return (
        <div className="post" key={post.id}>
            <h2>Post</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Author: {author}</p>
        </div>
    );
};

export default Post;