# Vue.js Advanced Class

## 강의에서 배우는 것

1. vue.js를 이용한 **웹서비스 구현 절차**
2. 실무 프로젝트 진행 방식(컴포넌트, **라우터, API, 스토어**)
3. **컴포넌트 디자인 패턴**과 **자바스크립트 비동기 처리**
4. **Mixins**과 **HOC**를 이용한 컴포넌트 재활용 방법
5. **외부 라이브러리 모듈화** 및 **실무 프로젝트 구성** 방법
6. 사용자 경험을 높이는 라우터 설계 방법과 **고급 라우터 패턴**

## 설치 plugin

- **Atom Keymap** : 아톰의 키 설정을 불러오는 플러그인
- **Vetur** : Vue.js 플러그인 ← 싱글 파일 컴포넌트를 사용할때 기능 제공
- **Night Owl** : 코드 하이라이팅 플러그인 ← 코드 테마임
- **Material Dark Syntax** : 코드 하이라이팅 플러그인 ← Night Owl을 쓰면 사용 할 필요 없음
- **Google Material Icon Theme** : 폴더 아이콘 테마 ←확장자에 따라 다른 폴더 아이콘을 씀
- **ESLint** : 자바스크립트 문법 검사 플러그인
- **TSLint** : 타입스크립트 문법 검사 플러그인 ← ts를 쓰지 않아도 기본적인 형에 대한 보조를 해준다.
- **Auto Close tag** : HTML 태그 자동 닫기 플러그인
- **Live Server** : 정적 파일을 로컬 서버에 올리고 자동 갱신해주는 플러그인

## 만들어 볼 페이지

[https://news.ycombinator.com/jobs](https://news.ycombinator.com/jobs)

## 사용할 API

[https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

## 프로젝트 생성

```
yarn add @vue/cli

vue create .
```
