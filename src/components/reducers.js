// reducers.js
import { ADD_POST, DELETE_POST, UPDATE_POST, SET_INITIAL_POSTS } from './actions';

const initialState = {
  posts: [
    { title: '첫 번째 포스트', description: '첫 번째 포스트입니다.' },
    { title: '두 번째 포스트', description: '두 번째 포스트입니다.' }
  ]
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((_, index) => index !== action.payload)
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post, index) =>
          index === action.payload.index ? action.payload.updatedPost : post
        )
      };
    default:
      return state;
  }
};

export default postReducer;
