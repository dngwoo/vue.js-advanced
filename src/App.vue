<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url 주소에 따라서 해당 컴포넌트를 출력해준다. -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
@import './assets/scss/reset.scss';

* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
}

a {
  color: black;
  text-decoration: none;
}

.news {
  padding: 15px;
}
.news__content {
  display: flex;
  padding: 5px;
}
.news__link {
  margin-right: 10px;
  transition: color 0.1s;
}
.news__link:hover {
  color: #42b883;
}
.news__user {
  color: chocolate;
  margin-right: 10px;
  transition: color 0.1s;
}
.news__user:hover {
  color: #35495e;
}
.news__time-ago {
  color: lightgray;
  font-size: 0.8rem;
}
</style>
