---
layout: post
title: '[React 기초 다지기] JSX와 Babel'
description: ''
featured: false
author: admin
categories: [React]
tags: [리액트 기초]
image: 'https://user-images.githubusercontent.com/67324487/209516656-f0ca928e-a601-40a6-8012-e05682fa0f23.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# React의 기초를 다지자!🧱

역시 제일 중요한 것은 기초! 지금까지 리액트를 사용하여 프로젝트를 진행하고 웹 어플리케이션을 만들어왔지만 정작 기초 지식이 많이 부족하다고 느껴왔었다. 그래서 제로초님의 [리액트 무료 강좌(웹게임)](https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn) 강의를 완강하였고 그 과정에서 리액트의 가장 중요한 기초 지식들을 정리할 수 있었다. 설명이 이해하기 쉽고, 최대한 많은 것을 가르쳐주시려는 게 느껴지는 강의였다. 리액트를 처음 공부하거나, 기초가 부족하다고 느끼시는 분이라면 이 강의를 한 번쯤 듣는 것을 추천한다👍🏻

# React를 사용하는 이유

## SPA

- Single Page Application
  - 사람들이 모바일 기기를 보편적으로 사용하게 됨으로써, 페이지가 명확하게 나뉘어 있는 웹 페이지와는 달리 모바일 어플리케이션과 유사하게 기능하는 웹 서비스의 필요성이 대두됨
    - 페이지가 새로고침 되며 화면이 깜빡이지 않는 등
  - React의 경우 데이터가 바뀌면 화면이 자동으로 따라서 바뀜으로써 화면 제어의 편의성이 보장됨
    - 컴포넌트: 데이터와 화면을 하나로 묶은 덩어리
    - 데이터: state
    - 화면: render() 내의 return 부분

# JSX과 Babel

## JSX

- 자바스크립트를 확장한 문법으로 JavaScript에 XML을 추가한 문법
  - 자바스크립트에서 HTML을 작성할 수 있어서 가독성 높고 쉬움

![](https://velog.velcdn.com/images/carmine/post/f2fa4d7b-d1fb-4b9e-92b1-5a0a080d6fe5/image.png)

- 다음과 같이 스크립트 태그 내에서 HTML 태그를 사용하려면 Babel의 도움이 필요함
- Babel
  - 자바스크립트로 결과물을 만들어주는 컴파일러
  - 컴파일 시 실행됨
  - JSX가 브라우저에서 실행되기 전 Babel이 일반 자바스크립트 코드로 변환
  - 새로운 문법을 기존 브라우저에서 사용하기 위해 필요(babel-polyfill)

```jsx
<script type="text/babel">
// Babel이 해당 코드를 발견하면 아래 JSX를 컴파일할 때 다음(형광펜 강조)과 같이 변환함
```

![](https://velog.velcdn.com/images/carmine/post/9bbbaa91-e34d-441b-af59-6e80f6f032d7/image.png)

[참고](https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)
