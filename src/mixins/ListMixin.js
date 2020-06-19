import bus from '../utils/bus';
// mixin
export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() {
    bus.$emit('start:spinner');
    this.$store
      .dispatch('FETCH_LIST', this.$route.name)
      .then((res) => bus.$emit('end:spinner'))
      .catch((err) => console.log(err));
  },
};
