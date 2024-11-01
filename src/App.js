// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostList from './components/PostList';
import WritePost from './components/WritePost';
import EditPost from './components/EditPost';
import { addPost, deletePost, updatePost } from './components/actions';

const App = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleAddPost = (post) => {
    dispatch(addPost(post));
  };

  const handleDeletePost = (index) => {
    dispatch(deletePost(index));
  };

  const handleUpdatePost = (index, updatedPost) => {
    dispatch(updatePost(index, updatedPost));
  };

  return (
    <Router>
      <nav>
        <h1>Home Page</h1>
        <Link to="/">Home | </Link>
        <Link to="/PostList">Post List | </Link>
        <Link to="/WritePost">Write Post</Link>
      </nav>
      <Routes>
        <Route path="/PostList" element={<PostList posts={posts} onDelete={handleDeletePost} />} />
        <Route path="/WritePost" element={<WritePost onAddPost={handleAddPost} />} />
        <Route path="/Edit/:index" element={<EditPost posts={posts} onUpdatePost={handleUpdatePost} />} />
      </Routes>
    </Router>
  );
};

export default App;
