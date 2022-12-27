---
layout: post
title: '[Node.js 백엔드 기초] JavaScript 기초 - JavaScript를 통한 HTML 제어'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511650-24408bbd-2216-4b32-9f02-ea1db5340278.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## DOM 제어

### Code 💻

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Basic</title>
  </head>

  <body>
    <!-- 
        위에서부터 밑으로 한줄한줄 읽어가면서 인터프리팅(끝까지 다 읽고 기계어로 한번에 변환하지 않고 한줄씩 변환) 
    -->
    <h1 id="title">JavaScript Basic1 - HTML 제어</h1>

    <section id="contents">JavaScript를 통한 HTML 제어 실습</section>

    <script>
      var sectionTag = document.getElementById('contents')

      /*
            해당 태그의 innerHTML 속성을 이용하여 내용값을 변경
        */
      sectionTag.innerHTML = '수정: JavaScript를 통한 HTML 제어 실습입니다.'
    </script>
  </body>
</html>
```

- script 태그 내에 자바스크립트 기능을 구현
  - script 태그는 body 태그 하단에 위치하는 것을 권장
    - 이유: 자바스크립트는 인터프리팅 언어이므로 코드를 위에서 아래로 한 줄 씩 기계어로 변환하며 실행
      - 그러므로 HTML 요소들을 제대로 제어하려면 DOM이 생성된 뒤에 해야 함
- 클라이언트 자바스크립트의 목적
  - HTML 태그 or CSS 제어
- DOM = Document Object Model: 사용자 웹 브라우저 메모리에 저장된 html document 객체
  - 브라우저에 탑재된 자바스크립트 엔진에서 제공해주는 document 객체의 getElementById() 메소드로 해당 html 요소를 반환하여 변수에 저장
  - DOM 상에 존재하는 id가 contents인 HTML 태그를 찾아서 sectionTag 변수에 저장
