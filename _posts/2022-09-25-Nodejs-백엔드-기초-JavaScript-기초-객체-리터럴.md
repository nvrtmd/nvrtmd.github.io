---
layout: post
title: '[Node.js 백엔드 기초] JavaScript 기초 - 객체 리터럴(Object Literal)'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511661-1f0f7d17-0470-4ac2-898c-92be3091c3e5.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 객체 리터럴(Object Literal)

### 클래스

- 현실 세계에 존재하는 사물의 일반화된 개념

### 객체

- 클래스를 실체화 한 것, 인스턴스화 한 실체
  - 인스턴스화: 클래스를 이용하여 객체를 만들어 내는 과정
  - 클래스를 통해 메모리상에 객체를 만들어 저장하는 과정
- 객체 리터럴: 자바스크립트 언어로 손쉽게 객체를 만들어낼 수 있는 방법

### 예시

- 클래스: 자동차
- 객체: 벤츠, BMW
  - 속성: 색상, 브랜드, 제조사
  - 기능(메소드): 시동 걸기(turnOn()), 달리기(drive()), 문 열기(open())

### Code 💻

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Basic</title>
  </head>

  <body>
    <h1 id="title">JavaScript Basic7 - 객체 리터럴(Object Literal)</h1>

    <hr />

    <script>
      let name = '에이다 러브레이스'
      let age = 40

      // 객체 리터럴 문법으로 객체 생성
      let user = {
        name: name,
        age: age,
        address: '경기도 성남시 수정구',
        telephone: '010-1234-1234',
        teach: function () {
          return '프로그래밍을 가르치다.'
        },
      }

      console.log('내가 만든 자바스크립트 사용자 객체 출력', user)
      console.log('사용자 이름: ', user.name)
      console.log('사용자 나이: ', user.age)
      console.log('사용자 주소: ', user.address)
      console.log('사용자 전화번호: ', user.telephone)
      console.log('사용자 행동: ', user.teach())

      /*
            JSON 객체
                - 데이터의 구조를 표현하고 데이터를 문자열 형태로 저장할 수 있는 데이터 포맷의 한 종류
                - 쉽고 가볍게 데이터의 구조를 정의하고 전달 가능
        */
      const products = [
        {
          idx: 1,
          productName: 'LG Gram Notebook',
          price: 2700000,
          weight: '1kg',
          stock: 120,
          brand: 'LG',
          centerList: [
            {
              centerName: '강남 지점',
              telephone: '12-1234-1234',
            },
            {
              centerName: '강북 지점',
              telephone: '12-4321-4321',
            },
            {
              centerName: '강서 지점',
              telephone: '12-1234-4321',
            },
          ],
        },
        {
          idx: 2,
          productName: 'LG Gram Notebook2',
          price: 3700000,
          weight: '0.5kg',
          stock: 140,
          brand: 'LG',
          centerList: [
            {
              centerName: '강남 지점',
              telephone: '12-1234-1234',
            },
            {
              centerName: '강북 지점',
              telephone: '12-4321-4321',
            },
            {
              centerName: '강서 지점',
              telephone: '12-1234-4321',
            },
          ],
        },
      ]

      console.log('제품 목록 출력', products)
      console.log('제품 갯수', products.length)

      // 객체의 속성명과 변수명이 같으면 속성에 할당하는 변수명을 생략 가능
      let id, productName, price

      id = '1'
      productName = '제품명'
      price = 4000

      let product = {
        id,
        productName,
        price,
        brand: 'Samsung',
      }

      console.log(
        `제품의 이름은 ${product.productName}이고 가격은 ${product.price}입니다.`,
      )

      // 객체 리터럴의 동적 속성 기능
      var es = 'ES'

      product[es + 2015] = '동적 속성을 정의, 값을 할당'
      product['dynamicProperty'] = '동적 속성의 값'

      console.log(product) // { ES2015: "동적 속성을 정의, 값을 할당", dynamicProperty: "동적 속성의 값", ... }
    </script>
  </body>
</html>
```

### 결과 🚩

![](https://velog.velcdn.com/images/carmine/post/8ade2978-911a-4202-a1e2-021baa971d48/image.png)
