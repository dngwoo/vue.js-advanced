<template
    ><div>
        <div v-for="(user, index) in this.$store.state.jobs" :key="index">
            {{ user.title }}
        </div>
    </div>
</template>

<script>
import { fetchJobList } from '../api/index';
export default {
    created() {
        this.$store.dispatch('FETCH_JOBS');
    },
};
</script>

<style></style>
