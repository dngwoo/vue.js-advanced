<template>
  <div>
    <div v-for="(user, index) in fetchJobs" :key="index">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchJobs']),
    // ...mapState({ fetchNews: (state) => state.news }),
    // fetchNews () {return this.$store.state.news}
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
