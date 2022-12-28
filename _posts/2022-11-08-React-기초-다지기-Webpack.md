---
layout: post
title: '[React 기초 다지기] Webpack'
description: ''
featured: false
author: admin
categories: [React]
tags: [리액트 기초]
image: 'https://user-images.githubusercontent.com/67324487/209516658-29bee9e0-4b6c-4adc-9276-a13df4e0ae4e.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# Webpack

## Webpack이란

- Webpack
  - 모듈 번들러(Module Bundler)의 일종으로, HTML, CSS, JavaScript 등 웹 애플리케이션의 자원들을 조합하여 하나의 결과물로 만들어주는 도구
  - 실무에서 리액트를 통해 개발을 할 때에는 컴포넌트를 하나만 사용하는 경우가 거의 없으므로 여러 개의 자바스크립트 파일을 하나의 자바스크립트 파일로 합쳐주는 웹팩을 사용해야 함
    - 즉, 여러 개의 자바스크립트 파일을 하나의 파일로 합쳐서 HTML이 실행할 수 있게 하며, 최신 문법들을 오래된 브라우저에서도 작동되도록 해주는 역할
  - 웹팩은 Node(= 자바스크립트 실행기)가 실행시킴

## Webpack 설정

- 기본 원리
  - entry에 있는 파일을 읽고, 그 파일에 module을 적용한 뒤, output으로 도출

```jsx
module.exports = {
  entry: {},

  module: {},

  plugins: [],

  output: {},
}
```

- 바벨 관련 설정
  - 웹팩에도 바벨 설정을 해줘야 jsx를 처리할 수 있음
    - @babel/core: 바벨의 기본적인 구성 요소들이 들어있는 패키지
    - @babel/preset-env: 사용하는 브라우저에 맞게 최신 문법을 옛날 문법으로 바꿔줌
    - @babel/preset-react: jsx를 지원하기 위해 필요
    - babel-loader: 바벨과 웹팩을 연결

## import vs require

- import
  - ES2015 모듈 문법
  - require과 호환 가능
- require
  - 노드의 모듈 문법(common.js)
  - 노드에서는 require만 지원하므로 바벨이 import을 require로 변환함
    - 웹팩은 노드가 실행해주기 때문에 웹팩에서는 노드의 모듈 문법을 사용해야 함

```jsx
// import/export
export const hello = 'hello' // import {hello}

// require/export
exports.hello = 'hello'
const hello = require('hello')
```

[참고](https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)
