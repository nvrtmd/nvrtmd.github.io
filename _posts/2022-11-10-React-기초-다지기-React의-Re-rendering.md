---
layout: post
title: '[React 기초 다지기] React의 Re-rendering'
description: ''
featured: false
author: admin
categories: [React]
tags: [리액트 기초]
image: 'https://user-images.githubusercontent.com/67324487/209516661-3ee7cace-455c-4fed-96f2-518921f94e0a.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# React의 Re-rendering

## Re-rendering의 발생 조건

- State가 바뀌었을 때
- Props가 바뀌었을 때
- 부모 컴포넌트가 리렌더링 되었을 때

## Class Component와 Function Component의 Re-render 방식

### Class Component

- 클래스 컴포넌트의 경우, state가 변화할 때 render() 함수 내의 내용만 재실행됨
  - 따라서, render() 함수 내에서 이벤트 실행 시 발생할 함수의 내용을 구구절절 다 적지 말고, 실행할 함수를 위에서 선언한 뒤, 그 함수명만 넣어주는 방식을 권장
    - 이유: 재랜더링 발생할 때마다 함수가 새로 생성되지 않게 하기 위함

```jsx
render() {
	return {
		<div onClick={() => {console.log('hello'); console.log('hi');}}>어쩌구저쩌구</div>
	}
} // (X)

render() {
	return {
		<div onClick={this.sayHello}>어쩌구저쩌구</div>
	}
} // (O)
```

#### render() 함수의 주의 사항

- render() 내에 setState() 사용 시 render()가 setState()를 실행시키고, setState()가 또 render()를 실행시키는 무한 반복 발생하므로 절대 금지
  - setState()가 실행되면 state가 바뀌고, state가 바뀌면 컴포넌트가 리렌더링되므로 render() 함수가 실행됨 -> 무한 반복

### Function Component

- 함수 컴포넌트의 경우, state가 변화할 때 함수 컴포넌트 전체가 재실행됨
  - 즉, 아래의 모든 내용이 재실행되는 것

![](https://velog.velcdn.com/images/carmine/post/d4a6ca34-2431-4b20-a431-f2c48fa2ef3f/image.png)

![](https://velog.velcdn.com/images/carmine/post/131af419-bab5-4ce5-b491-0d7ea71e9670/image.png)

- 해당 부분에서 setState()가 네 번 발생하므로 총 네 번 리렌더링이 일어나는가? NO!
  - state가 변할 때는 비동기적으로 한 번에 처리되기 때문에 랜더링은 한 번만 발생
  - 만약, setState가 동기적으로 처리되었다면 총 네 번 리렌더링 되었을 것

#### Lazy Init

- 함수 컴포넌트에서 useState hook을 사용할 때 기본값으로 함수를 넣을 수 있음
  - 원래 컴포넌트가 랜더링될 때 마다 컴포넌트 내 코드가 전부 재실행되는데, 이렇게 함수를 useState의 초기값으로 넣으면 해당 함수는 딱 한 번만 실행되고 재실행되지 않음
  - 해당 함수를 처음 호출했을 때의 return값이 state의 초기값으로 설정됨

```jsx
const [number, setNumber] = useState(getNumber) // lazy init
```

[참고](https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)
