import {
  fetchNewsList,
  fetchAskList,
  fetchJobList,
  fetchUserInfo,
  fetchItem,
} from "../api/index";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then((res) => commit("SET_NEWS", res.data))
      .catch((err) => console.log(err));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then((res) => commit("SET_ASK", res.data))
      .catch((err) => console.log(err));
  },
  FETCH_JOBS({ commit }) {
    fetchJobList()
      .then((res) => commit("SET_JOBS", res.data))
      .catch((err) => console.log(err));
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then((res) => commit("SET_USER", res.data))
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItem(itemId)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      }) // res.data를 {data}로 한번에 받음
      .catch((err) => console.log(err));
  },
};
