import axios from 'axios';
// https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md

// 1. HTTP Request & Response 관련된 기본 설정
const config = {
  // 토큰 관련 설정도 여기서 정리
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
export const fetchNewsList = () => axios.get(`${config.baseUrl}news/1.json`);

export const fetchAskList = () => axios.get(`${config.baseUrl}ask/1.json`);

export const fetchJobList = () => axios.get(`${config.baseUrl}jobs/1.json`);

export const fetchUserInfo = (userName) => axios.get(`${config.baseUrl}user/${userName}.json`);
