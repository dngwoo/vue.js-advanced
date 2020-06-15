<template>
  <div>
    <div v-for="(user, index) in this.$store.state.asks" :key="index">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchAsks']),
    // ...mapState({ fetchAsks: (state) => state.asks }),
    // fetchAsks() {
    //   return this.$store.state.asks;
    // },
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
};
</script>

<style></style>
