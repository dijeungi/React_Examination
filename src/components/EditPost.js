import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = ({ posts, onUpdatePost }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const post = posts[Number(index)];
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
    }
  }, [index, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePost(Number(index), { title, description });
    navigate('/PostList');
  };

  return (
    <div>
      <h1>포스트 수정하기(EditPost)</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목:</label><br/>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>설명:</label><br/>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">수정하기!</button>
      </form>
    </div>
  );
};

export default EditPost;
