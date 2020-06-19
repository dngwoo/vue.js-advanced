import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
  return {
    // 재사용할 인스천스(컴포넌트) 옵션들이 들어갈 자리
    name, // 컴포넌트 구분을 위해 넣어준 옵션
    render(h) {
      return h(ListView);
    },
    created() {
      bus.$emit('start:spinner');
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then((res) => bus.$emit('end:spinner'))
        .catch((err) => console.log(err));
    },
  };
}

// 뷰 내부적으로 템플릿을 컴파일해서 변환을 해주는데 변환을 할때 render함수를 쓴다
