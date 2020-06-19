<template>
  <list-item></list-item>
</template>

<script>
import ListItem from "../components/ListItem";
export default {
  components: { ListItem },
  created() {
    this.$store.dispatch("FETCH_ASK");
    console.log("created");
  }
};
</script>

<style>
</style>