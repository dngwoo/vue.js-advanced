<template>
  <div class="user">
    <div class="user__img">
      <i class="far fa-user-circle fa-3x"></i>
    </div>
    <div class="user__info">
      <slot name="user__info">
        <!-- 알아서 지정 하는 곳 -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    date: String,
    item: Object
  }
};
</script>

<style scoped>
.user {
  display: flex;
  padding: 0.8rem;
}
.user__img {
  margin-right: 0.8rem;
}
.user__info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
