<template>
  <div class="item__info">
    <section>
      <user-profile></user-profile>
    </section>
    <section v-html="item.content">
      <!-- 질문 댓글 -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile';
export default {
  components: { UserProfile },
  computed: {
    ...mapGetters({ item: 'fetchItem' }),
    date() {
      const createDate = new Date(this.item.time);
      const newDate = `${createDate.getFullYear()}-${createDate.getMonth()}-${createDate.getDay()} ${createDate.getHours()}:${createDate.getMinutes()}:${createDate.getSeconds()}`;
      return newDate;
    },
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id);
  },
};
</script>

<style scoped></style>
