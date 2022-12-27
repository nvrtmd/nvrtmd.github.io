---
layout: post
title: '[Node.js 백엔드 기초] JavaScript 기초 - var, let, const의 비교'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511658-6eb1f79a-3e40-4e0b-98bb-13584baa1a15.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 변수

### 스코프 (Scope)

- 유효한 참조 범위
- 종류
  - 함수 레벨 스코프
    - 함수의 코드 블록만을 스코프로 인정
    - 함수 내에서 선언된 변수는 함수 내에서만 유효, 함수 외부에서는 참조 불가
    - 함수 내에서 선언한 변수는 지역 변수, 함수 외부에서 선언한 변수는 모두 전역 변수
  - 블록 레벨 스코프
    - 모든 코드 블록(= {})을 스코프로 인정
    - 코드 블록 내부에서 선언된 변수는 코드 블록 내에서만 유효, 코드 블록 외부에서 참조 불가
    - 코드 블록 내에서 선언된 변수는 지역 변수

### 호이스팅 (Hoisting)

- 코드가 실행되기 전 변수 선언문, 함수 선언문 등이 해당 스코프(유효 참조 범위)의 최상단으로 끌어올려진 것처럼 동작하는 특성
- 자바스크립트 parser가 함수 실행 전 내부적으로 끌어올려 처리 -> 미리 선언문을 실행하는 것과 동일

### 변수 생성 단계

1. 선언: 변수를 실행 컨텍스트의 변수 객체에 등록 -> 이 변수 객체는 스코프가 참조하는 대상이 됨
2. 초기화: 변수 객체에 등록된 변수를 위한 공간을 메모리에 확보 -> 변수를 undefined로 초기화
3. 할당: 초기화된 변수에 실제 값을 할당

### 변수의 종류

#### Var

- 중복 선언 및 재할당 가능
  - 동일 변수명으로 여러 번 선언 및 값 재할당 가능 -> 기존 값에 덮어쓰는 실수 발생 가능

```jsx
var name = 'John'
var name = 'Kate'
console.log(name) // Kate

var name = 'John'
name = 'Henry'
console.log(name) // Henry
```

- 선언 시 var 키워드 생략 가능

```jsx
number = 0
console.log(number) // 0
```

- 함수 레벨 스코프만 인정
  - 조건문 내(코드 블록 내)에 var로 선언된 변수 result는 조건문 밖에서도 접근 가능
  - 전역 변수 남발 발생

```jsx
if (number == 0) {
  var result = 'zero'
}
console.log(result) // zero
```

- 변수 선언 이전에 참조 가능
  - 스코프의 최상단에서 선언 및 undefined로 초기화까지 완료 -> 변수 선언 이전에 변수 접근 시 에러 없이 undefined 반환

```jsx
if (number == 0) {
  var result = 'zero'
}
console.log(result) // zero
```

- 최종적으로 할당 단계가 실행됨

```jsx
hello = 'hello'
console.log(hello) // hello
```

#### Let

- 중복 선언 불가

```jsx
let variable1 = 0
let variable1 = 1 // Cannot redeclare block-scoped variable 'variable1'
```

- 재할당 가능

```jsx
let variable1 = 0
variable1 = 10
console.log(variable1) // 10
```

- 블록 레벨 스코프
  - 코드 블록 내에 선언된 변수는 전역에서 참조 불가

```jsx
if (variable1 === 10) {
  let variable2 = 20
}
console.log(variable2) // ReferenceError: variable2 is not defined
```

- 변수 선언 이전에 참조 불가능
  - 선언과 초기화가 분리되어 진행: 선언문은 호이스팅 되지만 초기화가 이뤄지지 않아 변수에 접근할 수 없음
  - 스코프에 변수를 등록(선언) / 변수 선언문에 도달 시 초기화 -> 초기화 이전에 변수 접근 불가
    - 초기화가 이뤄지지 않으면 변수를 위한 메모리 공간이 확보되지 않음 -> 변수 참조 불가
  - 선언문 이전에 참조할 시 참조 에러 발생 -> 스코프 시작 지점부터 변수 선언(초기화) 지점까지 일시적 사각지대(TDZ)에 빠짐

```jsx
console.log(variable3) // ReferenceError: Cannot access 'variable3' before initialization = 초기화 안되어서 변수에 접근 불가
let variable3 // 선언문에서 undefined로 초기화
console.log(variable3) // undefined
```

#### const

- 중복 선언 및 재할당 불가
  - 선언과 할당이 동시에 이뤄져야 함: 그렇지 않을 시 SyntaxError 발생
    - 변수 선언 및 할당 이전에 참조 불가능
  - 변수의 타입이 객체인 경우, 객체에 대한 참조를 변경하지 못하지만 객체의 프로퍼티는 보호되지 않으므로 할당된 객체의 내용은 변경 가능

```jsx
const variable4 = 300;
const variable4 = 400; // Cannot redeclare block-scoped variable 'variable4'
variable4 = 400; // TypeError: Assignment to constant variable.

// 선언과 할당 동시에 이뤄져야 함
const variable5; // 'const' declarations must be initialized

// 객체 프로퍼티 변경 가능
const variable6 = { product: "computer", brand: "Samsung", price: 3000000 };
variable6.brand = "Apple";
console.log(variable6); // { product: 'computer', brand: 'Apple', price: 3000000 }
```

- 블록 레벨 스코프

```jsx
if (variable4 === 300) {
  const variable7 = 500
}

console.log(variable7) // ReferenceError: variable7 is not defined
```
