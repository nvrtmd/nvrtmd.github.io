---
layout: post
title: '[Node.js 백엔드 기초] JavaScript 기초 - jquery를 사용한 HTML 제어'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511656-bbacb9e3-b8ca-479a-93c9-3b41e4853623.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## jquery를 사용한 HTML 제어

### Code 💻

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Basic</title>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }

      td {
        border: 1px solid gray;
      }

      #title {
        color: blue;
      }

      .articleLink {
        color: red;
        font-size: 20px;
      }
    </style>
  </head>

  <body>
    <h1 id="title">JavaScript Basic4 - jquery를 사용한 HTML 제어</h1>

    <section id="contents">jquery를 사용한 HTML 제어 실습</section>

    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>조회수</th>
          <th>IP 주소</th>
          <th>작성자</th>
          <th>작성일시</th>
        </tr>
      </thead>
      <tbody id="list">
        <!-- 정적으로 채워 넣은 데이터 = original html 소스 -->
        <tr>
          <td>1</td>
          <td>게시글1입니다.</td>
          <td>100</td>
          <td>111.111.111.111</td>
          <td>작성자1</td>
          <td>2022.07.08</td>
        </tr>
        <tr>
          <td>2</td>
          <td>게시글2입니다.</td>
          <td>200</td>
          <td>222.222.222.222</td>
          <td>작성자2</td>
          <td>2022.07.08</td>
        </tr>
      </tbody>
    </table>

    <!-- jquery 라이브러리 CDN 참조 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script>
      // 동적으로 추가할 데이터
      var articles = [
        {
          idx: 3,
          title: '게시글3 입니다.',
          viewcnt: 300,
          ipaddress: '222.222.222.222',
          writer: '작성자3',
          writedate: '2022.07.09',
        },
        {
          idx: 4,
          title: '게시글4 입니다.',
          viewcnt: 200,
          ipaddress: '222.222.222.222',
          writer: '작성자4',
          writedate: '2022.07.09',
        },
      ]

      /*
            $.each(): 선택한 요소(배열 등)들을 각각 순차적으로 접근
                - 매개변수: 접근할 배열과 해당 배열의 각 요소에 적용할 함수
        */
      $.each(articles, function (i, item) {
        // articles 배열 내 요소들(item)에 접근하여 item 객체 내의 요소들을 html 코드 내에 삽입하여 trCode에 할당
        var trCode = `
                <tr>
                    <td>${item.idx}</td>
                    <td>${item.title}</td>
                    <td>${item.viewcnt}</td>
                    <td>${item.ipaddress}</td>
                    <td>${item.writer}</td>
                    <td>${item.writedate}</td>
                </tr>
            `

        /*
                $("요소").append("새 요소"): html 요소를 추가해주는 jquery 메소드
                    - $("#list") == document.getElementById("list")
                    - trCode(=articles 내의 데이터)를 html의 테이블에 추가 -> 자바스크립트를 통한 html 변조
            */
        $('#list').append(trCode)
      })
    </script>
  </body>
</html>
```

### 결과 🚩

![](https://velog.velcdn.com/images/carmine/post/3dae6d5e-4a16-43c8-b618-e33943773dc0/image.png)
