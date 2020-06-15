import { fetchNewsList, fetchAskList, fetchJobList } from '../api/index';

export default {
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
};
