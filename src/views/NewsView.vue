<template>
  <div>
    <div v-for="(user, index) in users" v-bind:key="index">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // ajax  통신을 위한 http 통신 라이브러리
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios
      .get('https://api.hnpwa.com/v0/news/1.json')
      .then(
        function (res) {
          this.users = res.data;
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
