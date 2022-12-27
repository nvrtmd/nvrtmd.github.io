---
layout: post
title: '[Node.js 백엔드 기초] JavaScript 기초 - 비구조화 할당 (구조분해 할당)'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511664-866ddc52-54f0-4cc9-a5d3-cc6c77728408.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 비구조화 할당 (구조분해 할당)

- 비구조화 할당
  - 배열과 객체의 값을 변수에 일괄 할당하는 방법

```jsx
// 일반적인 배열 값 추출 방법
const books = ['React', 'Vue', 'Angular']
const book1 = books[0]
const book2 = books[1]
const book3 = books[2]

console.log(`배열 요소 1 ${book1}, 2 ${book2}, 3 ${book3}`) // 배열 요소 1 React, 2 Vue, 3 Angular

// 배열의 비구조화 할당 방법
// const [book4, book5, book6] = ['React', 'Vue', 'Angular']; <- 이것도 가능
const [book4, book5, book6] = books
console.log(`배열 요소 4 ${book4}, 5 ${book5}, 6 ${book6}`) // 배열 요소 4 React, 5 Vue, 6 Angular
```

- 일반적인 객체 값 추출 방법과 객체의 비구조화 할당 방법 비교
  - 객체의 비구조화 할당 시 객체의 key와 동일한 변수에 비구조화 할당 가능

```jsx
// 일반적인 객체 값 추출 방법
let trendTech = {
  frontend: 'React',
  backend: 'Node',
  server: 'linux',
  infra: 'AWS Cloud',
  getAuthor: function () {
    return 'Sarah'
  },
}

let trendFrontend = trendTech.frontend
let trendBackend = trendTech.backend

console.log(`트렌드 프론트 기술 ${trendFrontend}, 백엔드 기술 ${trendBackend}`) // 트렌드 프론트 기술 React, 백엔드 기술 Node

// 객체의 비구조화 할당 방법
/*
const { frontend, backend, server, infra } = {
    frontend: "React",
    backend: "Node",
    server: "linux",
    infra: "AWS Cloud",
    getAuthor: function () {
        return "Sarah"
    }
}; <- 이것도 가능
*/
const { frontend, backend, server, infra } = trendTech

console.log(`트렌드 프론트 기술 ${frontend}, 백엔드 기술 ${backend}`) // 트렌드 프론트 기술 React, 백엔드 기술 Node
```
