import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WritePost = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ title, description });
    navigate('/PostList');
  };

  return (
    <div>
      <h1>포스트 만들기(Write Post)</h1>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default WritePost;