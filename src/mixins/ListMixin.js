import bus from '../utils/bus';
// mixin
export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() {
    bus.$emit('start:spinner');
    // #1
    console.log(1);
    this.$store
      .dispatch('FETCH_LIST', this.$route.name)
      .then((res) => {
        // #5
        console.log(5);
        bus.$emit('end:spinner');
      })
      .catch((err) => console.log(err));
  },
};
