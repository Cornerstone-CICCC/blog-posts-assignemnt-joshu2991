import './App.css'
import BlogPostList from './components/BlogPostList';
import { PostType, UserType } from './types/types';
import { useState, useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data as PostType[]);
    setIsLoading(false);
  };

  const fetchPostsUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data as UserType[]);
  };

  useEffect(() => {
    fetchPostsUsers();
    fetchPosts();   
  }, []);

  return (
    <>
      <BlogPostList posts={posts} isLoading={isLoading} users={users} />
    </>
  )
}

export default App
