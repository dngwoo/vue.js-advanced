<template>
  <user-profile :user="user" :date="date">
    <template slot="user__info">
      <span class="user__id">{{ "Joined: " + user.id }}</span>
      <span class="user__created">{{"Time: " + date }}</span>
    </template>
  </user-profile>
</template>

<script>
import UserProfile from "../components/UserProfile";
import { mapGetters } from "vuex";
export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters({ user: "fetchUser" }),
    date() {
      const createDate = new Date(this.user.created_time);
      const newDate = `${createDate.getFullYear()}-${createDate.getMonth()}-${createDate.getDay()} ${createDate.getHours()}:${createDate.getMinutes()}:${createDate.getSeconds()}`;
      return newDate;
    }
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", id);
  }
};
</script>
