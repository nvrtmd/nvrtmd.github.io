---
layout: post
title: '[Node.js 백엔드 기초] Node.js Basic Project - 프로젝트 톺아보기 (1)'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511675-7ade832f-2bc7-4302-973f-0abde99203bb.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 프로젝트 톺아보기👀

## 프로젝트 생성 및 초기 세팅🧱

### 프로젝트 생성

```script
express 프로젝트명 --view=ejs
```

### 초기 세팅

- node_modules 폴더 생성

```script
npm install
```

- nodemon 적용
  - package.json의 start script 수정

```JSON
"scripts": {
  "start": "nodemon ./bin/www"
},
```

## 기본 파일 및 폴더 정리📂

### bin/www

- http 모듈에 express 모듈 연결 및 포트 지정
- 서버를 실행하는 스크립트

```JavaScript
// #!/usr/bin/env node
/**
 * Module dependencies.
 */

// app: 실제 동작하는 node application
var app = require("../app");

// 서버 측에서 디버깅 환경을 구성해주는 debug node 패키지를 참조
var debug = require("debug")("express-project-2:server");

// node 프레임워크에서 제공해주는 http 웹서버 객체를 참조
var http = require("http");

/**
 * Get port from environment and store in Express.
 */

/*
  localhost:3000의 포트 번호(3000)을 지정하는 코드
    - 포트 변경: 디폴트 포트를 변경하면 가능
*/
var port = normalizePort(process.env.PORT || "3000");

// 상단에서 가져온 node application의 서비스 포트 번호를 3000번으로 세팅 = 서버가 실행될 포트를 설정하는 것
app.set("port", port);

/**
 * Create HTTP server.
 */

// http 객체를 통해 웹 서버를 생성하며 app을 서버를 통해 서비스
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

// 해당 서버의 통신 포트 지정 -> 포트 연결
server.listen(port);

// 웹 서버에 에러 발생 시 해당 에러를 처리할 에러 핸들러로 onError 함수를 지정 & 서버 실행
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a num![](https://velog.velcdn.com/images/carmine/post/c9b39e4f-50be-40b1-b7c0-df61edd004a9/image.png)
ber, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

// 요청 들어올 때 마다 모니터링
function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
```

### app.js

- 핵심 서버 역할 담당, 미들웨어 관리
- 중간의 미들웨어를 거쳐 클라이언트 요청 처리 후 응답
- 서버의 entry point

```JavaScript
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// express 패키지 호출하여 app 변수 객체 생성
var app = express();

/*
  view engine setup
  app.set() 메서드를 사용한 express app 설정
*/

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 미들웨어 연결
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
```

### public 폴더

- 정적 파일을 위한 폴더
- 클라이언트가 접근 가능한 폴더
- 이미지, JavaScript, CSS 파일 등이 포함됨
- app.js에 등록한 미들웨어를 통해 node.js로 구축한 웹에서 public 폴더 내의 파일 접근 가능

```JavaScript
// app.js
// ...
app.use(express.static(path.join(__dirname, "public")));
```

### routes 폴더

- 라우팅을 위한 폴더
- 라우팅 로직이 구현된 파일이 포함됨

  - 클라이언트 요청 별 어떤 로직 수행할 지 지정한 파일

### views 폴더

- 템플릿 파일이 포함됨
  - 클라이언트 요청에 대한 로직 처리 후 클라이언트에 응답할 html 코드가 지정된 파일
