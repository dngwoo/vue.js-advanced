<template>
    <div>
        <div v-for="(user, index) in users" v-bind:key="index">
            {{ user.title }}
        </div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index';
export default {
    data() {
        return {
            users: [],
        };
    },
    created() {
        fetchNewsList()
            .then(
                function(res) {
                    res.data.forEach((data) => {
                        this.users.push(data);
                    });
                }.bind(this),
            )
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style></style>
