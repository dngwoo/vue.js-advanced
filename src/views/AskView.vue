<template>
  <ul class="news">
    <li class="news__content" v-for="(item, index) in fetchAsk" :key="index">
      <a class="news__link" target="_blank" :href="item.url">
        {{ item.title }}
        <span class="news__user">by {{ item.user }}</span> <span class="news__time-ago">{{ item.time_ago }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchAsk']),
    // ...mapState({ fetchAsks: (state) => state.asks }),
    // fetchAsks() {
    //   return this.$store.state.asks;
    // },
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
