import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // vuex는 상태 관리 도구이다.

  // 상태란 여러 컴포넌트간에 공유되는 데이터 속성
  state,
  getters,
  mutations,
  actions,
});
