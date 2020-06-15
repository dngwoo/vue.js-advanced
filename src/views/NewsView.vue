<template>
  <div>
    <div v-for="(user, index) in fetchNews" v-bind:key="index">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchNews']),
    // ...mapState({ fetchNews: (state) => state.news }),
    // fetchNews () {return this.$store.state.news}
  },
  created() {
    // dispatch로 actions 실행
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
