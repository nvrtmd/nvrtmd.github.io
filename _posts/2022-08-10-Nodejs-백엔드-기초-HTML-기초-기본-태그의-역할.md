---
layout: post
title: '[Node.js 백엔드 기초] HTML 기초 - 기본 태그의 역할'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511642-e7a850b9-836a-4e7f-b9ce-47fd0667aef6.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# Node.js 공부를 시작하며🏃🏻‍♀️

본격적인 취업 준비 전 다양한 분야를 경험해보고 싶어서 백엔드 기초 공부를 시작했다. 언어는 아무래도 지금까지 JavaScript를 사용해왔기 때문에 접근성이 좋은 Node.js로 정했다.
기초부터 차근차근 공부하기 위해 HTML, CSS, JavaScript부터 정리해 나가기로 했다.

# 정리📑

```html
<!DOCTYPE html>
<!-- 
  '이 HTML 문서는 HTML5 표준 문법으로 정의된/구현한 문서이다'라고 명시한 것
    - 현재 작성한 문서의 유형이 HTML(그 중 HTML5)이라는 뜻
    - 웹 브라우저는 위에서부터 아래로 한 줄씩 기계어로 변환 (컴파일링)
    - <!DOCTYPE html>를 통해 무조건 HTML 몇 버전으로 코딩했는지 밝혀야 HTML5 표준 스펙으로 컴파일됨 
-->

<html>
  <head>
    <!-- head 영역 -->

    <meta charset="utf-8" />
    <!-- 
    meta 태그의 주 목적
      - 웹 브라우저에게 추가적인 메타 정보(각종 부수적인, UI나 작동에 관련되지 않은 정보들)를 제공
      - 검색 엔진에 제공하는 정보(어떤 페이지가 어떤 정보를 제공하는지 등)
      - 영어 제외 모든 언어(유니 코드: 전 세계 문자를 정의하기 위한 국제 표준 코드)
    utf-8
      - 유니코드
      - 이 문서 안에 알파벳이 아닌 유니 코드가 사용되고 있음을 웹 브라우저에게 알리기 위한 태그(깨지지 않게 해석해서 보여달라~) 
  -->

    <meta name="description" content="메인페이지 입니다." />
    <!-- 
    검색엔진에게 알리는 정보
      - content를 긁어서 검색 결과로 보여줌 
      - SEO(검색 엔진 최적화) 
  -->

    <title>Page Title</title>

    <style>
      /*
      CSS 코드 정의할 수 있는 스타일 태그 영역 
        - Embedded Style 정의 영역 
    */
    </style>
  </head>

  <body>
    <!-- 본문(body) 영역 -->
    <h1>메인 페이지</h1>

    <div>
      메인 페이지 입니다
      <br />
      방문을 환영합니다.
    </div>

    <script>
      /*
      자바스크립트 코드 영역 정의
        - 스크립트 태그 내에 클라이언트 자바스크립트 기능을 구현함
    */
    </script>
  </body>
</html>
```
