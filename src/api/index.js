import axios from 'axios';
// https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md

// 1. HTTP Request & Response 관련된 기본 설정
const config = {
    // 토큰 관련 설정도 여기서 정리
    baseUrl: 'https://api.hnpwa.com/',
};

// 2. API 함수들을 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}v0/news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}v0/ask/1.json`);
}

function fetchJobList() {
    return axios.get(`${config.baseUrl}v0/jobs/1.json`);
}

export { fetchNewsList, fetchAskList, fetchJobList };
