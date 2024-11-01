// store.js
import { createStore } from 'redux';
import postReducer from './reducers';
import { setInitialPosts } from './actions';

const store = createStore(postReducer);

// 초기 상태 설정
store.dispatch(setInitialPosts([
  { title: '첫 번째 포스트', description: '첫 번째 포스트입니다.' },
  { title: '두 번째 포스트', description: '두 번째 포스트입니다.' }
]));

export default store;
