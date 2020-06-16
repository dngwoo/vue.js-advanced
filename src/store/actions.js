import { fetchNewsList, fetchAskList, fetchJobList, fetchUserInfo } from '../api/index';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then((res) => commit('SET_NEWS', res.data))
      .catch((err) => console.log(err));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then((res) => commit('SET_ASK', res.data))
      .catch((err) => console.log(err));
  },
  FETCH_JOBS({ commit }) {
    fetchJobList()
      .then((res) => commit('SET_JOBS', res.data))
      .catch((err) => console.log(err));
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then((res) => commit('SET_USER', res.data))
      .catch((err) => console.log(err));
  },
};
