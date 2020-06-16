<template>
  <ul class="news">
    <li class="news__content" v-for="(item, index) in fetchJobs" :key="index">
      <a class="news__link" target="_blank" :href="item.url">
        {{ item.title }}
        <span class="news__time-ago">{{ item.time_ago }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchJobs']),
    // ...mapState({ fetchJobs: (state) => state.news }),
    // fetchJobs () {return this.$store.state.news}
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
