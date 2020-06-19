import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import NewsView from '../views/NewsView.vue';
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      // home에 들어가자 말자 /news로 리다이렉트가 된다.
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      // component: createListView('NewsView'),
      component: NewsView,
      beforeEnter: (to, from, next) => {
        // console.log('to', to); // 이동할 URL의 라우팅 정보, object
        // console.log('from', from); // 현재 URL의 라우팅 정보, object
        // console.log(next); // function
        bus.$emit('start:spinner');
        store
          // this.$route.name은 사용하지 못하므로 to.name으로 바꿔야 한다.
          .dispatch('FETCH_LIST', to.name)
          .then((res) => {
            next();
          })
          .catch((err) => console.log(err));
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then((res) => {
            next();
          })
          .catch((err) => console.log(err));
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then((res) => {
            next();
          })
          .catch((err) => console.log(err));
      },
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
  ],
});
