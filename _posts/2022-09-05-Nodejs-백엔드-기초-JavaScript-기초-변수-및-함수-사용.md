---
layout: post
title: '[Node.js 백엔드 기초] JavaScript 기초 - 변수 및 함수 사용'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511655-3d3143cb-36d7-4f26-a611-95a289bb6225.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 변수 및 함수 사용

### Code 💻

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Basic</title>
    <style></style>
  </head>

  <body>
    <h1 id="title">JavaScript Basic3 - 변수 및 함수</h1>

    <section id="contents">JavaScript 변수 및 함수 사용 실습</section>

    <script>
      document.getElementById('pageTitle').innerText =
        '지니공공아카데미 백엔드 과정'

      /*
            prompt(): 자바스크립트 내장 함수, 사용자로부터 데이터를 입력 받아서 반환
        */
      var name = prompt('이름을 입력해주세요.')

      /*
            문자열에도 html 태그 넣어서 활용 가능
                - 동적으로 html을 생성: 자바스크립트로 없었던 html 요소를 추가
        */
      document.write('사용자 이름은 <b>' + name + '</b> 입니다.')

      /*
            변수에 문자열 할당
                - 브라우저 메모리 상에 뭔가를 저장할 수 있는 공간 마련되며, 그 안에 문자열을 집어넣은 것
        */
      var firstName = '이름'
      var lastName = '성'

      var fullName1 = firstName + ' ' + lastName

      alert(fullName1)

      console.log('당신의 이름은', fullName1)

      /*
            에러 발생
                - 선언된 적 없는 변수 사용
        */
      var fullName = firstName + '' + lastname
    </script>
  </body>
</html>
```

- document 객체
  - 사용자 웹 브라우저(컴퓨터)의 메모리상에 저장되는 현재 html 객체를 의미(DOM)
  - 자바스크립트로 HTML 제어하기 위함 -> html에 접근해야 함 -> 접근하기 위한 최상단 요소
- 자바스크립트가 제공하는 기능
  - HTML 태그의 내용을 조작(변조)
  - 사용자와의 상호작용
- getElementById: id를 통해 html 요소를 찾아옴
  - 메모리 상에 저장된 h1 태그를 불러와서 반환
