<template
    ><div>
        <div v-for="(user, index) in this.$store.state.asks" :key="index">
            {{ user.title }}
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_ASKS');
    },
};
</script>

<style></style>
