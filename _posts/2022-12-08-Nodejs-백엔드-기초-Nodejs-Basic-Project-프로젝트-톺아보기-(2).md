---
layout: post
title: '[Node.js 백엔드 기초] Node.js Basic Project - 프로젝트 톺아보기 (2)'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511676-b4d53c42-6b6a-47d9-aed5-4490775df27d.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 프로젝트 톺아보기👀

## Routing 기본 실습🔀

### 라우팅 파일 생성 및 기본 접속 주소 설정

- routes 폴더 내 articles.js 파일 생성
- app.js 파일에 해당 라우팅 파일의 접속 주소 설정

```jsx
// ...
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

// 새 라우터 모듈 import
var articlesRouter = require('./routes/articles')

// ...
app.use('/', indexRouter)
app.use('/users', usersRouter)

/*
라우팅을 위한 미들웨어 설정
  - articles.js 파일 내에 정의한 라우팅 메소드를 사용하기 위한 기본 접속 path: /articles
*/
app.use('/articles', articlesRouter)
```

### 템플릿 파일 생성

- 게시글 리스트 템플릿 파일
- 참고
  - DB 연결을 하지 않은 프로젝트로서 라우팅 메소드에서 전달받은 데이터가 아닌 임의의 데이터를 고정적으로 뿌려서 보여주고 있음 -> ORM 프로젝트에서 라우팅 메소드를 통해 템플릿에 데이터를 주입할 예정

```HTML
<!DOCTYPE html>
<html>
<head>
    <title>
        게시글 목록
    </title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
</head>
<body>
    <h1>
        게시글 목록
    </h1>
    <table>
        <thead>
            <tr>
                <td>
                    번호
                </td>
                <td>
                    제목
                </td>
                <td>
                    조회수
                </td>
                <td>
                    IP
                </td>
                <td>
                    작성자
                </td>
                <td>
                    작성일
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    query string 방식
                    <a href="/articles/update?idx=1&stock=100">
                        title1
                    </a>
                </td>
                <td>100</td>
                <td>111.111.111.111</td>
                <td>Cathy</td>
                <td>2022.02.11</td>
            </tr>
            <tr>
                <td>2</td>
                <td>
                    parameter(wild card) 방식
                    <a href="/articles/update/2">
                        title2
                    </a>
                </td>
                <td>200</td>
                <td>222.222.222.2</td>
                <td>Lauren</td>
                <td>2022.03.11</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

- 게시글 작성 템플릿 파일

```HTML
<!DOCTYPE html>
<html>
<head>
    <title>
        게시글 작성
    </title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
</head>
<body>
    <h1>
        게시글 작성
    </h1>
    <form method="post" action="/articles/create">
        제목: <input type="test" name="title"> <br><br>
        <input type="submit" value="등록"> <br>
    </form>
</body>
</html>
```

- 게시글 수정 템플릿 파일

```HTML
<!DOCTYPE html>
<html>
<head>
    <title>
        게시글 수정
    </title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
</head>
<body>
    <h1>
        게시글 수정
    </h1>
    <form method="post" action="/articles/update">
        제목: <input type="test" name="title" value="<%=article.title%>"> <br><br>
        <input type="submit" value="수정"> <br>
        <input type="button" value="삭제" onclick="fnDelete();">
    </form>
    <script>
        function fnDelete() {
            if (confirm('Delete?')) {
                location.href = "/articles/delete?idx=1";
            }
        }
    </script>
</body>
</html>
```

### 라우팅 파일 내 라우팅 메소드 구현

- 게시글 라우팅 파일
  - 각종 라우팅 메소드를 정의
  - articles.js 라우팅 파일의 기본 호출 주소는 app.js에서 (로컬에서 실행 시) http://localhost:3000/articles로 설정 (도메인 구매 시 http://구매한도메인주소/articles)
    - ex) http://localhost:3000/articles/list, http://localhost:3000/articles/create
  - 실제 사용자가 호출할 주소: http://localhost:3000/articles/path

```jsx
var express = require('express')
var router = express.Router()
var path = require('path')

// 게시글 목록 페이지 호출 라우팅 메소드 - GET
router.get('/list', function (req, res) {
  const articleList = [
    {
      idx: 1,
      title: '게시글 제목 1',
      viewCnt: 100,
      ip: '111.111.111.111',
      displayYn: true,
      register: 'David',
      registDate: '2022.02.02',
    },
    {
      idx: 2,
      title: '게시글 제목 2',
      viewCnt: 100,
      ip: '222.111.222.111',
      displayYn: false,
      register: 'Kate',
      registDate: '2022.02.02',
    },
    {
      idx: 3,
      title: '게시글 제목 3',
      viewCnt: 300,
      ip: '333.111.333.111',
      displayYn: true,
      register: 'Joan',
      registDate: '2022.02.02',
    },
  ] /*
    res.render(render할 view 파일, 해당 템플릿에 전달할 데이터 객체)
      - render할 view 파일 전달 시 파일 확장자 생략 가능
      - { articleList }: 객체의 key와 value를 동일하게 설정하여 전달한 경우
  */

  res.render('articles/list', { articleList }) // 기본 설정 레이아웃 외의 레이아웃으로 렌더링되도록 설정하는 방법 // res.render("articles/list", { layout: "myLayoutPage" });
})

