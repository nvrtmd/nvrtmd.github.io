---
layout: post
title: '[JavaScript 기초 다지기] Class'
description: ''
featured: false
author: admin
categories: [JavaScript]
tags: [자바스크립트 기초]
image: 'https://user-images.githubusercontent.com/67324487/226158387-bf581b21-1bf0-448c-8fac-f00ed7d44cf2.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# Class의 정의

- 객체를 생성하기 위해 변수와 메소드를 정의하는 틀
- 함수의 한 종류
- 객체를 정의하기 위한 상태(멤버 변수)와 메소드(함수)로 구성됨
- 생성자 함수처럼 클래스를 사용해도 객체 생성 가능
    - 클래스는 ES6에 추가된 스펙
    - new를 통해 호출했을 때 클래스 내부에 정의된 내용으로 객체를 생성하는 것은 생성자 함수와 동일함

# 기본 문법

```jsx
class MyClass {
  constructor() { ... } // 생성자 메소드
  method1() { ... } // (일반)메소드
  method2() { ... }
  method3() { ... }
  ...
}

// --------------------------------------------------------------

class Person {
  constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
  }
  sayMyJob() {
      console.log(`My job is ${this.job}`);   
  }
}
const yuza = new Person('Yuza', 10, "writer");
console.log(yuza); // Person {name: 'Yuza', age: 10, job: 'writer'}
console.log(yuza.name); // Yuza
yuza.sayMyJob(); // My job is writer
```

- new 키워드를 붙여 클래스 호출 시 발생하는 일
1. 새로운 객체 생성됨
2. constructor가 자동으로 실행되며, 인자로 받은 값들을 `this.property`에 각각 할당함
  - constructor는 객체를 만들고 초기화하기 위한 생성자 메소드로서 new를 통해 호출하면 자동으로 실행됨
  - 객체를 초기화하기 위한 값이 정의됨
  - 암묵적으로 this, 인스턴스를 반환함 → 내부에 return문이 있으면 안됨
  - constructor가 없을 시 빈 constructor가 정의됨
- 위 코드에서 클래스 문법 구조가 하는 일
  1. Person이라는 이름의 함수를 만든 뒤, 함수의 내용물은 constructor(생성자 메소드)에서 가져옴
    - constructor가 없을 시 내용물 없이 함수가 만들어짐
  2. 클래스 내에서 정의한 메소드(ex. sayMyJob)를 `Person.prototype`에 저장
    - 클래스를 통해 객체를 만든 후 메소드를 호출하면 해당 메소드를 prototype 프로퍼티를 통해 가져와서 사용함
    - 위 코드의 경우 프로토타입에 메소드가 총 2개 존재(sayMyJob, constructor)
         
