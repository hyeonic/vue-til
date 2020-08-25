import axios from 'axios';
// import store from '@/store/index.js';
import { setInterceptors } from './common/interceptors.js';

// axios 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   Authorization: store.state.token, token이 담기기 전에 담아버림
    // },
  });

  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  //   const url = 'http://localhost:3000/signup';
  //   return axios.post(url, userData);
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 합습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts');
}

// 학습 노트 데이터를 생성하는 API
function createPost(post) {
  return instance.post('posts', post);
}

export { registerUser, loginUser, fetchPosts, createPost };
