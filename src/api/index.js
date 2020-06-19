import axios from 'axios';
// https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md

// 1. HTTP Request & Response 관련된 기본 설정
const config = {
  // 토큰 관련 설정도 여기서 정리
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리

export const fetchList = async (pageName) => {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    // .then.catch 의 catch보다 좋은 점은 .catch는 네트워크 오류 단만 잡아 내지만
    // catch(error)는 try에 있는 모든 로직의 오류를 잡아낸다.
    console.log(error);
  }
};

export const fetchUserInfo = (userName) =>
  axios.get(`${config.baseUrl}user/${userName}.json`);

export const fetchItem = (itemId) =>
  axios.get(`${config.baseUrl}item/${itemId}.json`);