![Untitled](https://user-images.githubusercontent.com/67324487/226158447-3c3d929f-f7e1-4e61-8733-3d425dda8e78.png)
            
- 즉, 클래스는 해당 클래스의 프로토타입의 constructor(생성자 메소드)와 동일

# 클래스와 생성자 함수의 차이점

## 메소드가 저장되는 위치

```jsx
const Person1 = function(name, age, job) {
  this.name = name;
  this.age = age;
  this.sayMyJob = function() {
    console.log(`My job is ${job}`);   
  }
}
const yuza = new Person1('Yuza', 10, "teacher");
console.log(yuza); // Person1 {name: 'Yuza', age: 10, sayMyJob: ƒ}
yuza.sayMyJob(); // My job is teacher

// --------------------------------------------------------------

class Person2 {
  constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
  }
  sayMyJob() {
      console.log(`My job is ${this.job}`);   
  }
}
const orange = new Person2('Orange', 10, "writer");
console.log(orange); // Person2 {name: 'Orange', age: 10, job: 'writer'}
orange.sayMyJob(); // My job is writer
```

![Untitled](https://user-images.githubusercontent.com/67324487/226158458-f3b21db1-27a2-4d32-b2e6-341cefde9ad8.png)

- 클래스 내 정의된 메소드는 클래스의 프로토타입에 저장됨
- 반면에 생성자 함수 내 정의된 메소드는 객체 내부에 저장됨
    - 생성자 함수로부터 생성된 yuza는 객체 내부에 메소드인 sayMyJob이 있고, 클래스에 의해 생성된 orange는 프로토타입 내부에 존재함

## cf) 생성자 함수를 클래스와 유사하게 사용하기

- 생성자함수도 클래스처럼 메소드를 프로토타입 내부에 둘 수 있음

```jsx
const Person1 = function(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Person1.prototype.sayMyJob = function() {
  console.log(`My job is ${this.job}`);   
}
const yuza = new Person1('Yuza', 10, "teacher");
console.log(yuza); // Person1 {name: 'Yuza', age: 10, job: 'teacher'}
yuza.sayMyJob(); // My job is teacher
```

![Untitled](https://user-images.githubusercontent.com/67324487/226158473-f4c0dacd-34b3-4358-8abc-7b6c6fe5cbbf.png)

## new 키워드 유무에 따른 에러 발생

- 만약 생성자 함수를 new 키워드 없이 호출 시 (개발자가 실수한 코드이지만) 문제 없이 동작함 → 에러 캐치 불가
    - 생성자 함수에 return문이 없는 경우엔 undefined가 할당되므로 에러 발생 X
- 클래스의 경우 new 키워드 없이 실행하면 타입 에러가 발생함
    - 자바스크립트는 클래스의 특수 내부 프로퍼티인 `[[IsClassConstructor]]: true`를 통해 클래스 여부를 판단하여 클래스가 new 키워드와 함께 사용되지 않은 경우 에러를 발생시킴

![Untitled](https://user-images.githubusercontent.com/67324487/226158482-5351727b-a587-4cf1-8a71-d1cf913d386e.png)

![Untitled](https://user-images.githubusercontent.com/67324487/226158519-a6988f5f-11e8-4309-b15d-d35b9feea536.png)

## non-enumerable method

- 클래스의 메소드는 열거할 수 없음(non-enumerable)
    - 메소드의 enumerable 플래그가 false임
    - 생성자 함수의 경우 `for...in` 을 사용하면 프로토타입 내에 정의한 메소드를 포함한 객체 내의 모든 프로퍼티들을 다 확인할 수 있음
    - 클래스의 메소드의 경우 `for...in` 에서 제외됨

```jsx
const Person1 = function(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Person1.prototype.sayMyJob = function() {
  console.log(`My job is ${this.job}`);   
}
const yuza = new Person1('Yuza', 10, "teacher");
for(const i in yuza) {
  console.log(i); // name age job sayMyJob
}

// --------------------------------------------------------------

class Person2 {
  constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
  }
  sayMyJob() {
      console.log(`My job is ${this.job}`);   
  }
}
const orange = new Person2('Orange', 10, "writer");
for(const i in orange) {
  console.log(i); // name age job
}
```

# 클래스 상속

- 클래스 상속을 통해 클래스 확장이 가능
    - extends 키워드를 통해 부모 클래스를 상속받은 자식 클래스를 사용해 만들어진 객체는 자식 클래스 내의 메소드 뿐만 아니라 부모 클래스에 정의된 메소드에도 접근 가능

![Untitled](https://user-images.githubusercontent.com/67324487/226158530-afdac3bc-214b-49b6-b5e3-efd01ae99f76.png)

![Untitled](https://user-images.githubusercontent.com/67324487/226158536-8f2b4798-6d9e-47b9-9d78-fbd509875316.png)

- 자식 클래스가 부모 클래스를 extends 하는 것은 곧 자식 클래스의 프로토타입의 `__proto__`를 부모의 프로토타입에 연결하는 것과 유사함
    - 자바스크립트의 클래스는 다른 언어의 클래스와는 다르게 프로토타입을 기반으로 하고 있어, 자식 클래스가 부모 클래스를 ‘복사’하기 보다 부모 클래스에 ‘연결(위임)’되어있다고 이해하는 것이 적절함
        - 위 이미지에서, 만약 부모 클래스인 Person의 자식 클래스인 Crew 클래스를 통해 새로운 객체를 생성한 뒤, Person에 새로운 메소드를 생성하면, 객체에서도 프로토타입 체이닝을 통해 해당 메소드를 사용할 수 있게 됨 = “연결”

```jsx
class Person {
  constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
  }
  sayHello() {
      console.log(`Hello, My name is ${this.name}.`);   
  }
}

class Developer extends Person {
	introduce() {
    console.log(`I'm ${this.age} years old and I'm a ${this.job}.`);
	}
}

const yuza = new Developer("Yuza", 23, "frontend developer");
yuza.sayHello(); // Hello, My name is Yuza.
yuza.introduce(); // I'm 23 years old and I'm a frontend developer.
```

## extends 키워드와 메소드

![Untitled](https://user-images.githubusercontent.com/67324487/226158543-1c6ce0c2-0967-4489-bd7b-1eedcbdc8d74.png)

- 프로토타입을 기반으로 동작
- 자식 클래스의 prototype 프로퍼티의 `__proto__` 를 부모 클래스의 prototype 프로퍼티로 설정
    - ex. 위 코드의 경우 `Developer.prototype.__proto__ == Person.prototype`
    - 그러므로 Developer 클래스 내에 없는 메소드를 부모 클래스인 Person에서 찾아서 사용
- 자식 클래스 내에 메소드가 존재하지 않는 경우 동작 과정
  1. 객체 yuza에 sayHello 메소드의 존재 확인 → 존재하지 않음
  2. yuza의 프로토타입인 `Developer.prototype`을 확인 → 존재하지 않음
  3. extends를 통해 관계 맺어진 `Developer.prototype`의 프로토타입인 `Person.prototype`을 확인 → 존재함 → 해당 메소드 사용

## 메소드 오버라이딩

- 자식 클래스는 부모 클래스의 메소드를 그대로 상속 받지만, 만약 자식 클래스에서 부모 클래스의 메소드와 같은 이름의 메소드를 자체적으로 제작(정의)할 경우, 자체 제작 메소드가 사용됨
- super 키워드
    - 사용법
        - super.method(…): 부모 클래스에 정의된 메소드(method)를 호출
            - 만약 부모 클래스의 메소드를 완전히 덮어쓰지 않고 부분적으로 활용하고자 한다면 super 키워드를 사용하여 부모 메소드를 호출할 수 있음
        - super(…): 부모 생성자를 호출하며, 자식 생성자 내부에서만 사용 가능

```jsx
class Person {
  constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
  }
  sayHello() {
      console.log(`Hello, My name is ${this.name}.`);   
  }
  introduce() {
      console.log(`Nice to meet you. I'm ${this.age} years old.`);   
  }
}

class Developer extends Person {
	sayHello() {
    console.log(`Hello, World!`);
	}
	introduce() {
		super.introduce();
    console.log(`I'm a ${this.job}.`);
		this.sayHello();
  }
}

const yuza = new Developer("Yuza", 23, "frontend developer");
yuza.sayHello(); // Hello, World!
yuza.introduce();
/* 
	Nice to meet you. I'm 23 years old.
	I'm a frontend developer.
	Hello, World!
*/
```

## 생성자 오버라이딩

- 자식 클래스에 constructor가 없는 경우 자동으로 빈 constructor가 만들어지며 부모 constructor를 호출 → 부모 constructor에 모든 인수 전달
    - constructor는 기본적으로 부모 constructor를 호출함

```jsx
class Person {
 // ...
}

class Developer extends Person {
/*
	constructor(...args) {
	    super(...args);
  }
*/
}
```

- 자식 클래스에 constructor 추가할 시, 반드시 `super(…)`를 호출해야 함
    - 호출하지 않을 시 에러 발생
    - 자식 클래스의 생성자 내에서 this를 사용하기 전에 반드시 super(…)를 호출해야 하기 때문
        - 이유: 자식 클래스의 생성자 함수엔 특수 내부 프로퍼티인 `[[ConstructorKind]]:"derived”`가 존재 → new 키워드를 통해 실행되었을 시 다르게 동작
            - new와 함께 실행됐을 때
                - 일반 클래스의 경우: 빈 객체가 만들어진 뒤, this에 그 객체를 할당
                - 자식 클래스의 경우: 생성자 함수가 빈 객체를 만든 뒤, this에 그 객체를 할당하는 일을 부모 클래스의 생성자가 처리해주기를 기대함
                    - 따라서, 자식 클래스의 경우 반드시 `super(…)`를 통해 부모 생성자를 실행해야 this가 될 객체가 만들어짐
- super(…)의 인자로 자식 클래스 내에서 사용되는 값들을 전달하면 부모 클래스가 그것들을 인자로 받아서 this의 프로퍼티로 할당함

```jsx
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  sayHello() {
    console.log(`Hello, My name is ${this.name}.`);   
  }
  introduce() {
    console.log(`Nice to meet you. I'm ${this.age} years old.`);   
  }
}

class Developer extends Person {
  constructor(name, age, job) {
    super(name, age, job) // -> Person 클래스의 constructor의 인자로 name, age, job이 들어가게 됨
    this.field = 'frontend';
  }
  sayHello() {
    console.log(`Hello, World!`);
  }
  introduce() {
    super.sayHello();
    console.log(`I'm a ${this.job}. Especially, I'm interested in ${this.field}.`);
    this.sayHello();
  }
}

const yuza = new Developer("Yuza", 23, "frontend developer");
yuza.introduce(); 
/*
	Hello, My name is Yuza.
	I'm a frontend developer. Especially, I'm interested in frontend.
	Hello, World! 
*/
```

[참고1](https://ko.javascript.info/class)

[참고2](https://www.youtube.com/watch?v=HujbNZ9IWF8&ab_channel=우아한Tech)

[참고3](https://think0wise.tistory.com/27)
