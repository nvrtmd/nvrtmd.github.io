---
layout: post
title: '[Node.js 백엔드 기초] JavaScript 기초 - 다양한 함수 사용법'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511663-f846f940-4a13-455a-b6e7-23e512ec6ad5.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 다양한 함수 사용법

### 전통적인 함수 선언 및 사용

```jsx
function add1(a, b) {
  let c = a + b
  return c
}

let result1 = add1(1, 2)
console.log(result1) // 3
```

### 익명함수 선언 및 사용

- 함수 생성 후 바로 변수에 할당하고 호출하여 사용 가능

```jsx
var anonymousFunction = function (a, b) {
  return a * b
}

var result2 = anonymousFunction(4, 5)
console.log(result2) // 20
```

### arrow 함수 선언 및 사용

- 함수 내 return 구문만 존재할 시 생략 가능

```jsx
const arrowFunction1 = (a, b) => {
  const answer = a - b
  return answer
}

const arrowFunction2 = (a, b) => a - b

console.log(arrowFunction1(10, 5)) // 5
console.log(arrowFunction2(20, 5)) // 15
```
