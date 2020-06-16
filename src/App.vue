<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url 주소에 따라서 해당 컴포넌트를 출력해준다. -->
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
@import "./assets/css/reset.css";

* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  padding: 10px 0px;
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
  vertical-align: middle;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 5s, transform 5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-30%);
  opacity: 0;
}
</style>
