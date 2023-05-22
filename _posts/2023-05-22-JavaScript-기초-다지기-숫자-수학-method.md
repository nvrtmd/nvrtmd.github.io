---
layout: post
title: '[JavaScript 기초 다지기] 숫자, 수학 method'
description: ''
featured: false
author: admin
categories: [JavaScript]
tags: [자바스크립트 기초]
image: 'https://github.com/nvrtmd/nvrtmd/assets/67324487/37a311d4-2320-4597-ab81-8afd33281ff1'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# Math 내장 객체

- 수학과 관련된 프로퍼티와 메소드를 가진 내장 객체

## Math.ceil(): 올림

```jsx
let num1 = 3.4
let num2 = 4.2
Math.ceil(num1) // 4 Math.ceil(num2); // 5
```

## Math.floor(): 내림

```jsx
let num1 = 3.4
let num2 = 4.2
Math.ceil(num1) // 3 Math.ceil(num2); // 4
```

## Math.round(): 반올림

```jsx
let num1 = 3.6
let num2 = 4.2
Math.ceil(num1) // 4 Math.ceil(num2); // 4
```

## Math.random(): 무작위 숫자 생성

- 0~1 사이의 숫자를 무작위로 생성

```jsx
Math.random() // 0.601497854178328
Math.random() // 0.4594827065396163

// 1~50 사이의 임의의 숫자 생성
Math.floor(Math.random() * 50) + 1 // 21
```

## Math.max(), Math.min(): 최대값과 최소값

```jsx
Math.max(4, 2, 6, 100, 0.23) // 100
Math.min(4, 2, 6, 100, 0.23) // 0.23
```

## Math.abs(): 절대값

```jsx
Math.abs(-10) // 10
```

## Math.pow(), Math.sqrt(): 제곱, 제곱근

```jsx
Math.pow(3, 3) // 27
Math.sqrt(49) // 7
```

# 기타 숫자 관련 method

## toString(): 10진수를 n진수로 변환

- 인수로 전달한 숫자의 진수로 변환
- 문자열로 반환

```jsx
let num = 50

num.toString(2) // '110010'
num.toString(16) // '32'
```

## toFixed(): 특정 소수점 자리까지 표현

- 소수점 자리수 이상의 수를 인자로 전달 시 해당 자리수까지 남는 자리는 0으로 채움
- 문자열로 반환

```jsx
let num = 12345.1234567

num.toFixed(0) // '12345'
num.toFixed(1) // '12345.1'
num.toFixed(2) // '12345.12'
num.toFixed(9) // '12345.123456700'
```

## isNaN(): NaN 여부 검사

- NaN: 잘못된 수학 계산 또는 잘못된 숫자
  - 숫자형이지만 숫자가 아닌 값
- NaN인지 검사할 수 있는 유일한 방법
  - NaN은 자기 자신인 NaN과도 같지 않다고 판단하므로

```jsx
let isNum = Number('no')

isNum == NaN // false
isNum === NaN // false
NaN == NaN // false

isNaN(isNum) // true
isNaN(4) // false
```

## parseInt(): 숫자로 변환

- 숫자로 변환 가능한 부분(숫자인 부분)까지만 숫자로 변환
- Number()과의 차이점: Number()은 숫자 + 문자의 경우 NaN 반환
- 문자로 시작하는 단어는 NaN 반환
- 소수점 이하는 무시: 정수만 반환
- 두번째 인자로 숫자 전달 시 해당 진수로 판단
  - ex) 'f3'은 문자로 시작했지만 두번째 인자로 16을 전달 시 f3을 16진수로 판단하여 숫자로 변환, 243을 반환

```jsx
let numString = '123string'
let stringNum = 'string123'
parseInt(numString) // 123
Number(numString) // NaN
parseInt(stringNum) // NaN

let num = 'f5'
parseInt(num, 16) // 245
parseInt('101', 2) // 5
```
