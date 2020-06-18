<template>
  <div>
    <section>
      <user-profile :item="item" :data="date">
        <router-link
          slot="user__info"
          class="user__id"
          :to="`/user/${item.user}`"
        >{{ "Posted: " + item.user }}</router-link>
        <span slot="user__info" class="user__created">{{ "Time: " + date }}</span>
      </user-profile>
    </section>
    <section>
      <h2 class="item__title">{{ item.title }}</h2>
    </section>
    <section v-html="item.content">
      <!-- 질문 댓글 -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile";
export default {
  components: { UserProfile },
  computed: {
    ...mapGetters({ item: "fetchItem" }),
    date() {
      const createDate = new Date(this.item.time);
      const newDate = `${createDate.getFullYear()}-${createDate.getMonth()}-${createDate.getDay()} ${createDate.getHours()}:${createDate.getMinutes()}:${createDate.getSeconds()}`;
      return newDate;
    }
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", id);
  }
};
</script>

<style scoped>
.item__title {
  font-weight: bold;
  margin: 1.5em 0;
  font-size: 1.1rem;
}
.user__id {
  transition: color 0.2s;
}
.user__id:hover {
  color: chocolate;
}
</style>
