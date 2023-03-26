---
layout: post
title: '[JavaScript 기초 다지기] Prototype'
description: ''
featured: false
author: admin
categories: [JavaScript]
tags: [자바스크립트 기초]
image: 'https://user-images.githubusercontent.com/67324487/227777322-04658cc3-a453-46c0-ab4c-fd4823f5e3d3.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 프로토타입 객체

## 프로토타입 기반 객체지향

- 자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어 (cf. 클래스 기반 객체지향 프로그래밍 언어)
  - 클래스 기반 객체지향 프로그래밍 언어(Java, C++ 등)
    - 객체를 생성하기 위해 클래스를 정의하며 클래스를 통해 객체(인스턴스) 생성
  - 프로토타입 기반 객체지향 프로그래밍 언어
    - 클래스 없이 객체 생성 가능: 기존의 객체를 cloning하여 새로운 객체 생성 = 객체 원형인 프로토타입을 사용하여 새로운 객체 생성
    - 객체 리터럴: `const newObj = {name: 'Mary'}`
    - Object 생성자 함수: `const person = new Object();`
    - 생성자 함수: 프로퍼티가 동일한 객체 여러 개 간편하게 생성 가능

## 프로토타입 객체

- 프로로타입 객체
  - 함수를 정의하면 다른 곳에 생성되며 다른 객체의 원형이 되는 객체
    - 생성자 함수가 정의될 때 그 함수의 멤버로 존재하는 prototype 속성은 다른 곳에 생성된 함수의 프로토타입 객체 참조
      - 해당 프로토타입 객체는 생성자 함수로 생성한 모든 객체의 원형이 되며 모든 객체가 참조하게 됨
        - 프로토타입 객체 = 같은 원형으로 생성된 객체가 공통으로 참조하는 공간
      - 자식 객체는 해당 프로토타입 객체를 `__proto__` 프로퍼티로 접근 가능
    - 프로토타입 객체의 멤버인 constructor 속성은 생성자 함수를 참조

![Untitled](https://user-images.githubusercontent.com/67324487/227777371-876bd26a-0836-4224-9c53-43a0378a258a.png)

```jsx
function Person(name) {
  this.name = name
  this.sayHi = () => {
    console.log(`Hi, I'm ${this.name}`)
  }
}

const joon = new Person('Joon')

console.log(joon) // Person {name: 'Joon', sayHi: ƒ}
joon.sayHi() // Hi, I'm Joon
console.log(joon.__proto__) // {constructor: ƒ}
```

- 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체(=프로토타입 객체)와 연결됨
  - 프로토타입 객체의 프로퍼티, 메소드를 상속받을 수 있음
- 프로토타입도 동적으로 멤버 추가 가능
  - 모든 자식 객체는 자신의 프로토타입 객체에 접근 가능하며 동적으로 추가된 멤버도 사용 가능
  - 멤버를 추가하기 전에 생성된 객체에서도 해당 멤버를 사용할 수 있음

![Untitled](https://user-images.githubusercontent.com/67324487/227777387-5e273ff1-936a-45d0-8263-3a23415bf330.png)

```jsx
function Person(name) {
  this.name = name
  this.sayHi = () => {
    console.log(`Hi, I'm ${this.name}`)
  }
}

const joon = new Person('Joon')

Person.prototype.sayGood = function () {
  console.log('Good~')
}

joon.__proto__.sayGood() // Good~
joon.sayGood() // Good~

console.log(Person.prototype === joon.__proto__) // true
```

# 프로토타입

- 프로토타입 객체로 인해 만들어진 객체 내부의 `__proto__` 프로퍼티는 자신의 원형인 프로토타입 객체를 참조하는 숨겨진 링크
- 프로토타입 = 이 숨겨진 링크

![Untitled](https://user-images.githubusercontent.com/67324487/227777404-7f9a7a51-8244-483a-839a-6619d667f42d.png)

- 생성자 함수의 prototype 프로퍼티: 자신과 이름이 같은 프로토타입 객체(=줄여서 프로토타입)를 참조
- 객체의 `__proto__` 프로퍼티: 자신을 생성한 프로토타입 객체를 참조하는 숨겨진 링크(=프로토타입)

# 프로토타입 체인

- 특정 객체의 프로퍼티나 메소드에 접근할 때 그 프로퍼티, 메소드가 없는 경우, 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티, 메소드를 차례로 검색하는 것

```jsx
const joon = {
  name: 'Joon',
}

console.log(joon.hasOwnProperty('name')) // true
console.log(joon.__proto__ === Object.prototype) // true
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')) // true
```

![Untitled](https://user-images.githubusercontent.com/67324487/227777420-4b233dbf-a1d9-422b-80da-044fbc5f5aad.png)

## 객체 리터럴 방식으로 생성된 객체의 경우

- 객체 리터럴 방식 = 내장 함수인 Object() 생성자 함수로 객체 생성하는 것을 단순화한 것
- 함수 객체인 Object() 생성자 함수는 prototype 프로퍼티 존재

```jsx
const joon = {
  name: 'Joon',
}

console.log(joon.__proto__ === Object.prototype) // true
console.log(Object.prototype.constructor === Object) // true
console.log(Object.__proto__ === Function.prototype) // true
```

![Untitled](https://user-images.githubusercontent.com/67324487/227777434-48db0d10-2107-47f6-a778-2637d72631b9.png)

## 생성자 함수로 생성된 객체의 경우

- 생성자 함수의 정의 방식
  - 함수선언식
    - 함수 리터럴 방식(= Function() 생성자 함수로 함수를 생성하는 것을 단순화 시킨 것) 사용
    - 자바스크립트 엔진이 내부적으로 기명 함수표현식으로 변환함
    - `const sayHi = function hi() { return "Hi!" }`
  - 함수표현식
    - 함수 리터럴 방식 사용
    - `const sayHi = function() { return "Hi!" }`
  - Function() 생성자 함수
- 결국 세 가지 방식 모두 Function() 생성자 함수를 통해 함수 객체를 생성하는 것으로 수렴됨

![Untitled](https://user-images.githubusercontent.com/67324487/227777455-45bbc48d-5714-4ed0-93d3-478a898ac864.png)

![Untitled](https://user-images.githubusercontent.com/67324487/227777474-b3afd451-44b8-444f-b096-e8bd7f4bd8e2.png)
