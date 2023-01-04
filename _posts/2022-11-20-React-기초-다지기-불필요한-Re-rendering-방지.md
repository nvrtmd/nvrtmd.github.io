---
layout: post
title: '[React 기초 다지기] 불필요한 Re-rendering 방지'
description: ''
featured: false
author: admin
categories: [React]
tags: [리액트 기초]
image: 'https://user-images.githubusercontent.com/67324487/209516666-2d021ef4-941d-41f3-a45f-6165b4c23edc.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 불필요한 Re-rendering 방지

## Class Component의 Pure Component

- PureComponent
  - shouldComponentUpdate가 장착된 컴포넌트
    - props나 state가 바뀌었는지 판단하여 달라졌을 때만 자식 컴포넌트가 리렌더링되도록 함
  - 클래스 컴포넌트에서만 사용 가능

```jsx
/*
- input에 뭔가를 입력하여 value state가 달라짐 -> 리렌더링 발생
- 그러나 자식 컴포넌트인 ChildComponent의 props는 달라지지 않았음에도 불필요하게 함께 리렌더링됨 -> ChildComponent가 pureComponent로 구현되었을 경우 다음과 같은 경우에 ChildComponent의 불필요한 리렌더링 일어나지 않음
*/
return (
  <div>
    <input value={value} />
    <ChildComponent childProps={childProps} />
  </div>
)
```

## Function Component의 React.memo

- React.memo
  - 함수 컴포넌트에서는 React.memo가 PureComponent와 동일한 역할을 수행
  - React.memo가 적용된 컴포넌트는 개발자 도구에서 확인했을 때 컴포넌트의 이름이 변경되므로 displayName을 통해 이름을 명시해서 설정해줘야 함

```jsx
import React, { memo } from 'react';

const ChildComponent = memo(( {childProps} ) => {
	return (
		...
	)
})

ChildComponent.displayName = 'ChildComponent';
```

[참고](https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)
