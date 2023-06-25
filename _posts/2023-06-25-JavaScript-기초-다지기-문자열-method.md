---
layout: post
title: '[JavaScript 기초 다지기] 문자열 method'
description: ''
featured: false
author: admin
categories: [JavaScript]
tags: [자바스크립트 기초]
image: 'https://github.com/nvrtmd/nvrtmd/assets/67324487/0060a144-93aa-4fca-9083-f63109cd56f2'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 특정 위치에 접근

- 특정 위치에 인덱스를 사용하여 접근 가능
  - 문자열 내 한 글자만 인덱스로 접근하여 변경은 불가능

```jsx
let sentence = 'hello'
sentence[1] = 'o'

console.log(sentence) // 'hello'
```

# str.toUpperCase()/toLowerCase(): 대문자/소문자 변환

```jsx
let sentence = 'hello'

console.log(sentence.toUpperCase()) // 'HELLO'
console.log(sentence.toLowerCase()) // 'hello'
```

# str.indexOf(): 문자열 위치 반환

- 문자를 인수로 받아 몇 번째 위치하는 지 반환
  - 찾는 문자가 해당 문자열에 없으면 -1을 반환
  - 일치하는 문자열이 여러 개 있어도 첫 번째 위치만 반환

```jsx
let sentence = 'hello, how are you?'

console.log(sentence.indexOf('how')) // 7
console.log(sentence.indexOf('hi')) // -1
console.log(sentence.indexOf('h')) // 0
```

# str.slice(n, m): 문자열 자르기

- 인덱스 n부터 m까지 문자열을 잘라서 반환
  - m이 없으면 n부터 문자열 끝까지
  - m이 양수면 n부터 m-1까지
  - m이 음수면 n부터 끝에서 m-1까지
    - 끝에서 셀 때는 -1, -2, -3...순으로 셈

```jsx
let sentence = 'hello, how are you?'

console.log(sentence.slice(7)) // 'how are you?'
console.log(sentence.slice(0, 5)) // 'hello'
console.log(sentence.slice(7, -5)) // 'how are'
```

# str.substring(n, m): 문자열 자르기

- 인덱스 n부터 m까지 문자열을 잘라서 반환
  - n과 m을 바꿔도 동일하게 동작: 작은 수부터 큰 수까지
  - 음수는 0으로 인식

```jsx
let sentence = 'hello, how are you?'

console.log(sentence.substring(7)) // 'how are you?'
console.log(sentence.substring(0, 5)) // 'hello'
console.log(sentence.substring(7, -5)) // 'hello, '
```

# str.substr(n, m): 문자열 자르기

- 인덱스 n부터 m개의 문자열을 반환
  - m이 없으면 n부터 문자열 끝까지

```jsx
let sentence = 'hello, how are you?'

console.log(sentence.substr(7)) // 'how are you?'
console.log(sentence.substr(0, 5)) // 'hello'
console.log(sentence.substr(-12, 3)) // 'how'
```

# str.trim(): 문자열 앞뒤 공백 제거

```jsx
let sentence = '  hello?   '

console.log(sentence.trim()) // 'hello?'
```
