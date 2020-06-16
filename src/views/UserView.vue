<template>
  <div class="user__info">
    <span class="user__id">UserId: {{ user.id }}</span>
    <span class="user__id">UserKarma: {{ user.karma }}</span>
    <span class="user__id">UserCreated: {{ user.created }}</span>
    <span class="user__created">UserCreated(Detail): {{ date }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({ user: 'fetchUser' }),
    // user(){return this.$store.state.user},
    date() {
      const createDate = new Date(this.user.created_time);
      const newDate = `${createDate.getFullYear()}-${createDate.getMonth()}-${createDate.getDay()} ${createDate.getHours()}:${createDate.getMinutes()}:${createDate.getSeconds()}`;
      return newDate;
    },
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', id);
  },
};
</script>

<style scoped>
.user__info {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
span {
  margin-bottom: 10px;
}
.user__created {
}
</style>
