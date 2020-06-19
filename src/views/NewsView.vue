<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin], // ListMixins 내용이 들어오게 된다.
};
</script>

<style></style>
