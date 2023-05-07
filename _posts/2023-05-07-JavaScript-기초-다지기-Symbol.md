---
layout: post
title: '[JavaScript 기초 다지기] Symbol'
description: ''
featured: false
author: admin
categories: [JavaScript]
tags: [자바스크립트 기초]
image: 'https://user-images.githubusercontent.com/67324487/236681646-8b33a5a9-a792-42d8-9568-9ba12138c5d6.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 계산된 프로퍼티 (Computed Property)

- 객체의 key 값을 [변수]로 표현 시 변수 안의 값이 객체의 key 값으로 할당됨
  - 그 프로퍼티를 ‘계산된 프로퍼티’라고 칭함

```jsx
const key1 = 'name'
const user1 = {
  [key1]: 'Yuza',
  age: 49,
}

console.log(user1) // { name: 'Yuza', age: 49 }

// --------------------------------------------------------------

const user2 = {
  [9 + 3]: 12,
  ['say' + ' hello']: 'Hello',
}

console.log(user2) // { '12': 12, 'say hello': 'Hello' }
```

# 다양한 객체 메소드

## Object.assign(초기값, 복제할 객체): 객체 복제 메소드

- 변수에 ‘객체를 할당한 다른 변수’를 할당하는 방식으로는 제대로 복제할 수 없음
  - clone1에 person을 할당할 경우, person이 가리키던 객체를 clone1도 함께 가리키게 됨
  - clone1이 가리키는 객체와 person이 가리키는 객체는 동일 객체이므로, clone1을 통해 객체의 속성값을 변경하면 person에 할당된 객체의 속성값도 함께 변경됨

```jsx
const person = {
  name: 'Yuza',
  age: 29,
}

const clone1 = person
clone1.name = 'James'

console.log(person) // { name: 'James', age: 29 } person도 함께 바뀌어버림;;
console.log(clone1) // { name: 'James', age: 29 }
```

- Object.assign() 메소드를 활용한 객체 복제

```jsx
const person = {
  name: 'Yuza',
  age: 29,
}

// 초기값이 빈 객체인 경우
const clone2 = Object.assign({}, person)
clone2.name = 'James'

console.log(person) // { name: 'Yuza', age: 29 }
console.log(clone2) // { name: 'James', age: 29 }

// --------------------------------------------------------------

// 초기값이 존재하는 경우
const clone3 = Object.assign({ job: 'programmer' }, person)
clone3.name = 'Diane'

console.log(clone3) // { job: 'programmer', name: 'Diane', age: 29 }

// --------------------------------------------------------------

// 초기값에 동일 속성명의 속성값 존재할 시, 해당 속성값은 객체의 원래 속성값으로 덮어씌워짐
const clone4 = Object.assign({ name: 'Colin', age: 10, job: 'writer' }, person)

console.log(clone4) // {name: 'Yuza', age: 29, job: 'writer'}

// --------------------------------------------------------------

// 다수의 객체 통합
const attribute1 = {
  job: 'programmer',
}
const attribute2 = {
  location: 'Seoul',
}

const clone5 = Object.assign(person, attribute1, attribute2)

console.log(clone5) // {name: 'Yuza', age: 29, job: 'programmer', location: 'Seoul'}
```

## Object.keys(): 객체의 속성명을 배열로 반환

```jsx
const person = {
  name: 'Yuza',
  age: 38,
}

console.log(Object.keys(person)) // [ 'name', 'age' ]
```

## Object.values(): 객체의 속성값을 배열로 반환

```jsx
const person = {
  name: 'Yuza',
  age: 67,
}

console.log(Object.values(person)) // [ 'Yuza', 67 ]
```

## Object.entries(): 객체의 속성명과 속성값을 배열로 반환

```jsx
const person = {
  name: 'Yuza',
  age: 20,
}

console.log(Object.entries(person)) // [ [ 'name', 'Yuza' ], [ 'age', 20 ] ]
```

## Object.fromEntries(): 객체의 key와 value 배열을 객체로 변환

```jsx
const person = [
  ['name', 'Yuza'],
  ['age', 13],
]

console.log(Object.fromEntries(person)) // { name: 'Yuza', age: 13 }
```
