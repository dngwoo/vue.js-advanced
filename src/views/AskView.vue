<template>
  <ul class="news">
    <li class="news__content" v-for="(item, index) in fetchAsk" :key="index">
      <router-link class="news__link" :to="`item/${item.id}`">{{ item.title }}</router-link>
      <router-link class="news__user" :to="`user/${item.user}`">by {{ item.user }}</router-link>
      <span class="news__time-ago">{{ item.time_ago }}</span>
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
