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
    text-decoration: none;
    color: white;
}
</style>
