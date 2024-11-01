// actions.js
export const SET_INITIAL_POSTS = 'SET_INITIAL_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const setInitialPosts = (posts) => ({
  type: SET_INITIAL_POSTS,
  payload: posts
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post
});

export const deletePost = (index) => ({
  type: DELETE_POST,
  payload: index
});

export const updatePost = (index, updatedPost) => ({
  type: UPDATE_POST,
  payload: { index, updatedPost }
});
