# 리팩토링 1 - 리스트 아이템 컴포넌트 공통화

- [x] 공통 컴포넌트 구현 (재사용되는 부분들을 하나의 컴포넌트에 모아준다)
- [x] 공통 컴포넌트 computed, created 속성 구현
- [x] v-if,v-else 뷰디렉티브를 사용
- [x] routes 배열 모듈화(노션에 정리)

```javascript
<template>
  <ul class="news__list">
    <li class="news__list-item" v-for="(item, index) in listItems" :key="index">
      <span class="news__point">{{item.points || 0}}</span>

      <div class="news__column">
        <a v-if="item.domain" class="news__link" target="_blank" :href="item.url">{{ item.title }}</a>
        <router-link v-else class="news__link" :to="`item/${item.id}`">{{ item.title }}</router-link>

        <router-link
          v-if="item.user"
          class="news__user"
          :to="`/user/${item.user}`"
        >by {{ item.user }}</router-link>
        <a v-else class="news__user" target="_blank" :href="`${item.url}`">by {{ item.domain }}</a>
        <span class="news__time-ago">{{ iteㅅm.time_ago }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    if (name === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
  computed: {
    listItems() {
      const { news, ask, jobs } = this.$store.state;
      const name = this.$route.name;
      if (name === "news") {
        return news;
      } else if (name === "ask") {
        return ask;
      } else if (name === "jobs") {
        return jobs;
      } else {
        return null;
      }
    }
  }
};
</script>

<style>
.news__list-item {
  border-bottom: 1px solid silver;
  display: flex;
  align-items: center;
  padding: 1em 0;
}
.news__point {
  width: 80px;
  text-align: center;
  color: #42b883;
}
.news__column {
  display: flex;
  flex-direction: column;
}
.news__link {
  transition: color 0.2s;
}
.news__link:hover {
  color: #42b883;
}
.news__user {
  transition: color 0.2s;
}
.news__user:hover {
  color: chocolate;
}
.news__user,
.news__time-ago {
  font-size: 0.8rem;
  opacity: 0.6;
  margin-top: 0.5em;
}
</style>
```
