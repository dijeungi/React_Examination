import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, onDelete }) => {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.length === 0 ? (
          <li>제작된 포스트가 없습니다.</li>
        ) : (
          posts.map((post, index) => (
            <li key={index}>
              {post.title} 
              <button onClick={() => onDelete(index)}>Delete</button> 
              <Link to={`/Edit/${index}`} style={{ marginLeft: '8px' }}>
                Edit
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PostList;