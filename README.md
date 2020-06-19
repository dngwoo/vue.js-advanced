# 리팩토링 2 - Mixin과 하이 오더 컴포넌트(HOC)

- [x] 컴포넌트 재활용 방법 및 재활용할 포인트 소개
- [x] 이벤트 버스를 이용한 스피너 컴포넌트 구현
- [x] 스피너 실행 및 종료 시점 알아보기 (setTimeout or Network에서 새로운 네트워크 만들기)
- [x] 하이 오더 컴포넌트(HOC) 소개 및 구현 (하는 행동들이 같은 것들을 모아둔 곳, 즉, 컴포넌트의 행동을 재활용하기 위해 만드는 컴포넌트임 - news, ask, jobs)

1. news, ask, jobs 는 같은 행동을 한다. 즉, 코드를 재활용 가능하다.
2. news, ask, jobs 에 관련 된 코드를 하나로 통일 시킨다.

```javascript
// 삭제
views / NewsView.vue;
views / AskView.vue;
views / JobsView.vue;

// 수정 (news,ask,jobs 관련 코드 통일)
api / index.js;
routes / index.js; // <- 여기서 HOC 컴포넌트 동작 시킴
store / actions.js;
store / getters.js;
store / mutations.js;
store / state.js;
components / ListItem.vue;

// 새로 만든 파일
views / CreateListView.js; // <- HOC 컴포넌트
views / ListView.vue; // <- HOC 컴포넌트에서 사용되는 템플릿
```

- [x] Mixin의 개요와 활용처

1. 믹스인(Mixins)은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법입니다. 믹스인에 정의할 수 있는 재사용 로직은 data, methods, created 등과 같은 컴포넌트 옵션입니다.
2. src/mixins 디렉토리 생성
3. ListMixin.js 생성 <- 파일 이름에 역할을 매우 분명하게 적어주는 것이 좋다.
4. spinner나 modal과 같은 것들은 mixin으로 빼게 되면 crud 로직만 남게 할 수 있다. 매우 효율적이다.
5. 코드

```javascript
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
```

```javascript
<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin], // ListMixins 내용이 들어오게 된다.
};
</script>

```

- [x] HOC와의 차이점

1. HOC를 사용하게 되면 레벨이 한 단계 깊어지기 때문에 통신(props, event등)에 어려움이 생긴다.
2. 코드의 차이점

```javascript
// mixin
export default {
  // 재사용할 컴포넌트 옵션 & 로직
};

// hoc
export default function create() {
  // 재사용할 컴포넌트 옵션 & 로직
}
```

3. 컴포넌트 기능 테스트 측면에서는 HOC가 mixins 보다 유리하다. 관심사의 분리라는 측면에서 컴포넌트의 역할이 깨끗이 분리가 되면서 기능을 확장 가능하기 때문이다.
