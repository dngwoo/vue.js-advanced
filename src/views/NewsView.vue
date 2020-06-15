<template>
    <div>
        <div v-for="(user, index) in this.$store.state.news" v-bind:key="index">
            {{ user.title }}
        </div>
    </div>
</template>

<script>
export default {
    created() {
        // dispatch로 actions 실행
        this.$store.dispatch('FETCH_NEWS');
    },
};
</script>

<style></style>
