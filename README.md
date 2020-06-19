# 리팩토링 5 - async & await를 이용한 비동기 처리

```javascript
// store/action.js
async FETCH_LIST({ commit }, pageName) {
const response = await fetchList(pageName);
commit('SET_LIST', response.data);
return response;
},

// api/index.js
export const fetchList = async (pageName) => {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    // .then.catch 의 catch보다 좋은 점은 .catch는 네트워크 오류 단만 잡아 내지만
    // catch(error)는 try에 있는 모든 로직의 오류를 잡아낸다.
    console.log(error);
  }
};
```
