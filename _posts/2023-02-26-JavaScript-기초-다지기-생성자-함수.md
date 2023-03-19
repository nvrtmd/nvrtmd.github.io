---
layout: post
title: '[JavaScript 기초 다지기] 생성자 함수'
description: ''
featured: false
author: admin
categories: [JavaScript]
tags: [자바스크립트 기초]
image: 'https://user-images.githubusercontent.com/67324487/226157867-92231b3a-984a-4406-aa46-462511cf6fee.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 생성자 함수

## 리터럴

- 리터럴: 변수에 넣는 변하지 않는 데이터 그 자체
  - 코드 상에서 데이터를 표현하는 방식
    - boolean, char, double, long, int 등
  - 변수를 선언함과 동시에 값을 지정해주는 표기법

```jsx
const name = 'Rarry' // name은 상수, Rarry는 문자열 리터럴
```

- 객체 리터럴: 객체를 생성하는 방법의 일종
  - 직접 속성명과 속성값을 문자로 적어서 객체를 정의하는 방식

```jsx
let user = { name: 'Kate', age: 20 }
```

## 생성자 함수란

- 생성자 함수: 비슷한 객체를 여러 개 만들 수 있는 함수

## 생성자 함수 사용 관례

- 함수명의 첫 번째 글자 대문자
- new 함수명()

## new 키워드를 붙여 함수 호출 시 발생하는 일

1. 빈 객체 먼들고 this에 할당
2. 함수의 본문을 실행하면서 this에 각 프로퍼티를 할당
3. this를 자동으로 반환

- new 키워드를 붙이지 않았을 시 해당 함수는 아무것도 return하지 않으므로 undefined

## 참조 가능/불가능 프로퍼티

- this에 연결되어 있는 프로퍼티와 메소드는 외부에서 참조 가능(public)
- 생성자 함수 내에서 this 없이 선언된 일반 변수는 생성자 함수 내부에서는 접근 가능하나 외부에서 참조 불가능(private)

## 생성자 함수의 메소드

- this에 프로퍼티 뿐만 아니라 메소드 역시 추가할 수 있음
- 메소드 내의 this는 생성자 함수가 생성할 객체를 가리킴

## 예시 코드

```jsx
function Person(name, age) {
  // this = {}
  this.name = name
  this.age = age
  const job = 'developer'

  this.sayMyJob = function () {
    console.log(this)
    console.log(`My job is ${job}`)
  }
  // return this
}

// new + 생성자 함수 Person()에 이름과 나이를 인자로 넣어서 객체 생성
const yuza = new Person('Yuza', 10)
console.log(yuza.name) // Yuza (public)
console.log(this.job) // undefined (private)
yuza.sayMyJob()
/*
	My job is developer
	Person{
    name: 'Yuza',
    age: 10,
		sayMyJob: ƒ ()
    [[Prototype]] : Object  
	}
*/
console.log(yuza)
/*
  Person{
    name: 'Yuza',
    age: 10,
		sayMyJob: ƒ ()
    [[Prototype]] : Object  
	}
*/

let yoon = User('Yoon', 25)
console.log(yoon) // undefined
```

## 생성자 함수의 return문

- 생성자 함수가 반환해야 할 것은 모두 this에 저장되며, this는 자동적으로 반환되므로 보통 생성자 함수에는 return문이 없음
- return문 사용 시
  - 객체를 return할 경우 this 대신 해당 객체가 반환됨
  - 원시형을 return할 경우 return문이 무시됨

```jsx
// 객체를 return하는 경우
function Person(name, age) {
  this.name = name
  this.age = age
  const job = 'developer'
  this.sayMyJob = function () {
    console.log(`My job is ${job}`)
  }

  return {
    name: 'Orange',
    age: 20,
    sayMyJob: function () {
      console.log(`My job is not ${job}, but actor`)
    },
  }
}

const yuza = new Person('Yuza', 10)
console.log(yuza.name) // Orange
yuza.sayMyJob() // My job is not developer, but actor

// --------------------------------------------------------------

// 원시형(문자열)을 return하는 경우
function Person(name, age) {
  this.name = name
  this.age = age
  const job = 'developer'
  this.sayMyJob = function () {
    console.log(`My job is ${job}`)
  }

  return 'Hello, World!'
}

const yuza = new Person('Yuza', 10)
console.log(yuza.name) // Yuza
yuza.sayMyJob() // My job is developer
```
