---
layout: post
title: '[Node.js 백엔드 기초] CSS 기초 - style 적용 방식 (inline, embedded, file)'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511646-79b64e04-0779-4484-9bfc-c2d6668c0cf0.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## Inline Styling

### Code 💻

```html
<!DOCTYPE html>

<html>
  <head>
    <title>CSS - 인라인 스타일 실습</title>
  </head>

  <body>
    <h1 style="background-color: red;color: green;padding:15px;">
      CSS 인라인 스타일 실습1입니다.
    </h1>
    <h1 style="background-color: blue;color: green;padding:15px;">
      CSS 인라인 스타일 실습2입니다.
    </h1>
    <h1 style="background-color: orange;color: green;padding:15px;">
      CSS 인라인 스타일 실습3입니다.
    </h1>
  </body>
</html>
```

- 인라인 스타일
  - html 태그에 직접 스타일 적용하는 방법
  - 단점: 향후 스타일 변경 시 작업량 많고 유지보수 힘듦
    - 단, 모든 웹페이지 중 유일하게 적용되는 스타일의 경우 제외

### 결과 🚩

![](https://velog.velcdn.com/images/carmine/post/24ad6a0d-f1d9-457e-906f-1653f6d2396b/image.png)

## Embedded Styling

### Code 💻

```html
<!DOCTYPE html>

<html>
  <head>
    <title>CSS - Embedded 스타일 실습</title>
    <style>
      h1 {
        background-color: blue;
        color: violet;
        padding: 30px;
      }
    </style>
  </head>

  <body>
    <h1>CSS Embedded 실습1입니다.</h1>
    <h1>CSS Embedded 실습2입니다.</h1>
    <h1>CSS Embedded 실습3입니다.</h1>
  </body>
</html>
```

- Embedded 스타일
  - head 영역의 style 태그 안에 스타일을 구현하는 방법
  - style 태그 영역 내에서 태그 선택자를 이용해 특정 태그들의 스타일을 정의

### 결과 🚩

![](https://velog.velcdn.com/images/carmine/post/60dec693-7b7e-4f31-9502-e3a505c8d2a6/image.png)

## CSS File

### Code 💻

```html
<!DOCTYPE html>

<html>
  <head>
    <title>CSS - 스타일 파일로 분리</title>

    <!-- 
        link 태그
            - 기 정의된 CSS 스타일 파일을 참조 
    -->
    <link rel="stylesheet" href="./sample.css" />
  </head>

  <body>
    <h1>CSS 별도 CSS 파일로 분리 및 참조하는 실습1입니다.</h1>
    <h1>CSS 별도 CSS 파일로 분리 및 참조하는 실습2입니다.</h1>
    <h1>CSS 별도 CSS 파일로 분리 및 참조하는 실습3입니다.</h1>
  </body>
</html>
```

```css
// sample.css
h1 {
  background-color: olivedrab;
  color: blue;
  padding: 30px;
}
```

- 재사용 가능한 스타일들을 정의하여 사용하는 방식 제공
  - CSS 파일의 목적: 다양한 HTML 태그 선택자별로 스타일을 정의하여 CSS 파일을 참조하는 모든 HTML 페이지에서 재사용하기 위함

### 결과 🚩

![](https://velog.velcdn.com/images/carmine/post/ac15c052-62c9-4202-aebb-71c68176eaa5/image.png)
