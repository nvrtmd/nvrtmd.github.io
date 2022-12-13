---
layout: post
title:  "styled-components의 나만 몰랐던 소소한 Tip"
description: "이런 구조의 코드가 있을 때, 나는 container라는 class의 div에 특정 CSS를 적용하려면 무조건 div도 컴포넌트화 하여서 이런 식으로 코드를 짜야 하는 줄 알았다. 아니었다."
featured: false
author: admin
categories: [ Project ]
tags: [원티드 프리온보딩 코스]
image: "https://user-images.githubusercontent.com/67324487/207390203-c770d0e9-9cc6-40cb-bccf-14f32c92497d.png"
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# What I Learned Is...👩🏻‍💻
## styled-components의 나만 몰랐던 소소한 Tip (1)
```jsx
const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

<Root>
	<div className="container">Container</div>
</Root>
```
이런 구조의 코드가 있을 때, 나는 container라는 class의 div에 특정 CSS를 적용하려면 무조건 div도 컴포넌트화 하여서 

```jsx
const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const Container = styled.div`
  font-size: 20px;
  color: red;
`;

<Root>
	<Container>Container</Container>
</Root>

```
이런 식으로 코드를 짜야 하는 줄 알았다. 아니었다.

```jsx
const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  
  .container {
    font-size: 20px;
    color: red;
  }
`;

<Root>
	<div className="container">Container</div>
</Root>
```
이렇게 일반 CSS를 특정 class에 적용하듯이 하면 되는 거였다.

궁금해서 실험해 본 결과, Root 내부에 있는 element들은 Root의 CSS 정의부 내에 CSS를 정의해줘야 했다. 
```jsx
const Root = styled.div`
  font-family: 'pretty-font';
  
  .container {
    font-size: 20px;
    color: red;
  }
`;

<Root>
	<div>Not Container</div>
</Root>
	<div className="container">Container</div>
```

이렇게 Root 바깥의 element가 Root의 CSS 속성을 상속(?) 받듯이, Root의 CSS 속성 + a의 CSS를 적용한 container div를 만들어보고 싶었지만, container div가 Root의 바깥에 존재해서인지 원하는 대로 작동하지 않고 CSS가 적용되지 않았다.

## styled-components의 나만 몰랐던 소소한 Tip (2)
나는 지금까지 styled-components의 CSS 정의부 코드들을 따로 분리하지 않고 사용했었으며, 그러다 보니 파일 하나의 코드가 밑도 끝도 없이 길어졌었다. 그런데 생각보다 쉽게 파일들을 분리해서 사용할 수 있었다. 
만약, A.js가 있으면, 그 안에 존재하는 모든 styled-components의 CSS 정의부는 A.styles.js라는 또 다른 파일에 정의해두고, A.js 상단에 
```jsx
import { Container, Box } from './A.styles';
```
다음과 같은 방법으로 import해와서 쓰면 되는 거였다.

정말 나만 모르고 있었던 사용법인 것 같지만, 그래도 이번 기회에 배웠으니 앞으로 이런 방식으로 더 효율적으로 코딩할 수 있을 것 같다. 지금이라도 알았으니 된 거지, 뭐! 😎