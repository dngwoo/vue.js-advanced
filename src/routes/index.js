import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import NewsView from '../views/NewsView.vue';
import createListView from '../views/CreateListView.js';

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
      component: NewsView,
      // component: createListView('NewsView'),
      component: NewsView,
      beforeEnter: (to, from, next) => {
        console.log('to', to); // 이동할 URL의 라우팅 정보, object
        console.log('from', from); // 현재 URL의 라우팅 정보, object
        console.log(next); // function
        if (to.auth) {
          next();
        } else {
          router.push('/login');
        }
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
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
