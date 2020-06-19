import { fetchNewsList, fetchAskList, fetchJobList, fetchUserInfo, fetchItem, fetchList } from '../api/index';

export default {
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then((res) => commit('SET_USER', res.data))
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItem(itemId)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      }) // res.data를 {data}로 한번에 받음
      .catch((err) => console.log(err));
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch((err) => {
        console.log(error);
      });
  },
};
