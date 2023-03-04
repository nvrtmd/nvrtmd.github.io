---
layout: post
title: '[개인 프로젝트] TypeScript, React와 Node.js를 사용한 Yuzamin97 회고'
description: '작년에 진행했던 SALLY’s BOARD🐥 프로젝트를 더 발전시켜 보고 싶다는 생각을 늘 하고 있었다. 아무래도 처음으로 프론트와 백엔드 개발을 모두 혼자 담당해서 완성해본 첫 프로젝트여서 나에게 의미가 컸기 때문이다.'
featured: true
author: admin
categories: [회고]
tags: [프로젝트]
image: 'https://user-images.githubusercontent.com/67324487/222894808-b89bd52e-b81e-41ef-844b-3bdf326ca31d.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 프로젝트 개요

![](https://user-images.githubusercontent.com/67324487/219047672-d0f219c3-1882-4c68-9bb7-5a476f5563b7.gif)

## 동기

작년에 진행했던 [SALLY’s BOARD🐥](https://nvrtmd.github.io/%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-React%EC%99%80-Nodejs-express%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-SALLY's-BOARD-%ED%9A%8C%EA%B3%A0/) 프로젝트를 더 발전시켜 보고 싶다는 생각을 늘 하고 있었다. 아무래도 처음으로 프론트와 백엔드 개발을 모두 혼자 담당해서 완성해본 첫 프로젝트여서 나에게 의미가 컸기 때문이다. 또한 SALLY’s BOARD는 내 기준 수정할만한 여지가 매우 남아있었던 프로젝트였다. 아예 새로운 프로젝트를 시작하는 것도 실력 향상에 도움이 되겠지만 기존 프로젝트를 업그레이드하는 것 또한 그에 못지않게 의미 있으리라는 생각에 Yuzamin97 프로젝트를 시작하게 되었다.

- 참고: 편의를 위해 이 게시글에서 SALLY’s BOARD🐥를 ‘이전 프로젝트’라고 지칭했다.

## 기술 스택

- Frontend
  - TypeScript
  - React
  - styled-components
- Backend
  - Node.js
  - express
  - sequelize

## 구현 기능

- 회원가입, 로그인/로그아웃 기능 구현
  - useReducer를 사용한 custom hook을 통해 아이디, 비밀번호, 닉네임 정보 입력 시 유효성 검사 실시
  - 유효한 정보가 입력되었을 시 회원가입 가능
  - custom hook을 통해 로그인 form에 입력되는 정보를 제어
  - 회원 DB에 존재하는 아이디 및 비밀번호를 입력할 때 로그인 성공
- 게시글 작성 기능 구현
  - 로그인된 계정은 게시글을 작성 가능
  - 자신이 작성한 게시글 한정 수정 및 삭제 가능
- 댓글 작성 기능 구현
  - 게시글 페이지에서 게시글에 대한 댓글을 작성할 수 있음
  - 자신이 작성한 댓글 한정 수정 및 삭제 가능
- 자신이 작성한 게시글 조회 기능 구현
  - 로그인된 계정은 자신이 작성한 게시글을 조회할 수 있음
- 자신의 회원 정보 확인 및 수정 기능 구현
  - 로그인된 계정은 자신의 회원 정보를 확인 및 수정할 수 있음
- 회원 탈퇴 기능 구현
  - My page에서 회원 탈퇴 가능
- IntersectionObserver API를 활용한 custom hook을 제작하여 Infinite Scroll 구현

# 완성된 프로덕트

## **Deployed Link**

[**🌏Link🌍**](https://web-yuzamin97-luj2cldvrt49y.sel3.cloudtype.app/)

## Repository
- [**Frontend (React + TypeScript)**](https://github.com/nvrtmd/react-membership-board-ts) 
- [**Backend (Node.js + express)**](https://github.com/nvrtmd/node-membership-board)

## 회원가입 및 로그인

![회원가입 및 로그인](https://user-images.githubusercontent.com/67324487/222918251-f890105f-09a4-486a-bdde-5b22d24c6293.gif)

## 게시글 목록 조회

![게시글 목록 조회](https://user-images.githubusercontent.com/67324487/222918253-c4fac9e7-7274-41c1-91a1-4cf28c81a939.gif)

## 단일 게시글 및 댓글 목록 조회

![단일 게시글 및 댓글 목록 조회](https://user-images.githubusercontent.com/67324487/222918255-ce69458b-5038-439a-86f5-e8b2bf4a5f9b.gif)

## 게시글 작성 및 수정, 삭제

![게시글 작성 및 수정, 삭제](https://user-images.githubusercontent.com/67324487/222918256-c4422f00-50bf-4e89-9e2c-59e2c66c7184.gif)

## 댓글 작성 및 수정, 삭제

![댓글 작성 및 수정, 삭제](https://user-images.githubusercontent.com/67324487/222918258-a3d9e17c-4fb6-4406-bf10-b6a162c91e30.gif)

## 자신이 작성한 게시글 조회

![자신이 작성한 게시글 조회](https://user-images.githubusercontent.com/67324487/222918261-fc7932e2-bd86-42c9-b7e5-a9d5bbf2f1ec.gif)

## 회원 정보 수정

![회원 정보 수정](https://user-images.githubusercontent.com/67324487/222918263-eded3056-4e48-4a27-b2c3-aa2e26c57150.gif)

# 프로젝트 세팅 과정

회원가입 및 로그인이 가능한 게시판 서비스라는 점에서 기본적인 뼈대는 이전 프로젝트와 거의 동일하다. 그 뼈대에 몇 가지 차별점을 추가하여 완성한 것이 Yuzamin97이다. 이 프로젝트를 세팅하는 과정에서 이전 프로젝트와 달리 진행했던 부분들에 대해 정리해보았다.

## Issue, PR, Commit message template 사용

이전 프로젝트에서는 모든 개발을 main 브랜치에서 진행했으며, PR-merge 과정이 부재했다. 이슈를 활용하지도 않았다. 빠른 프로젝트 진행을 위해 이런 중요한 단계를 생략했던 것이 못내 아쉬웠기에 이번 프로젝트에서는 보다 체계적으로, 실제로 다른 개발자들과 협업한다는 생각으로 진행하기로 했다. 그래서 본격적으로 개발을 시작하기 전, 먼저 이슈, PR, 커밋 메시지 템플릿을 만들기 위해 구글링도 하고 React의 repository를 뒤져보기도 했다. 이 때의 고민은 링크된 [트윗 스레드](https://twitter.com/nvrtmd/status/1615028836479176704?s=20)를 통해 확인 가능하다.

결론적으로 나의 이슈 템플릿은 React repository를 많이 참고하여 다음과 같은 형식이 되었다.

```markdown
# 무엇을 위한 이슈인가요?

_이슈 유형을 작성하세요._

# 현재 어떻게 동작하고 있나요?

_현재 상황에 대해 작성하세요._

# 어떻게 변화하기를 바라나요?

_이슈가 해결되면 어떻게 달라질지 작성하세요._

# 필요한 작업이 무엇인가요?

- [ ]
- [ ]

# 기타

_기타 사항을 작성하세요._
```

당연하게도 React repository에서 사용되는 템플릿은 영어로 되어있었다. 좀 더 명시적으로 사용해보고 싶어서 내가 임의로 번역한 것이다.

실제로는 다음과 같이 사용하였다.

![Issue](https://user-images.githubusercontent.com/67324487/222918348-0734e449-672a-4029-ab50-a3668418da58.png)

그리고 PR 템플릿은 심플하게 다음과 같은 구성을 취한다.

```markdown
# What is this PR?🔍

-

# Changes✨

-

# Screenshot📸

-

# To reviewers🕵🏻‍♂️

-

Closes #issue.no
```

PR에 대한 간략한 설명과 해당 PR로 인해 어떻게 변화할 것인지를 적고, 해당 부분에 대한 스크린샷(나는 코드나 실제 구동 화면을 캡쳐하여 첨부하였다)과 리뷰어들에게 남길 말을 기재하도록 했다. 마지막으로 PR과 연결된 이슈 번호를 적을 수 있게 하였다.

다음과 같이 PR을 올려 merge 하였다.

![PR](https://user-images.githubusercontent.com/67324487/222918397-8eca0d4a-2d82-452e-8d56-ad8174650656.png)

마지막으로 커밋 메세지 템플릿은 다음과 같다.

```bash
################^M
# type : title 의 형식으로 제목을 아래 공백줄에 작성^M
# 제목은 50자 이내 / 변경사항이 "무엇"인지 명확히 작성 / 끝에 마침표 금지^M
# 예) feat : 로그인 기능 추가^M
^M
# 바로 아래 공백은 지우지 마세요 (제목과 본문의 분리를 위함)^M
^M
################^M
# 본문(구체적인 내용)을 아랫줄에 작성^M
# 여러 줄의 메시지를 작성할 땐 "-"로 구분 (한 줄은 72자 이내)^M
^M
################^M
# 꼬릿말(footer)을 아랫줄에 작성 (현재 커밋과 관련된 이슈 번호 추가 등)^M
# 예) Resolves: #7 (이슈 해결)^M
# 예) Fixes: #7 (이슈 수정 중 - 미해결)^M
# 예) Ref: #23 (참고할 이슈)^M
# 예) Related to: #9, #12 (해당 commit에 관련된 이슈 - 미해결)^M
^M
################^M
# feat : 새로운 기능 추가^M
# design : CSS등 UI 디자인 변경^M
# fix : 버그 수정^M
# hotfix : 치명적 버그 긴급 수정^M
# docs : 문서 수정^M
# test : 테스트 코드 추가^M
# refactor : 코드 리팩토링^M
# style : 코드 포맷 변경, 세미 콜론 누락 등 코드 의미에 영향을 주지 않는 변경사항^M
# chore : 빌드 부분 혹은 패키지 매니저 수정사항^M
# comment : 주석 추가 및 변경^M
# rename : 파일 또는 폴더 이동 또는 이름 변경^M
# remove : 파일 또는 폴더 삭제^M
################^M
```

구글링을 통해 발견한 [게시글](https://velog.io/@bky373/Git-%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%8B%9C%EC%A7%80-%ED%85%9C%ED%94%8C%EB%A6%BF)을 참고하여 살짝만 변형시켰다.

아래와 같이 템플릿을 사용하여 보다 자세한 커밋을 남길 수 있었다.

![Commit](https://user-images.githubusercontent.com/67324487/222918419-50adef31-d340-4e68-bc7e-a9b3931f943a.png)

이렇게 템플릿을 설정해두고 그것에 맞춰 프로젝트를 진행하니 과정을 명확하게 확인할 수 있어서 유용했다. 나중에 프로젝트를 다시 복기해볼 때도 도움이 될 것 같다. 앞으로 또 개인 프로젝트를 하게 된다면 이렇게 모든 템플릿을 미리 세팅해두고 시작할 예정이다.

## TypeScript 프로젝트 세팅

이전 프로젝트는 자바스크립트로 진행했었으나, 이번 프로젝트의 프론트엔드는 타입스크립트로 개발해보기로 결정했다. 지금까지 편하다는 이유로 자바스크립트 위주로 사용해왔었기에, 다시 연습하면서 감(?)을 좀 끌어 올리고 싶었기 때문이다. 아래는 (다음에도 편하게 사용하기 위해 아카이빙해두는 용도로) 프로젝트를 세팅할 때 사용했던 명령어들을 정리해둔 것이다.

### CRA

```bash
$ npx create-react-app [원하는 폴더명] --template typescript
$ npx create-react-app . --template typescript  // 이미 원하는 폴더안에서 설치시
```

### 필요한 패키지 설치

```bash
$ yarn add react-router-dom @types/react-router-dom
$ yarn add styled-components @types/styled-components
$ yarn add styled-components.macro // 개발자 도구에서 컴포넌트명 확인하기 위함
$ yarn add styled-reset
$ yarn add axios @types/axios
$ yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
$ yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
// 추가 플러그인 설치
$ yarn add -D eslint-config-airbnb // 리액트 관련 규칙 O
$ yarn add -D eslint-plugin-react eslint-plugin-react-hooks
$ yarn add -D eslint-plugin-jsx-a11y eslint-plugin-import
```

## 외래키를 사용한 1:N 관계 설정

이전 프로젝트에서는 회원 테이블과 게시글 테이블만 존재했으며, 두 테이블 간 관계를 설정하지 못해 회원이 자식이 작성한 게시글만 따로 모아서 확인할 수 없었다. 이번 프로젝트에서는 댓글 작성 기능을 추가하기 위해 댓글 테이블을 만들었으며, 회원이 자신이 작성한 게시글을 모아볼 수 있도록 하기 위해 테이블 간 1:N 관계를 설정하였다.

```jsx
// models/index.js
const Sequelize = require('sequelize')
const path = require('path')
const env = process.env.NODE_ENV || 'development'
const Post = require('./post')
const Member = require('./member')
const Comment = require('./comment')

const config = require(path.join(__dirname, '..', 'config', 'database.js'))[env]

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
)

const db = {
  sequelize,
  Sequelize,
  Post: Post(sequelize, Sequelize),
  Member: Member(sequelize, Sequelize),
  Comment: Comment(sequelize, Sequelize),
}
/*
	한 명의 회원이 여러 개의 게시글 작성할 수 있으므로 hasMany 메소드 사용
	외래키는 member_idx로 설정
*/
db.Member.hasMany(db.Post, {
  foreignKey: 'member_idx',
})
/*
	Post 테이블은 Member 테이블에 종속됨
	Member 테이블과의 관계의 alias(별명)은 post_writer로 설정
*/
db.Post.belongsTo(db.Member, {
  foreignKey: 'member_idx',
  as: 'post_writer',
})

/*
	회원 - 댓글 / 게시글 - 댓글 간 관계 설정 
	- 한 명의 회원이 여러 개의 댓글을 작성할 수 있도록
	- 한 게시글이 여러 개의 댓글을 가질 수 있도록
*/
db.Member.hasMany(db.Comment, {
  foreignKey: 'member_idx',
})
db.Comment.belongsTo(db.Member, {
  foreignKey: 'member_idx',
  as: 'comment_writer',
})

db.Post.hasMany(db.Comment, {
  foreignKey: 'post_idx',
  onDelete: 'cascade',
})
db.Comment.belongsTo(db.Post, {
  foreignKey: 'post_idx',
  as: 'commented_post',
})

module.exports = db
```

이제 와서 보면 간단해 보이지만, 작년에 이전 프로젝트를 진행할 때는 마냥 어렵게 느껴졌었다. 이번 프로젝트를 통해 하나의 장애물을 넘은 것 같아 기분이 좋았다!😎

## 무한 스크롤 구현을 위해 offset과 limit 추가

이전 프로젝트에서 게시글 목록 페이지에 접근하면 모든 게시글이 별도의 페이지네이션 없이 모두 불러와졌다. 이번엔 무한 스크롤 기능을 추가해보고 싶어서 게시글 또는 댓글 목록을 요청할 때, query string으로 전달한 값(start, count)을 토대로 데이터를 분절하여 응답하도록 구현하였다.

```jsx
router.get('/list', async (req, res) => {
  const { start, count } = req.query
  try {
    const postList = await Post.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Member,
          as: 'post_writer',
          attributes: ['member_id', 'member_nickname'],
        },
        {
          model: Comment,
          as: 'comments',
          attributes: [
            'comment_idx',
            'comment_contents',
            'createdAt',
            'updatedAt',
          ],
        },
      ],
      offset: Number(start), // 'start'번째 게시글부터
      limit: Number(count), // 'count개'만큼 불러와서 응답~
    })
    return res.status(StatusCodes.OK).json({
      data: postList,
    })
  } catch {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR)
  }
})
```

이때, 클라이언트가 start, count값 없이 응답했을 때는 게시글 목록 전체를 응답해주고 싶어서 다음과 같이 코드를 수정했다. 원래 null 대신 undefined를 할당했었는데, null과 undefined의 차이에 대해 구글링하다가 발견한 이 [게시글](https://hanamon.kr/javascript-undefined-null-%EC%B0%A8%EC%9D%B4%EC%A0%90/)을 읽어보니 개발자가 의도적으로 undefined를 할당한다는 게 적절하지 않은 것 같기도 하고, ‘값의 부재’를 나타내는 null을 활용하는 게 맞는 것 같다는 판단하에 다시 수정한 것이다.

```jsx
offset: start ? Number(start) : null,
limit: count ? Number(count) : null,
```

# 직면했던 문제와 해결 과정

프로젝트를 진행하며 정말 수도 없이 많은 에러를 맞닥뜨렸었다. 예전엔 에러가 발생하면 디버깅에만 정신이 팔려있었는데, 이번엔 틈틈이 짧게나마 메모를 남기거나 디버깅할 때 도움을 받았던 글의 링크를 저장해두는 방식으로 기록을 남겨두었다. 모든 내용을 이 글에 다 기록하기에는 글이 너무 길어질 것 같아 공유하고 싶은 케이스 몇 가지를 추려서 적어보았다.

- 참고: 수정을 통해 현재 프로젝트 코드에서 누락되거나 최종 코드와 달라진 부분은 제목 앞에 (deprecated)를 달아서 표시할 것이다.

## (deprecated) event.target vs event.currentTarget

### 문제점

```tsx
const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e.target.dataset.id) // error!
  console.log(e.currentTarget.dataset.id) // board-icon
}
<div data-id="board-icon" onClick={(e) => handleClick(e)}>
  <div>A</div>
  <div>B</div>
</div>
```

위의 코드에서 A, B 두 div 중 어느 것을 클릭하더라도 최상위 div의 onclick 이벤트를 통해 최상위 div의 data-id 값을 읽어오고 싶었다. 그런데 `console.log(e.target.dataset.id);`에서 'EventTarget' 형식에 'dataset' 속성이 없다는 에러가 발생했다.

### 해결 방안

이를 e.currentTarget.dataset.id로 바꾸니까 A, B 어디를 클릭하든 data-id를 읽어왔다.

e.target은 실제로 클릭 된 그 element를 가리키는 프로퍼티고 e.currentTarget은 이벤트 리스너가 부착된 요소를 가리키는 프로퍼티라고 한다.

즉, e.target은 잠재적으로 최상위 div 내 어느 자식 div이든 될 수 있고, 만약 사용자가 최상위 div가 아닌 자식 div를 클릭하게 되면 e.target.dataset.id는 undefined가 된다. 왜냐하면 자식 div들에는 dataset 속성이 없기 때문이다.

만약 A div를 클릭하면, click 이벤트는 A div에서 트리거 되고, 그 후 이벤트 버블링에 의해 상위 요소에서도 click 이벤트가 트리거 된다 → 그럼 자연스럽게 최상단 div에서도 click 이벤트가 트리거 되어 onClick 이벤트의 핸들러 함수인 handleClick 함수가 실행될 거고, 그럼 `console.log(e.currentTarget.dataset.id);` 는 이벤트 핸들러 함수가 부착된 요소인 최상위 div의 data-id를 출력할 것이다.

## (deprecated) 중복된 컴포넌트들 중 클릭된 컴포넌트만 효과 적용

### 문제점

```tsx
export const SideNavBar = () => {
  const navigate = useNavigate()
  const [boardClicked, setBoardClicked] = useState(false)
  const [documentClicked, setDocumentClicked] = useState(false)
  const [commentClicked, setCommentClicked] = useState(false)

  const handleIconClick = (event) => {
    switch (event.detail) {
      case 1: {
        // TODO 아이콘 파랗게 변하는 효과 적용
        break
      }
      case 2: {
        // TODO 해당 아이콘이 나타내는 페이지로 이동
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <Wrapper>
      <IconBox data-id="board-icon" onClick={handleIconClick}>
        <IconImage src={BoardImg} clicked={boardClicked} />
        <IconName clicked={boardClicked}>Board</IconName>
      </IconBox>
      <IconBox data-id="document-icon" onClick={handleIconClick}>
        <IconImage src={DocumentImg} clicked={documentClicked} />
        <IconName clicked={documentClicked}>My Documents</IconName>
      </IconBox>
      <IconBox data-id="comment-icon" onClick={handleIconClick}>
        <IconImage src={CommentImg} clicked={commentClicked} />
        <IconName clicked={commentClicked}>My Comments</IconName>
      </IconBox>
    </Wrapper>
  )
}
```

아이콘을 1회 클릭 시 아이콘의 색상이 변하도록 하고 싶었다. 그리고 더블 클릭 시 해당 아이콘이 나타내는 페이지로 이동하도록 구현하고 싶었다. state를 3개 만들어서 해당 아이콘이 클릭 되었을 경우 해당 state를 true로 변경하고, 그 state에 따라 컴포넌트의 스타일을 달리 적용하는 방식으로 구현해보고자 했다.

(당연하게도) 별로 효율적이지 못한 방법이라는 생각이 들었다. 아이콘이 늘어나는 만큼 state도 하나씩 늘어나야 하고, 무엇보다 가장 마지막에 클릭 된 아이콘 하나만 클릭 된 효과를 적용하고 싶었기 때문이다. 추가로 1회 클릭/2회 클릭을 onClick 하나로만 제어하는 것 또한 개선될 여지가 있다고 느꼈다.

### 해결 방안

```tsx
export const SideNavBar = () => {
  const [clickedItem, setClickedItem] = useState('')

  const handleClick = (item) => {
    setClickedItem(item)
  }

  return (
    <Wrapper>
      <NavItem
        name="Board"
        route="/board"
        image={BoardImg}
        isClicked={clickedItem === 'Board'}
        onClick={() => handleClick('Board')}
      />
      <NavItem
        name="My Documents"
        route="/document"
        image={DocumentImg}
        isClicked={clickedItem === 'My Documents'}
        onClick={() => handleClick('My Documents')}
      />
      <NavItem
        name="My Comments"
        route="/comment"
        image={CommentImg}
        isClicked={clickedItem === 'My Comments'}
        onClick={() => handleClick('My Comments')}
      />
    </Wrapper>
  )
}

const NavItem = ({ name, route, image, isClicked, onClick }) => {
  const navigate = useNavigate()

  const handleDoubleClick = () => {
    navigate(route)
  }

  return (
    <IconBox onClick={onClick} onDoubleClick={handleDoubleClick}>
      <IconImage src={image} clicked={isClicked} />
      <IconName clicked={isClicked}>{name}</IconName>
    </IconBox>
  )
}

// ...

const IconName = styled.div`
  ${({ clicked }) =>
    clicked &&
    `
    background: red;
  `}
`

const IconImage = styled.img`
  ${({ clicked }) =>
    clicked &&
    `
    background: red;
  `}
`
```

물론 이 코드 또한 최종 코드는 아니지만, 일단 아이콘들을 NavItem이라는 컴포넌트로 만들었으며, 클릭 된 NavItem의 이름을 담는 state인 clickedItem를 만들어서 clickedItem과 해당 NavItem의 이름이 같을 경우에만 클릭 된 UI 효과 `background: red;` 가 적용되도록 하였다. 이 방법으로 클릭 된 단일 NavItem에만 효과가 적용될 수 있었다.

그리고 두 번 클릭 되었을 때 실행될 함수는 onClick이 아닌 onDoubleClick 이벤트 리스너에 할당하였다.

## 단일 컴포넌트가 중복 사용되는 경우 개선방안

### 문제점

바로 위 해결방안 코드를 보면 NavItem이 3회 반복되며 사용되는 것을 확인할 수 있다. 최종 코드에서는 NavItem이 5개까지 늘어나서 하나의 컴포넌트가 너무 많이 반복되는 느낌이었다.

### 해결 방안

```tsx
export const SideNavBar = memo(() => {
  // ...

  const navItemList = [
    {
      name: 'Board',
      image: BoardImg,
      clickHandler: () => handleNavItemClick('Board'),
      isClicked: isClicked('Board'),
      route: '/board/list',
    },
    {
      name: 'My Posts',
      image: DocumentImg,
      clickHandler: () => handleNavItemClick('My Posts'),
      isClicked: isClicked('My Posts'),
      route: '/member/posts',
    },
    {
      name: 'My Page',
      image: CommentImg,
      clickHandler: () => handleNavItemClick('My Page'),
      isClicked: isClicked('My Page'),
      route: '/member/info',
    },
    {
      name: 'Home',
      image: HomeImg,
      clickHandler: () => handleNavItemClick('Home'),
      isClicked: isClicked('Home'),
      route: '/',
    },
    {
      name: 'About',
      image: AboutImg,
      clickHandler: () => handleNavItemClick('About'),
      isClicked: isClicked('About'),
      route: '/about',
    },
  ]

  return (
    <Wrapper>
      {navItemList.map((navItem) => (
        <NavItem
          key={navItem.name}
          name={navItem.name}
          image={navItem.image}
          handleClick={navItem.clickHandler}
          isClicked={navItem.isClicked}
          route={navItem.route}
        />
      ))}
    </Wrapper>
  )
})
```

navItemList라는 array를 생성하여 그 안에 NavItem에 props로 전달될 정보들을 담은 객체들을 넣고, 그 array를 map을 통해 순환하는 방식으로 구현하였다. 이 방식을 사용하여 동일한 코드의 반복을 줄일 수 있었다.

## 프로젝트에 사용되는 type, interface를 정리하는 방법

### 문제점

프로젝트에 사용되는 타입들을 어디에 정의해두는 것이 좋을지 고민이 되었다. 구글링을 해본 결과 역시 나만 하는 고민이 아닌 듯 많은 게시글이 있었고 그 중 [하나](https://www.becomebetterprogrammer.com/typescript-organizing-and-storing-types-and-interfaces/)를 참고해보았다.

### 해결 방안

프로젝트 전역에서 사용되거나 그럴 여지가 존재하는 타입들은 `src/global/types.ts` 에 정의해서 일괄적으로 import 해서 사용하기로 했다. 프로젝트 규모가 크지 않아서인지 해당 파일 내에 정의할 타입의 수가 그리 많지 않았다(6개 정도). 그리고 한 파일 내에서 사용되는 타입들, 주로 컴포넌트의 props 타입들은 사용되는 파일 가장 상단에 모아서 정의해두었다.

## 커서 이미지 적용할 때 적용 안되는 이유

### 문제점

```css
cursor: url('image-url'), auto;
```

사이트 내에서는 컨셉에 맞는 커서를 사용할 수 있도록 커서 이미지를 커스텀 하려고 했다. 그런데 아무리 다음과 같이 설정해도 적용이 되지를 않는 것이다. 이걸 해결하기 위해 꽤 많은 시간을 소모했는데, 해결책은 생각보다 아주 간단했다.

### 해결 방안

스택오버플로우의 한 [게시글](https://stackoverflow.com/questions/18551277/using-external-images-for-css-custom-cursors)에 따르면 커서에 적용할 이미지의 크기를 128x128px 이하로 설정해야 했다. 조금 허무했다😂

## 타입 이름과 컴포넌트 이름이 같을 때

### 문제점

단일 댓글 컴포넌트인 Comment 컴포넌트를 만들고 싶었는데, 해당 컴포넌트에서 props로 받을 댓글 데이터의 타입도 Comment였기 때문에 이름이 겹쳐 사용할 수 없었다. 이는 개발 당시 포스팅했던 트위터 스레드에 다른 트위터 친구분들과 나눈 대화에 잘 드러나 있어 해당 [트윗](https://twitter.com/nvrtmd/status/1619347841515925504?s=20)을 링크해두었다.

### 해결 방안

결과적으로 댓글 데이터의 타입을 Comment로 유지하고, 컴포넌트의 이름을 CommentItem으로 정했다. 프로젝트에서 세부 컴포넌트의 이름에 -Item이라는 접미사(?)를 붙여서 사용하고 있었기 때문에 그것과 통일하기 위함이었다. PostList 컴포넌트 안에 PostItem 컴포넌트가 있고, SideNavBar 컴포넌트 안에 NavItem이 있으니, 댓글 목록 컴포넌트인 CommentList 안에는 CommentItem이 있는 게 옳다는 판단이었다.

## Button 컴포넌트 분리

### 문제점

![Button](https://user-images.githubusercontent.com/67324487/222918527-40c86122-2ee5-439d-b6b3-9d50f92e364b.png)

![Pushed Button](https://user-images.githubusercontent.com/67324487/222918528-6d0641f0-1f6d-430d-bc6d-b340c920733d.png)

기본 상태일 때와 클릭 되었을 때 다음과 같이 눌린 효과가 적용된 버튼 컴포넌트를 구현했는데, 개발을 하다 보니 mousedown(눌린 효과 적용) - mouseup(복구) 되는 버튼과 mousedown(눌린 효과 적용) - mouseup(눌린 상태로 유지) - mousedown(유지) - mouseup(복구) 되는 버튼을 나누어 사용해야 했다. 하나의 버튼 컴포넌트로는 이 두 타입의 버튼을 모두 구현해내기 어렵다는 판단하에 버튼 컴포넌트를 두 개로 나누게 되었다.

### 해결 방안

후자의 버튼을 ‘눌렸을 때 lock이 된다’는 의미를 담아 PustLockButton이라는 이름의 컴포넌트로 분리하였고, 해당 컴포넌트는 다음과 같이 구현하였다.

```tsx
export const PushLockButton = memo(
  ({
    isPushed,
    clickHandler,
    name,
    buttonRef,
    children,
  }: PushLockButtonProps) => {
    return (
      <PushLockButtonWrapper
        isPushed={isPushed}
        onClick={clickHandler}
        ref={buttonRef}
      >
        {children}
        {name}
      </PushLockButtonWrapper>
    )
  },
)
```

그리고 기본 버튼 컴포넌트는 다음과 같이 구현하였다.

```tsx
export const Button = memo(
  ({ restoreHandler, name, children, type, isDisabled }: ButtonProps) => {
    const [isPushed, setIsPushed] = useState<boolean>(false)

    const handleButtonPush = () => {
      setIsPushed(true)
    }

    const handleButtonRestore = () => {
      if (restoreHandler) {
        restoreHandler()
      }
      setIsPushed(false)
    }

    const handleButtonMouseOut = () => {
      setIsPushed(false)
    }

    return (
      <ButtonWrapper
        isPushed={isPushed}
        onMouseDown={handleButtonPush}
        onMouseUp={handleButtonRestore}
        onMouseOut={handleButtonMouseOut}
        type={type}
        disabled={isDisabled}
      >
        {children}
        {name}
      </ButtonWrapper>
    )
  },
)
```

버튼이 눌렸을 때는 눌렸다는 것을 UI로 표시는 하되, 버튼이 눌렸을 때 실행되어야 할 함수는 버튼이 원상 복구될 때, 즉, 버튼에 마우스를 눌렀다가 뗄 때(mouseup) 실행되도록 하였다. 그래서 props로 전달받을 이벤트 핸들러 함수의 이름도 restoreHandler로 설정하였다. 이는 아래 이미지와 같이 마치 드래그하듯 마우스를 누른 채 버튼 밖으로 커서를 이동시켰을 경우에는 UI만 원상으로 복구되고, 해당 버튼에 의해 작동해야 할 함수는 실행되지 않도록 하는 게 사용자가 익숙하게 느낄 작동 방식이라는 생각이 들었기 때문이다.

![Button use](https://user-images.githubusercontent.com/67324487/222918546-8758ea83-46d7-4e94-9692-322e08e84670.gif)

## 무한 스크롤 구현을 위한 custom hook (useIntersectionObserver)

이 부분은 문제점과 해결 방법이 존재하지는 않고, 내가 만든 custom hook의 코드를 공유하고자 기록하는 것이다. 코드에 대한 설명은 주석으로 달아두었다.

```tsx
import { useState, useEffect } from 'react'
// 요소의 교차 상태를 확인하여 isVisible로 true/false 반환하는 hook
export const useIntersectionObserver = (
  intersectRef: React.RefObject<HTMLDivElement>,
  optionsObject: {
    root: null
    rootMargin: string
    threshold: number
  },
) => {
  const { root = null, rootMargin = '0px', threshold } = optionsObject

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    // 변수 target에 IntersectionObserverEntry 객체 할당
    const target = entries[0]

    // 교차 여부에 따라 isVisible 상태값 변경
    if (target.isIntersecting) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: root,
      rootMargin: rootMargin,
      threshold: threshold,
    })

    // intersectRef.current가 존재하면 해당 요소를 IntersectionObserver가 observe하도록 함
    if (intersectRef.current) observer.observe(intersectRef.current)

    // unmount될 때 observer의 가시성 변화 주시 대상 해제
    return () => observer.disconnect()
  }, [intersectRef, root, rootMargin, threshold])

  return {
    isVisible,
  }
}
```

## useReducer를 사용한 input 유효성 검사 custom hook (useValidInput)

회원가입 시 유효성 검사를 해야 되므로, 회원가입 form에 사용될 input 값을 제어하는 custom hook을 useReducer를 활용하여 만들었다. form에서 사용될 state가 사용자가 입력한 값과 그 입력값이 유효성 여부가 포함된 객체 형식이므로 단순히 useState를 사용하여 제어하기보다는 useReducer를 사용하면 더 편리할 것 같았다. 추가로 useReducer 사용법을 연습해보고 싶기도 했다.

이 부분도 위와 같이 공부해서 적용한 내용을 기록하기 위해 남겨두는 것이며, 주석을 통해 설명을 남겨두었다.

```tsx
import { useReducer, useCallback } from 'react'
import { validator } from 'utils/validation' // id, password, nickname의 유효성 검사 로직

interface State {
  value: string
  isValid: null | boolean
}

interface Action {
  type: string
  value: string
  inputType: string
}
/*
	reducer 함수 선언
  - dispatch 함수에 의해 실행되며 state 업데이트 로직을 담당
  - state, action을 활용하여 새로운(업데이트된) state를 반환
*/
const inputReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        value: action.value,
        isValid: validator(action.inputType, action.value) || false,
      }
    case 'INPUT_SET':
      return {
        value: action.value,
        isValid: validator(action.inputType, action.value) || false,
      }
    case 'INPUT_BLUR':
      return {
        value: state.value,
        isValid: validator(action.inputType, state.value) || false,
      }
    default:
      return state
  }
}

// state의 초기값
const initialState: State = {
  value: '',
  isValid: null,
}

export const useValidInput = (inputType: string) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initialState)
  /* 
		input 값을 담을 state와 state를 업데이트하는 dispatch 함수를
    inputState, dispatchInput에 구조 분해 할당
		- dispatchInput을 통해 액션 객체에 따라 reducer 함수를 실행시켜 state를 업데이트함 
  */

  /* 
	  사용자가 input 값을 입력/수정할 시 실행되는 함수 
	  - inputState를 해당 input 값으로 업데이트하며 그 값의 유효성 여부를 갱신 
  */
  const handleInputChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLInputElement>,
    ) => {
      dispatchInput({ type: 'INPUT_CHANGE', value: e.target.value, inputType })
    },
    [],
  )

  /* 
	  input 컴포넌트에 blur 이벤트 발생 시 실행 
	  - 현재 inputState의 value 값을 검사하여 유효성 여부를 갱신
  */
  const handleInputBlur = useCallback(() => {
    dispatchInput({ type: 'INPUT_BLUR', value: inputState.value, inputType })
  }, [inputState.value])

  /* 
	  매개변수로 받은 값으로 현재 inputState의 value값을 업데이트하며 그 값의 유효성 여부를 갱신
  */
  const handleInputSet = useCallback((inputValue: string) => {
    dispatchInput({ type: 'INPUT_SET', value: inputValue, inputType })
  }, [])

  return {
    inputState,
    handleInputBlur,
    handleResetInput,
    handleInputChange,
    handleInputSet,
  }
}
```

## font-size에 따른 rem 계산법

이 주제 또한 그 동안 확실하게 알지 못하고 사용하던 부분을 이번 프로젝트에서 드디어 이해했기 때문에 기록해두었다.

![font size](https://user-images.githubusercontent.com/67324487/222918567-a9ec4956-ee1e-48ec-b0a0-a1d32f99b549.png)

```css
html {
  font-size: 62.5%;
}
```

대부분의 브라우저 기본 폰트 크기는 16px이다. 그러므로 다음과 같이 html의 폰트 크기를 62.5%로 설정하면 기본 폰트 크기가 10px이 된다. 이것은 `16 / 100 * 62.5 = 10` 라는 계산식으로 도출된 결과이다. rem(Root em)은 최상위 element의 크기에 비례하므로 1rem은 10px이 된다. 이를 토대로 다음과 같은 설정을 적용해볼 수 있다. (이는 예시 코드이며 프로젝트 코드와는 상이하다.)

계속 이 폰트 크기를 퍼센트로 지정해서 미디어 쿼리를 설정하는 게 잘 이해되지 않았었는데 드디어 아래 수식을 통해 계산하는 방법을 이해를 하게 되었다.

```css
html {
  font-size: 77%; /* 1rem = 16 / 100 * 73 = 12.32px */
  @media screen and ${theme.device.desktop} { /* 1440 */
    font-size: 73%; /* 1rem = 16 / 100 * 73 = 11.68px */
  }
  @media screen and ${theme.device.tablet} { /* 768 */
    font-size: 70%; /* 1rem = 16 / 100 * 70 = 11.2px */
  }
  @media screen and ${theme.device.mobile} { /* 425 *****/
    font-size: 62.5%; /* 1rem = 16 / 100 * 62.5 = 10px */
  }
}
```

## BottomNavBar의 Menu가 모바일에선 다르게 보이는 오류

### 문제점

- **웹/웹모바일**

![웹](https://user-images.githubusercontent.com/67324487/222918586-82949848-a936-4b2c-8ffc-e2aba3f8f604.png)

![웹모바일](https://user-images.githubusercontent.com/67324487/222918589-fd50384a-0059-4e79-b4c6-ead41cfea554.png)

- **실제 모바일**

![실제 모바일](https://user-images.githubusercontent.com/67324487/222918606-e85e2290-b290-448c-89b8-d9d2867d6bc2.png)

Start 버튼이 클릭 되면 BottomNavBar 바로 위에 Menu 컴포넌트가 표시되도록 구현하기 위해 BottomNavBar에 `position: relative, height: 2.8rem`가, Menu에 `position:absolute, bottom: 2.8rem`가 적용해둔 상태였다. 즉, Menu는 BottomNavBar를 기준으로 bottom에서 2.8rem만큼 떨어지게 잘못 설정되어 있었던 것이다. 그러나 Menu 컴포넌트는 BottomNavBar가 아닌 전체 화면(viewport)을 기준으로 바닥으로부터 2.8rem만큼 떨어져 있어야 원하는 대로 작동한다.

### 해결 방안

```tsx
export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Main>
        <SideNavBar />
        <Section>{children}</Section>
      </Main>
      <BottomNavBar />
    </LayoutWrapper>
  )
})
```

우선 BottomNavBar에 적용된 `position: relative` 를 제거하였다. 그리고 BottomNavBar 컴포넌트가 들어가 있는 Layout 컴포넌트에 모든 구성요소 컴포넌트들을 감싸는, (css를 통해 viewport와 동일한 크기로 설정된) LayoutWrapper라는 이름의 div를 만들고 그것에 `position: relative` 를 적용하여 Menu의 `position:absolute`가 LayoutWrapper를 기준으로 하도록 수정하였더니 원하는 대로 작동하였다.

## 게시글 목록 조회 시 댓글 개수 포함하여 응답하기

### 문제점

처음 서버 개발을 할 때는 아래 코드처럼 다소 대책 없이😅 게시글 목록 조회 라우터에서 해당 게시글의 댓글 목록까지 포함하여 응답하였다. 사실상 게시글 목록 페이지에서는 게시글에 댓글 몇 개가 달렸는지 개수만 표시해주면 되는 건데 말이다.

```jsx
router.get('/list', async (req, res) => {
  try {
    const postList = await Post.findAll({
      include: [
        {
          model: Member,
          as: 'post_writer',
          attributes: ['member_id', 'member_nickname'],
        },
        {
          model: Comment,
          as: 'comments',
          attributes: [
            'comment_idx',
            'comment_contents',
            'createdAt',
            'updatedAt',
          ],
        },
      ],
      offset: start ? Number(start) : null,
      limit: count ? Number(count) : null,
      group: ['post_idx'],
    })
    return res.status(StatusCodes.OK).json({
      data: postList,
    })
  } catch {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR)
  }
})
```

### 해결 방안

```tsx
router.get('/list', async (req, res) => {
  const { start, count } = req.query
  try {
    const postList = await Post.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Member,
          as: 'post_writer',
          attributes: ['member_id', 'member_nickname'],
        },
        {
          model: Comment,
          attributes: [
            [
              Sequelize.fn('COUNT', Sequelize.col('comment_idx')),
              'comments_count',
            ],
          ],
        },
      ],
      offset: start ? Number(start) : null,
      limit: count ? Number(count) : null,
      group: ['post_idx'],
    })
    return res.status(StatusCodes.OK).json({
      data: postList.map((post) => {
        return {
          ...post.dataValues,
          // 댓글 안달린 글일 때는 post.dataValues.comments[0] 자체가 없을 수도 있으므로
          // 있을 때만 댓글 갯수 return, 없으면 0 return
          comments_count: post.dataValues.comments[0]
            ? post.dataValues.comments[0].dataValues.comments_count
            : 0,
          // comments 필드 굳이 필요 없으니 undefined 할당 -> response 객체 내에서 아예 사라짐
          comments: undefined,
        }
      }),
    })
  } catch {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR)
  }
})
```

우선 상기 코드처럼 수정하였는데, 사실 이때 나는 `Sequelize.fn("COUNT", Sequelize.col("comment_idx")), "comments_count"` 부분의 코드를 통해 댓글의 개수를 포함해서 응답해줄 수 있을 거라 생각했었다. 그런데 원하는 대로 작동하지 않고, 자꾸 `comments_count` 프로퍼티가 포함되지 않은 채로 데이터가 전달되는 문제가 발생했다. 그래서 결국 return 부에서 map을 사용하여 데이터를 편집해서 다소 억지로 `comments_count` 를 포함해서 전달해줄 수밖에 없었다.

```jsx
router.get('/list', async (req, res) => {
  const { start, count } = req.query
  try {
    const postList = await Post.findAll({
      order: [['createdAt', 'DESC']],
      attributes: {
        include: [
          [
            Sequelize.fn('COUNT', Sequelize.col('comments.comment_idx')),
            'comments_count',
          ],
        ],
      },
      include: [
        {
          model: Member,
          as: 'post_writer',
          attributes: ['member_id', 'member_nickname'],
        },
        {
          model: Comment,
          attributes: [],
        },
      ],
      offset: start ? Number(start) : null,
      limit: count ? Number(count) : null,
      subQuery: false,
      group: ['post_idx'],
    })
    return res.status(StatusCodes.OK).json({
      data: postList,
    })
  } catch {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR)
  }
})
```

결과적으로 다음과 같이 최종 코드를 작성하였는데, Post의 attributes 프로퍼티에 `Sequelize.fn("COUNT", Sequelize.col("comment_idx")), "comments_count"` 코드를 넣으니 의도한 대로 `comments_count` 값을 포함하여 데이터를 전달해주었다. 이렇게 제대로 수정하니 더 이상 map을 사용한 복잡한 코드를 사용하지 않아도 됐다. 속이 후련해졌다😤.

# 프로젝트를 통해 느낀 점

하나의 프로젝트를 완성한 뒤 다른 프로젝트를 진행하는 것도 좋지만, 이전 프로젝트를 발전시키는 것 또한 실력을 늘리는 데에 큰 도움이 된다는 것을 체감했다. 그리고 이전에 미처 해내지 못했던 부분을 다시 도전해서 성공해냈다는 것에서 성취감도 느낄 수 있었다. 이전 프로젝트보다 디테일과 코드의 완성도를 높이기 위해 노력을 기울였기 때문에 보다 자신 있게 소개할 수 있는 소중한 자료가 만들어진 것 같다. 전체적으로 뿌듯했던 프로젝트였다😊.
