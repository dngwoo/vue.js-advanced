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
