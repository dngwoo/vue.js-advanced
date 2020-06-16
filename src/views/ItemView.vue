<template>
  <div class="item__info">
    <section>
      <!-- 질문 상세 정보 -->
      <div>User</div>
      <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
      <h2>{{item.title}}</h2>
    </section>
    <section v-html="item.content">
      <!-- 질문 댓글 -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
</style>
