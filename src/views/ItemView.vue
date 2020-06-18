<template>
  <div>
    <section>
      <user-profile :item="item" :data="date">
        <span slot="user__info" class="user__id">{{ "Posted: " + item.user }}</span>
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
</style>
