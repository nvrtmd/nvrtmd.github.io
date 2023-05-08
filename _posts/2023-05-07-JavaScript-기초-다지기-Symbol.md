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

# 객체 프로퍼티와 Symbol

- 객체 프로퍼티 키로 문자형과 Symbol이 올 수 있음
  - Boolean이나 숫자로 된 키는 문자형으로 반환되며 접근할 때도 문자형으로 접근 가능

```jsx
const object = {
  1: '1이다',
  false: '거짓이다',
}
Object.keys(object) // ["1", "false"]

console.log(object['1']) // "1이다"
```

- Symbol은 유일한 식별자를 만들 때 사용 = 유일성 보장
  - 유일한 식별자이므로 a와 b가 각각 다름

```jsx
const a = Symbol()
const b = Symbol()

console.log(a, b) // Symbol() Symbol()

console.log(a === b) // false
console.log(a == b) // false
```

- Symbol에 description 추가 가능
  - Symbol()에 전달되는 문자열은 Symbol 생성에 영향 끼치지 않음 = 여전히 유일성 보장

```jsx
const a = Symbol('hi')
const b = Symbol('hi')

console.log(a, b) // Symbol(hi) Symbol(hi)

console.log(a === b) // false
console.log(a == b) // false

// 생성 시 전달된 문자열 확인
a.description // 'hi'
```

- Symbol형 프로퍼티 키
  - Object.keys()나 for in문으로는 출력되지 않음 = 은폐 가능
  - 특정 객체의 원본 데이터를 건드리지 않고 속성을 추가할 때 사용됨
    - 다른 사람이 만든 객체에 자신만의 속성을 추가하여 덮어써버리지 않기 위함

```jsx
const id = Symbol('id')
const user = {
  name: 'Tom',
  age: 20,
  [id]: 'hidden id', // Symbol형 프로퍼티 키
}

Object.keys(user) // ['name', 'age'] Symbol형 프로퍼티 key 은폐됨
Object.values(user) // ['Tom', 20] Symbol형 프로퍼티 value도 은폐됨
for (let key in user) {
  console.log(key)
} // 'name' 'age' Symbol형 프로퍼티 key 은폐됨

// 숨겨진 Symbol key 보는 법
Object.getOwnPropertySymbols(user) // [Symbol(id)]
Reflect.ownKeys(user) // ['name', 'age', Symbol(id)]
```

# 전역 Symbol: Symbol.for()

- Symbol.for()
  - 보통의 Symbol은 이름이 같아도 모두 다른 존재이지만, 전역 변수처럼 이름이 같으면 같은 객체를 가리켜야 할 때 Symbol.for() 사용
    - 단 하나의 Symbol만이 보장됨
    - Symbol.keyFor(이름): 생성 시 전달한 이름 반환

```jsx
const symbol1 = Symbol.for('onlySymbol')
const symbol2 = Symbol.for('onlySymbol')

console.log(symbol1 == symbol2) // true
console.log(symbol1 === symbol2) // true

Symbol.keyFor(symbol1) // 'onlySymbol'
Symbol.keyFor(symbol2) // 'onlySymbol'
```
