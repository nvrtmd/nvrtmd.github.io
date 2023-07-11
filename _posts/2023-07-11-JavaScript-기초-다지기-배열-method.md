---
layout: post
title: '[JavaScript 기초 다지기] 배열 method'
description: ''
featured: false
author: admin
categories: [JavaScript]
tags: [자바스크립트 기초]
image: 'https://github.com/nvrtmd/nvrtmd/assets/67324487/45941fa4-68b7-4eb4-9e6b-4dae64c7cf1f'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# arr.push()/pop()/unshift()/shift(): 기본 삽입, 삭제 메소드

- push(): 배열 맨 뒤에 삽입
- pop(): 배열 맨 뒤에 삭제한 뒤 해당 요소 반환
- unshift(): 배열 맨 앞에 삽입
- shift(): 배열 맨 앞에 삭제한 뒤 해당 요소 반환

```jsx
let array = [1, 2, 3, 4, 5]

array.push(6)
console.log(array) // [ 1, 2, 3, 4, 5, 6 ]

// --------------------------------------------------------------

let popped = array.pop()
console.log(popped) // 6
console.log(array) // [ 1, 2, 3, 4, 5 ]

// --------------------------------------------------------------

array.unshift(0)
console.log(array) // [ 0, 1, 2, 3, 4, 5 ]

// --------------------------------------------------------------

const shifted = array.shift()
console.log(shifted) // 0
console.log(array) // [ 1, 2, 3, 4, 5 ]
```

# arr.splice(n, m): 배열 내 요소 제거

- 인덱스 n부터 m개의 요소를 제거
  - 삭제 요소를 반환함

```jsx
let arr = [0, 1, 2, 3, 4, 5]

arr.splice(0, 2) // [0, 1]

console.log(arr) // [2, 3, 4, 5]
```

# arr.splice(n, m, x): 배열 내 요소 제거 후 추가

- 인덱스 n부터 m개의 요소를 제거 후 x를 삽입
  - m이 0이면 제거하지 않고 n에서부터 요소 추가

```jsx
let arr = [0, 1, 2, 3, 4, 5]

arr.splice(3, 0, 123, 456) // []

console.log(arr) // [0, 1, 2, 123, 456, 3, 4, 5]
```

# arr.concat(arr2, arr3...): 배열 합쳐서 새로운 배열 반환

- 인덱스 n부터 m개의 요소를 제거 후 x를 삽입
  - m이 0이면 제거하지 않고 n에서부터 요소 추가

```jsx
let arr = [1, 2]

arr.concat([3, 4], [5, 6], [7, 8]) // [1, 2, 3, 4, 5, 6, 7, 8]
```

# arr.forEach(fn): 배열 내 요소 순회

- 배열 내 요소를 순회하며 함수의 인자로서 활용
  - 콜백 함수의 첫번째 인자: 배열 내 요소
  - 두번째 인자: 해당 요소의 index

```jsx
let arr = ['A', 'B', 'C']

arr.forEach((alphabet, index) => {
  console.log(`${index}. ${alphabet}`)
})
// 0. A
// 1. B
// 2. C
```

# arr.indexOf(n)/arr.lastIndexOf(n): 배열 내 요소 인덱스 반환

- 배열 내 요소가 처음/마지막에 등장하는 인덱스를 반환
  - arr.indexOf(찾는 요소, 이 인덱스부터 찾기)

```jsx
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4]

arr.indexOf(4) // 3
arr.indexOf(4, 4) // 8
arr.lastIndexOf(3) // 7
```

# arr.includes(): 배열 내 요소 포함 여부 확인

- 배열 내 요소가 처음/마지막에 등장하는 인덱스를 반환
  - arr.indexOf(찾는 요소, 이 인덱스부터 찾기)

```jsx
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4]

arr.includes(2) // true
arr.includes(10) // false
```

# arr.find(fn): 함수를 만족하는 첫번째 요소만을 반환

- 만약 만족하는 요소 없을 시 undefined 반환

```jsx
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4]

arr.find((item) => item % 2 === 0) // 2
arr.find((item) => item % 123 === 0) // undefined
```

# arr.filter(fn): 함수를 만족하는 모든 요소 반환

- 만약 만족하는 요소 없을 시 빈 배열 반환

```jsx
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4]

arr.filter((item) => item % 2 === 0) // [2, 4, 2, 4]
arr.find((item) => item % 123 === 0) // []
```

# arr.map(fn): 배열 내 요소를 순회하며 함수를 적용한 뒤 새로운 배열 반환

- 원본 배열에는 변화 없음

```jsx
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4]

arr.map((item) => item * 2) // [2, 4, 6, 8, 10, 2, 4, 6, 8]
console.log(arr) // [1, 2, 3, 4, 5, 1, 2, 3, 4]
```

# arr.sort(): 배열을 재정렬

- 원본 배열을 변화시킴
- 비교 함수가 제공될 시, 비교 함수 function(a, b)의 결과가 0보다 작으면 a를 b 앞에 두며, 0과 같으면 a, b의 순서를 변경하지 않고, 0보다 크면 b를 a의 앞에 위치시킴

```jsx
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4]

arr.sort() // [1, 1, 2, 2, 3, 3, 4, 4, 5]
console.log(arr) // [1, 1, 2, 2, 3, 3, 4, 4, 5]

// --------------------------------------------------------------

arr.sort((a, b) => a - b) // [1, 1, 2, 2, 3, 3, 4, 4, 5]
arr.sort((a, b) => b - a) // [5, 4, 4, 3, 3, 2, 2, 1, 1]
```

# arr.reverse(): 배열을 역순으로 재정렬

- 원본 배열을 변화시킴

```jsx
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4]

arr.reverse() // [4, 3, 2, 1, 5, 4, 3, 2, 1]
console.log(arr) // [4, 3, 2, 1, 5, 4, 3, 2, 1]
```
