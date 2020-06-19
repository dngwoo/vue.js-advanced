import { fetchNewsList, fetchAskList, fetchJobList, fetchUserInfo, fetchItem, fetchList } from '../api/index';

export default {
  FETCH_USER({ commit }, userName) {
    return fetchUserInfo(userName)
      .then((res) => commit('SET_USER', res.data))
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItem(itemId)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      }) // res.data를 {data}로 한번에 받음
      .catch((err) => console.log(err));
  },
  // #2
  FETCH_LIST({ commit }, pageName) {
    // #3
    console.log(3);
    return fetchList(pageName)
      .then(({ data }) => {
        // #4
        console.log(4);
        commit('SET_LIST', data);
      })
      .catch((err) => {
        console.log(error);
      });
  },
};
