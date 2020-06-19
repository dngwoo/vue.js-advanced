<template>
  <list-item></list-item>
</template>

<script>
import ListItem from "../components/ListItem";
import bus from "../utils/bus";
export default {
  components: { ListItem },
  created() {
    bus.$emit("start:spinner");
    console.log(1);
    this.$store.dispatch("FETCH_NEWS", 2);
    console.log(3);
    bus.$emit("end:spinner");
  },
  mounted() {
    console.log(this.$el);
  }
};
</script>

<style>
</style>
