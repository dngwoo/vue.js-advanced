export default {
  getNews(state, data) {
    state.news = data;
  },
  getAsks(state, data) {
    state.asks = data;
  },
  getJobs(state, data) {
    state.jobs = data;
  },
};
