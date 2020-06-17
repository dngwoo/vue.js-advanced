<template>
  <div class="user">
    <div class="user__img">
      <i class="far fa-user-circle fa-3x"></i>
    </div>
    <div class="user__info">
      <span class="user__id">UserId: {{ user.id }}</span>
      <span class="user__created">UserCreated(Detail): {{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    date: String,
  },
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
