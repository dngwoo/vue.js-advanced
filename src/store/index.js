import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobList } from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // vuex는 상태 관리 도구이다.

    // 상태란 여러 컴포넌트간에 공유되는 데이터 속성
    state: {
        news: [],
        asks: [],
        jobs: [],
    },
    mutations: {
        getNews(state, data) {
            state.news = data;
        },
        getAsks(state, data) {
            state.asks = data;
        },
        getJobs(state, data) {
            state.jobs = data;
        },
    },
    actions: {
        FETCH_NEWS({ commit }) {
            fetchNewsList()
                .then((res) => commit('getNews', res.data))
                .catch((err) => console.log(err));
        },
        FETCH_ASKS({ commit }) {
            fetchAskList()
                .then((res) => commit('getAsks', res.data))
                .catch((err) => console.log(err));
        },
        FETCH_JOBS({ commit }) {
            fetchJobList()
                .then((res) => commit('getJobs', res.data))
                .catch((err) => console.log(err));
        },
    },
});
