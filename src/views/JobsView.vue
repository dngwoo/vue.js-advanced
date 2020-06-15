<template
    ><div>
        <div v-for="(user, index) in users" :key="index">
            {{ user.title }}
        </div>
    </div>
</template>

<script>
import { fetchJobList } from '../api/index';
export default {
    data() {
        return {
            users: [],
        };
    },
    // 라이프 싸이클 훅
    created() {
        fetchJobList()
            .then((res) => (this.users = res.data))
            .catch((err) => console.log(err));
    },
};
</script>

<style></style>