// 게시글 등록 페이지 호출 라우팅 메소드 - GET
router.get('/create', function (req, res) {
  res.render('articles/create')
})

// 게시글 등록 처리 라우팅 메소드 - POST
router.post('/create', function (req, res) {
  /*
    게시글 등록 처리 과정
      - 웹 브라우저의 form tag로 전달되는 데이터 추출
      - 추출된 사용자 입력값을 DB에 저장 -> 현재 코드에는 해당 부분 코드가 생략되어 있음
      - 등록 완료 시 특정 화면(view)을 전달 또는 특정 페이지로 이동
  */

  const title = req.body.title
  const contents = req.body.contents

  const articleData = {
    title,
    contents,
  }
  res.render('articles/create')
})

// 게시글 수정 페이지 라우팅 메소드 - GET - query string 방식
router.get('/update', function (req, res) {
  /*
    /update로 이동 시 요청되는 GET request의 query string을 key(idx, stock)로 접근하여 추출
    query string으로 전달되는 값 추출
      - query string으로 전달되는 값은 req.query를 통해 추출 가능
  */ const queryStringIdx = req.query.idx // const queryStringStock = req.query.stock;
  const article = {
    idx: 1,
    title: 'title 1',
    contents: 'contents 1',
    viewCnt: 100,
    ip: '111.111.111.111',
    register: 'Tom',
    registDate: '2022.02.01',
  }

  res.render('articles/modify', { article })
})

router.get('/update/test', function (req, res) {
  /*
    기타 res 객체 메소드 테스트
      - res.render();
      - res.redirect();
      - res.json(): 호출 결과를 json 데이터로 웹 브라우저에 전달
      - res.send(): 만능 메소드, 어떤 값이든 서버에서 웹 브라우저로 전달 가능
      - res.sendFile(): 서버 상에 존재하는 파일을 웹 브라우저에서 다운로드 가능하도록 함
  */
  const product = {
    idx: 1,
    productName: 'LG notebook',
    stock: 100,
    price: 12000000,
  } // res.json(product);

  // res.send(product); // res.sendFile(path.join(__dirname, "testImage.jpg"));
})

// 게시글 수정 페이지 라우팅 메소드 - GET - parameter 방식
router.get('/update/:idx', function (req, res) {
  /*
    parameter로 전달되는 값 추출
      - query string으로 전달되는 값은 wild card에서 지정한 키값을 통해 추출 가능
      - wild card 방식으로 호출하는 라우팅 메소드는 라우팅 파일 내 최하단에 배치해야 함
        - /update/test에 GET 요청 보낼 때 처리해주는 라우팅 메소드가 wild card 방식으로 호출하는 라우팅 메소드 하단에 정의되어 있을 때 문제 발생
        - http://localhost:3000/articles/test로 GET 요청 보냈을 때 의도치 않게 해당 라우팅 메소드가 해당 요청을 처리하게 될 수도 있기 때문
  */ const parameterIdx = req.params.idx

  const article = {
    idx: 1,
    title: 'title 1',
    contents: 'contents 1',
    viewCnt: 100,
    ip: '111.111.111.111',
    register: 'Tom',
    registDate: '2022.02.01',
  }
  res.render('articles/modify', { article })
})

// 게시글 수정 처리 라우팅 메소드 - POST
router.post('/update', function (req, res) {
  /*
    게시글 수정 처리 과정
      - 웹 브라우저의 form tag로 전달되는 데이터 추출
      - 추출된 사용자 입력값을 DB에 저장
      - 수정 완료 시 특정 페이지로 이동
  */ const title = req.body.title // redirect('실제 서비스 되는 url 주소')

  res.redirect('/articles/list')
})

// 게시글 삭제 처리 라우팅 메소드 - GET
router.get('/delete', function (req, res) {
  /*
    게시글 삭제 처리 과정
      - 삭제하고자 하는 게시글 idx 추출
      - 해당 게시글 idx 기준으로 DB에서 게시글 삭제
      - 삭제 완료 시 특정 페이지로 이동
  */ const articleIdx = req.query.idx

  res.redirect('/articles/list')
})

// 해당 articles.js 모듈의 라우터 객체를 외부에 노출
module.exports = router
```
