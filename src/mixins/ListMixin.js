import bus from '../utils/bus';

export default {
  // 원래 AskView.vue, JobsView.vue, NewsView.vue에 전부 적어주기 때문에 mixin으로 재사용한다.
  mounted() {
    bus.$emit('end:spinner');
  },
};
