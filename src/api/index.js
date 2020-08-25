import axios from 'axios';
// import store from '@/store/index.js';
import { setInterceptors } from './common/interceptors.js';

// axios 초기화 함수
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// axios 초기화 함수 with auth
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // headers: {
    //   Authorization: store.state.token, token이 담기기 전에 담아버림
    // },
  });

  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');

// CREATE - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}
