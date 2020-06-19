<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem';
import bus from '../utils/bus';
export default {
  components: { ListItem },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store
        .dispatch('FETCH_JOBS')
        .then((res) => bus.$emit('end:spinner'))
        .catch((err) => console.log(err));
    }, 3000);
  },
};
</script>

<style></style>
