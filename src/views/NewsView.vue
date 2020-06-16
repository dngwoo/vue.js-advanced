<template>
  <ul class="news">
    <li class="news__content" v-for="(item, index) in fetchNews" :key="index">
      <a class="news__link" target="_blank" :href="item.url">
        {{ item.title }}
        <span class="news__user">by {{ item.user }}</span>
        <span class="news__time-ago">{{ item.time_ago }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
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
