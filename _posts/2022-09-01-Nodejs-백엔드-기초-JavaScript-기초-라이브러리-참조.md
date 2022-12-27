---
layout: post
title: '[Node.js 백엔드 기초] JavaScript 기초 - 라이브러리 참조'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511653-033d0648-5ed9-46c0-b84b-7490bef8ca0f.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 라이브러리 참조

### Code 💻

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Basic</title>
  </head>

  <body>
    <h1 id="title">JavaScript Basic2 - JavaScript 파일 참조</h1>

    <section id="contents">JavaScript 파일 참조 실습</section>

    <script src="./index.js"></script>

    <!-- 압축되지 않은 파일 -->
    <script src="./jquery-3.6.0.js"></script>

    <!-- 압축된 파일 -->
    <script src="./jquery-3.6.0.min.js"></script>

    <!-- JQuery 라이브러리 CDN 참조-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </body>
</html>
```

### 자바스크립트 파일(라이브러리) 파일 참조

- 플러그인: 특정 기능을 제공하는 라이브러리를 참조하거나 추가하는 행위

### 자바스크립트 라이브러리를 참조

- 해당 라이브러리가 같은 프로젝트 폴더 내에 존재하는 경우
- 인터넷상의 특정 서비스 제공처에서 참조하는 경우(CDN)
  - CDN은 개발할 때 인터넷이 된다는 전제 하에 사용
  - 서비스할 때는 직접 참조 권장

### JQuery 라이브러리 직접 참조(같은 프로젝트 내 파일 참조)

- 압축되지 않음: 가독성 좋아서 변경 및 재사용 가능, 개발용
  - 개발할 때는 오리지널 파일의 기능을 파악하거나 디버깅 또는 기능을 추가/변경할 수 있는 경우도 있으므로
- 압축됨: 변경 불가능, 저용량, 빠른 로딩 속도, 실서비스용
  - 서비스할 때는 자바스크립트 파일 로딩 속도가 빠르면 좋으므로
