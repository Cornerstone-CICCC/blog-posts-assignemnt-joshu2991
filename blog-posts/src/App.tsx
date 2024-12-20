import './App.css'
import BlogPostList from './components/BlogPostList';
import { PostType } from './types/types';
import { useState, useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data as PostType[]);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <BlogPostList posts={posts} isLoading={isLoading} />
    </>
  )
}

export default App
