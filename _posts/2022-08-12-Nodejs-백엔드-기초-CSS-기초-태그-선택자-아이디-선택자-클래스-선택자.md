---
layout: post
title: '[Node.js 백엔드 기초] CSS 기초 - 태그 선택자, 아이디 선택자, 클래스 선택자'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511645-a863df1c-c373-4a64-a236-e2ab305611ca.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 태그 선택자

### Code 💻

```html
<!DOCTYPE html>

<html>
  <head>
    <title>CSS 선택자 - 태그 선택자</title>

    <style>
      h1 {
        background-color: red;
        color: yellow;
      }

      p {
        width: 100%;
        border: 1px solid red;
        background-color: blue;
        color: green;
      }

      div {
        width: 100%;
        border: 1px solid orange;
        background-color: green;
        color: blanchedalmond;
      }
    </style>
  </head>

  <body>
    <h1>CSS 선택자 - 태그 선택자로 스타일 적용하기</h1>

    <p>
      태그 선택자를 이용해 HTML 태그들을 선택하여 스타일을 적용
    </p>

    <hr />

    <div>
      div 태그는 영역을 나타내는 태그이다
    </div>

    <br />
    <br />
    <div style="background-color: pink">
      div 태그는 영역을 나타내는 태그이다
    </div>

    <p>
      태그 선택자를 이용해 HTML 태그들을 선택하여 스타일을 적용
    </p>
  </body>
</html>
```

- 태그 이름으로 스타일을 일괄 적용하는 방식
  - 특정 태그에 대해 해당 페이지 내 모든 동일 태그에는 동일 스타일이 적용됨

### 결과 🚩

![](https://velog.velcdn.com/images/carmine/post/d6715c2b-f1f7-4fc8-9de1-063d1697091c/image.png)

## 아이디 선택자

### Code 💻

```html
<!DOCTYPE html>

<html>
  <head>
    <title>CSS 선택자 - id 선택자</title>

    <style>
      #pagetitle {
        font-size: 30px;
      }

      #pagebody {
        color: green;
      }
    </style>
  </head>

  <body>
    <h1 id="pagetitle">CSS 선택자 - id 선택자로 스타일 적용하기</h1>

    <p id="pagebody">
      id 선택자를 이용해 HTML 태그들을 선택하여 스타일을 적용한다
    </p>
  </body>
</html>
```

- html 태그는 태그 간 유일성을 보장하기 위해 id 속성을 제공
  - 태그의 기본 속성인 id 속성의 값은 중복 금지

### 결과 🚩

![](https://velog.velcdn.com/images/carmine/post/2eedd516-0655-4e8d-a620-a5f678fb4f73/image.png)

## 클래스 선택자

### Code 💻

```html
<!DOCTYPE html>

<html>
  <head>
    <title>CSS 선택자 - 클래스 선택자</title>

    <style>
      /* 클래스명을 이용해 스타일을 정의하기 위해 클래스 선택자 사용 */
      h1 {
        background-color: blue;
      }

      .mystyle {
        color: red;
        font-size: 50px;
      }

      .yourstyle {
        color: gray;
      }

      .ourstyle {
        color: yellowgreen;
      }

      .container {
        margin: 50px;
        background-color: black;
      }
    </style>
  </head>

  <body class="container">
    <h1 class="mystyle">CSS 선택자 - 클래스 선택자로 스타일 적용하기</h1>

    <p class="mystyle">
      클래스 선택자를 이용해 HTML 태그들을 선택하여 스타일을 적용
    </p>

    <hr />

    <div>
      div 태그는 영역을 나타내는 태그이다
    </div>

    <br />
    <br />
    <div class="yourstyle">
      div 태그는 영역을 나타내는 태그이다
    </div>

    <p class="ourstyle">
      클래스 선택자를 이용해 HTML 태그들을 선택하여 스타일을 적용
    </p>
  </body>
</html>
```

- 태그 유형과 상관없이 태그에 클래스 속성으로 클래스명을 지정하고
  - 지정된 클래스명에 대해 스타일을 일괄 적용하는 방식

### 결과 🚩

![](https://velog.velcdn.com/images/carmine/post/0374c9f1-cabe-4abe-8b44-5b056d2fbc7a/image.png)
