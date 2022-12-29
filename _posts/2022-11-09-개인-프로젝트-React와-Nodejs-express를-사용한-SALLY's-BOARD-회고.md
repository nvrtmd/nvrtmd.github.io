---
layout: post
title: '[개인 프로젝트] React와 Node.js+express를 사용한 SALLY’s BOARD🐥 회고'
description: '비전공자로서 프론트엔드 개발 공부에 뛰어든 뒤로, 나는 지속적으로 백엔드 개발 지식에 대한 필요성을 느껴왔다. 프로젝트를 진행하며 백엔드 개발자와 협업해야 했는데 커뮤니케이션을 하는 과정에서 내가 너무... 많은 것을 모르고 있다는 생각이 들었고 스스로 많이 답답하기도 했었다.'
featured: false
author: admin
categories: [회고]
tags: [프로젝트]
image: 'https://user-images.githubusercontent.com/67324487/209517436-fef642e4-8f54-42ff-8e7f-1efa12ff9066.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# SALLY’s BOARD🐥 회고

![](https://velog.velcdn.com/images/carmine/post/7f27fccc-1cbf-4a20-a9d8-77a1f9e27bdd/image.gif)

## Project Record📼

비전공자로서 프론트엔드 개발 공부에 뛰어든 뒤로, 나는 지속적으로 백엔드 개발 지식에 대한 필요성을 느껴왔다. 프로젝트를 진행하며 백엔드 개발자와 협업해야 했는데 커뮤니케이션을 하는 과정에서 내가 너무... 많은 것을 모르고 있다는 생각이 들었고 스스로 많이 답답하기도 했었다. 내가 개발한 것이 내가 원하는 대로, 의도한 대로 작동하지 않을 때, 그것이 단순히 프론트엔드단의 문제이기도 했지만, 백엔드 서버와 통신하는 과정에서 발생한 문제일 때도 있었다. 후자의 경우일 때, 무엇이 문제인 건지 내가 설명을 하는 것도 쉽지 않았고, 백엔드 개발자로부터 설명을 들어도 그것을 이해하기가 꽤 어려웠기 때문이다.

더불어 나는 늘 프론트엔드뿐만 아니라 백엔드 개발까지 할 수 있게 되어서 혼자서도 하나의 온전한 서비스를 만들 수 있기를 바라고 있었다. 상기한 것처럼 백엔드 개발 지식이 프론트엔드 개발자로서 협업하는 것에 큰 도움이 된다는 이유도 있었지만, 더 다양한 분야에 대해 배워보고 싶다는 순수한 호기심, 궁금증 때문이기도 했다.

그래서 아무래도 JavaScript가 나에게 가장 익숙한 언어이기 때문에 Node.js와 express 프레임워크를 사용한 백엔드 개발을 배워보기로 결정한 뒤 열심히 강의를 들었다. 그리고 시작한 첫번째 프로젝트가 바로 이 SALLY’s BOARD🐥이다.

이제 막 배운 지식으로 CRUD 연습을 해보기에는 역시 게시판 프로젝트만한 게 없는 것 같아서 게시판 서비스를 선택하였다. 어쩌면 조금 단순하기도 한 형식인데, 처음으로 프론트부터 백엔드 서버 개발까지 하는 것이어서 그런지 생각보다 어렵고 이런저런 크고 작은 문제 상황도 많이 겪어야 했다. 하지만 처음 시작했을 때 목표했던 기능들을 다 개발하고 나니 어려웠던 만큼 기쁘고 뿌듯했다. 또 한 번 조금 더 앞으로 나아간 기분. 이 작지만 소중한 프로젝트가 앞으로의 성장 여정에 큰 도움이 되어줄 것 같다.

## Project Log📜

### Repository💾

- Front: [repo](https://github.com/nvrtmd/react-board-project)
- Back: [repo](https://github.com/nvrtmd/node-board-project)

### Deployed Link👆🏻

[Link](https://react-board-project.netlify.app/)

### 폴더 구조 구성📂

처음에는 express 명령어로 생성되는 프로젝트 구조를 그대로 가져다 썼는데, 다른 프로젝트 코드들을 참고해가며 내 나름대로 폴더 구조를 수정해서 재구성하였다.

```
// node.js
📦node-board-project
┣ 📂apis
┃ ┣ 📂admin
┃ ┣ 📂board
┃ ┣ 📂user
┣ 📂bin
┣ 📂config
┣ 📂models
┗ 📜app.js
```

- apis: API를 제공하기 위한 폴더로 각 기능(회원 관리, 게시판, 로그인 및 회원가입 등) 별로 model(모델 정의), router(라우터 정의), middleware(미들웨어 정의), controller(각 기능별 응답 및 에러 처리 정의), service(각 기능별 핵심 함수 정의) 파일이 포함되어 있음
- config: DB 연결 정보 명시
- models: Sequelize 설정

기능상으로 연관이 있는 파일들끼리 가깝게 붙어있을 수 있도록 폴더 별로 묶었고, 또 그 폴더들을 apis 폴더로 묶어서 폴더 구조만으로도 파일 내 코드가 어떤 역할을 하는지 알 수 있도록 하였다. 또한 파일명도 useMiddleware, userRouter, userService 등 명시적으로 표현해보려고 했다.

클라이언트 측 폴더구조는 다음과 같다.

```
// react.js
📦src
┣ 📂assets
┣ 📂components
┃ ┣ 📂board
┃ ┣ 📂global
┃ ┣ 📂pages
┃ ┣ ┣ 📂admin
┃ ┣ ┣ 📂board
┃ ┣ ┣ 📂etc
┃ ┣ ┣ 📂user
┣ 📂layout
┣ 📂styles
┃ ┣ 📜globalStyle.js
┃ ┣ 📜theme.js
┣ 📂utils
┣ 📜App.js
┣ 📜constants.js
┗ 📜index.js
```

- App.js: routing을 위한 코드가 담긴 파일
- constants.js: 각종 상수 보관 폴더
- assets: 이미지, 아이콘 등 프로젝트에서 사용되는 자원들의 폴더
- components: 컴포넌트들의 폴더
  - pages: 페이지 컴포넌트들의 폴더
- layout: UI 공통 레이아웃 폴더
- styles: 전역적으로 사용되는 style을 위한 폴더
  - globalStyle.js: style 초기화 또는 전역적으로 지정한 style을 위한 파일
  - theme.js: 전역적으로 사용할 색상, 반응형 디자인을 위한 기기의 최소 폭 등을 정의하는 파일
- utils: 다양한 파일에서 사용할 util function을 위한 폴더

### Heroku 배포 과정에서 주의해야 할 점🧐

Heroku를 사용하여 서버를 배포하기로 결정했다. aws를 쓰자니 몇 주 전 옵션 설정 실수로 십만 원 넘게 과금이 되어 메일로 열심히 사정사정했던 기억 때문에 겁이 나서 우선 간단히 배포가 가능하고 무료(가장 중요ㅎ)인 Heroku를 선택했다.

사실 Heroku 배포는 워낙 많은 사람들이 방법을 게시해두었고 나 또한 그것을 참고하였기 때문에 방법 자체보다는 사소한 부분이지만 시간을 꽤나 잡아먹게 만든 실수들을 공유하고 싶다.

1. Procfile 만들어주기

- Procfile은 서버 가동을 위해 실행되어야 하는 명령어를 명시한 파일인데 폴더 구조 최상위에 위치해야 한다. 처음엔 이 파일 자체를 빼놓고 배포를 시도했었다. 당연히 서버 실행하는 명령어는 node ./bin/www이다. 후술할 실수와 연관이 되어 있는 부분인데, 나는 개발하는 당시엔 nodemon을 사용하고 있었고, 이 명령어에 nodemon을 적어야 하는지, 아닌지 헷갈렸었다. 지금 생각해보면 당연히 node 명령어를 사용했어야 하는 건데, 모든 게 처음이었으니 이런 것도 헷갈릴 수 있지 하하하😅

```
web:node ./bin/www
```

2. package.json의 start script 수정

- 이 또한 다소 바보 같은 실수이긴 한데, 배포하기 전에 사용하던 nodemon 명령어를 node로 수정했어야 했는데 그러지 않고 배포하려고 시도했었다. 다음부터는 이런 실수는 하지 말아야지🥺

```
"scripts": {
  "start": "node ./bin/www"
},
```

- 위의 두 실수를 방지하기 위해서 nodemon은 devDependency로 설치하고, 명령어 설정도 start 명령어에 해두지 말고 devStart 명령어에 해두는 게 좋을 것 같다. package.json 파일 내 scripts 설정에 신경 써야겠다.

3. .env 파일 내용 settings/Config Vars에 다 추가해주기

- 이것도 까먹으면 안 되는 중요한 부분이다. .env 파일 내에 정의해둔 환경 변수들을 Heroku 사이트 내의 settings/Config Vars에 꼭 추가해주어야 원하는 대로 작동시킬 수 있다.

### 쿠키가 제대로 전달되지 않는 문제🍪

Access token을 사용하는 방식으로 인증을 구현하였는데, 다른 프로젝트들에서 프론트엔드 개발을 담당했을 때도 나를 지겹도록 괴롭혔던 쿠키 문제, 정확히 말하면 CORS 문제와 맞닥뜨리게 되었다.

우선 내가 의도한 바는, 일반적으로 쿠키를 사용한 인증 방식과 동일하게 클라이언트 측이 로그인을 시도했을 때 서버로 전달해준 로그인 정보를 사용하여 DB에서 해당 회원 정보를 조회하고, 만약 회원가입 되어있다면 jwt 토큰을 생성하여 쿠키에 넣어서 클라이언트 측에 응답해주는 것이었다. 그리고 보안을 위해 브라우저에서 접근할 수 없도록 HttpOnly 쿠키로 설정해서 전달하고자 했다. 그런데 흔히 볼 수 있는 CORS 에러 메세지를 마주할 수 있었다😂 그래서 나는 문제를 해결하기 위해 다음과 같은 시도들을 했었다.

1. 서버 측에서 cors 패키지를 사용한 설정을 추가해주기

```jsx
const cors = require('cors')
//...

app.use(
  cors({
    origin: '*', // 모든 도메인에 대해 접근 권한을 부여
    credential: true, // 다른 도메인 간에도 인증이 필요한 리소스(쿠키 등)의 공유를 허락
  }),
)
```

- 이렇게 설정한 이후 클라이언트 측에서 withCredentials: true 옵션을 넣어서 요청을 보내니까 다음과 같은 오류가 발생하였다.

> Access to XMLHttpRequest at 'http://aaaa.com' from origin 'http://bbb.com' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '\*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.

- 이는 인증 정보를 포함한 통신을 할 때 Access-Control-Allow-Origin 값이 `*` 이면 지원을 하지 않기 때문에 발생한 오류이다. 아무래도 그리 보안에 유리한 설정은 아니었던 것 같다.

2. 인증 정보가 포함된 통신이 이루어질 때는 직접 응답 헤더에 origin을 명시해주기

```jsx
res.setHeader('Access-Control-Allow-origin', process.env.FRONT_URL)
res.setHeader('Access-Control-Allow-Credentials', 'true')
```

- 요청을 보내오는 클라이언트 측 도메인 주소를 환경변수로 등록해두고 그 도메인으로부터 오는 요청에 대해서는 접근 권한과 인증이 필요한 리소스의 공유를 허락하도록 하였는데, 이렇게 하니까 쿠키를 넣어서 클라이언트 측으로 보내 주었는데 클라이언트 측에서 그 쿠키를 받아서 필요할 때 서버로 보내주지를 못하는 것이다;
- 마이페이지 등에서 자신의 회원 정보를 확인할 때 자신이 로그인된 사용자라는 것을 증명하기 위해 서버로부터 받은 토큰을 쿠키에 넣어 보내줘야 하는데, 분명 서버로부터는 쿠키를 받았는데(첫 번째 이미지), /profile 요청을 보면 withCredentials: true 옵션을 넣었음에도 쿠키가 요청에 안 넣어져서 보내지는 것이다(두 번째 이미지).

![](https://velog.velcdn.com/images/carmine/post/33569a04-da01-4ba0-9821-98a75918c55d/image.png)

![](https://velog.velcdn.com/images/carmine/post/d096409c-4e23-4c8e-8f49-c2a8af3311a4/image.png)

3. 클라이언트 측에서 쿠키를 서버로 보낼 때뿐만 아니라 받아오는 요청(로그인 등)을 할 때도 withCredentials: true 옵션을 넣어주기

- 단순히 서버로 쿠키를 보낼 때만 넣어주는 게 아니라 받아오는 요청에도 withCredentials: true 옵션을 넣어주니 원하는 대로 쿠키를 받아서, 그 쿠키를 서버로 잘 보냈다!
- 추가로, 기존에는 /profile 요청과 같이 인증 정보를 포함한 통신이 이루어질 때 직접 응답 헤더에 origin을 명시해주었는데,

```jsx
res.setHeader('Access-Control-Allow-origin', process.env.FRONT_URL)
res.setHeader('Access-Control-Allow-Credentials', 'true')
```

- 이렇게 하면 동일한 코드를 필요한 모든 응답에 반복적으로 넣어주어야 해서 번거로웠다. 이를 해결하기 위해서 cors 옵션을 다음과 같이 수정하였다.

```jsx
app.use(
  cors({
    origin: [process.env.FRONT_URL, 'http://localhost:3000'],
    // ...
    credentials: true,
  }),
)
```

- 이를 통해 필요한 응답에 대해 하나하나 setHeader로 허용하고자 하는 origin을 명시해주지 않아도 실 배포된 클라이언트 측 도메인과 개발용 localhost에서 오는 요청에 대해서는 'Access to XMLHttpRequest at~' 에러가 뜨지 않게 되었다👍🏻

### 회원 정보 수정 후 쿠키 재설정🍪

왜 회원 정보를 수정한 다음에 프로필 페이지로 바로 접근하려고 시도했을 때 회원 정보가 제대로 불러와지지 않는지 의아했었는데, 알고 보니 회원 정보를 수정한 다음에 서버에서 기존 회원 정보로 발행한 쿠키를 새로운 회원 정보를 토대로 다시 만들어서 발행해주어야 하는 것을 잊어버렸기 때문이었다😱

```jsx
await User.update(modifyUserData, { where: { user_id: signedInUserId } })

const newUserData = { userId: modifyUserData.user_id }

const newToken = jwt.sign(newUserData, process.env.JWT_SECRET_KEY, {
  expiresIn: process.env.JWT_EXPIRE_TIME,
  issuer: process.env.JWT_ISSUER,
})

res.setHeader(
  'Set-Cookie',
  `token=${newToken}; Path=/; HttpOnly; SameSite=none; secure=true;`,
)
```

그래서 회원 정보를 업데이트한 뒤에는 새로운 정보를 넣은 토큰을 발행해서 쿠키에 넣어 보내주었다!

### 쿠키가 브라우저에 저장되지 않는 이유?🍪

![](https://velog.velcdn.com/images/carmine/post/65a2b335-bc0a-4b7b-bc0c-eefc66b19fb5/image.png)

![](https://velog.velcdn.com/images/carmine/post/f983365c-e328-4e21-9514-4cc7edb61ce7/image.png)

분명히 쿠키는 서버로부터 잘 보내졌는데, 도통 브라우저에 저장이 되지를 않았다. 아무리 HttpOnly 쿠키여서 클라이언트 측에서 조작이 불가능하다고 해도, 구글링을 해봤을 때 개발자 도구를 통해 쿠키를 볼 수는 있었는데 말이다. 그래서 다시 알아본 결과...

> 서버에서 Cookie를 발급할 때, 서버는 자기 자신 혹은 상위 도메인을 Cookie의 Domain값으로만 지정할 수 있습니다. 따로 지정하지 않으면 현재 host를 기본값으로 사용합니다.

라고 하는 것을 보아, 쿠키의 도메인이 Heroku의 도메인이어서 저렇게 첫 번째 이미지처럼 브라우저가 아닌 서버의 도메인에 쿠키가 세팅되는 것 같다; 그런데 난 비용 문제로 인해 서버는 Heroku, 클라이언트는 Netlify로 각각 배포를 해두어서 두 도메인이 같을 수가 없고, 그래서 브라우저에 쿠키가 세팅이 안 되는 것이라고 추측된다. 이래서 프로젝트를 할 때나 인턴으로 근무할 때, 서버 API 주소가 클라이언트 주소에 .api만 추가한 형식으로 설정되었던 것인가...라고 혼자 생각해보았다. 일단 클라이언트에 쿠키가 저장되지 않아도 내가 개발하고자 하는 기능까지는 개발할 수 있었기에 이유를 알아내는 것에서 케이스를 종료하게 되었다😰

한 프로젝트에서 배운 것들이 이렇게 많다니, 새삼 놀랍다. 개발을 하고 있을 때는 개발하는 것에 몰두해있어서 에러의 발생 원인과 그 해결 방법을 꼼꼼히 정리하기가 어려운데, 이제 그 필요성을 실감했으니 앞으로는 좀 오래 걸려도 착실하게 문서화 + 아카이빙을 해두어야겠다. 이 글을 통해 누군가에게 도움이 되었으면 좋겠고, 그렇지 않더라도 나 한 사람에겐 큰 도움이 되었으니 기분 좋게 마무리할 수 있을 것 같다. 수고했다!😎
