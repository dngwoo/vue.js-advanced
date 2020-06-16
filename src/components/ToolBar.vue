<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
    <router-link to="/item">item</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background: #42b883;
  display: flex;
}

.header a {
  padding: 10px;
  color: white;
}

.header .router-link-exact-active {
  color: #35495e;
  border-bottom: 2px solid #35495e;
  transition: color 0.3s ease-out;
}
</style>
