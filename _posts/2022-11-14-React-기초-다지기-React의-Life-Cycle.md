---
layout: post
title: '[React 기초 다지기] React의 Life Cycle'
description: ''
featured: false
author: admin
categories: [React]
tags: [리액트 기초]
image: 'https://user-images.githubusercontent.com/67324487/209516663-c4b30c64-cfe4-4118-b943-2ee945bf6842.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# React의 Life Cycle

## 개요

- 리액트의 라이프 사이클

  - 컴포넌트의 수명 주기
  - 컴포넌트의 수명: 페이지에서 렌더링되기 전 준비 과정부터 페이지에서 사라질 때까지

    - 컴포넌트가 생성될 때(mounting), 업데이트될 때(updating), 제거될 때(unmounting)

      - mount: DOM이 생성되어 웹 브라우저 상에 나타나는 것
      - unmount: DOM에서 제거되는 것

![](https://velog.velcdn.com/images/carmine/post/a00de115-71da-4892-b2b5-e6e418eac121/image.png)

## 라이프 사이클 메소드

### constructor

- 생성자
  - 컴포넌트를 만들 때 처음으로 실행되며, 클래스 컴포넌트에서 초기 state를 설정할 때 사용됨
    - 함수 컴포넌트에서는 useState hook을 사용하여 초기 state 설정

### shouldComponentUpdate

- props나 state가 변경되었을 때의 리렌더링 여부를 결정하는 메소드이며, 반드시 true나 false를 반환
  - true일 경우 렌더링 발생 / false일 경우 렌더링 발생 X
- 성능 최적화를 위한 메소드
- 필요한 이유
  - 부모 컴포넌트에서 state를 변경하였지만, 그 영향을 받지 않아도 되는 자식 컴포넌트에서도 불필요한 리렌더링이 발생하는 것을 방지
  - state가 바뀌었는지 여부와 상관없이 setState()가 호출되기만 해도 리렌더링이 일어나므로, 리액트가 제공해주는 shouldComponentUpdate 메소드를 사용하여 어떨 때에 리렌더링이 발생할 지 직접 명시해서 필요한 경우에만 리렌더링 되도록 함

```jsx
onClick = () => {
	this.setState({}); // 리렌더링 발생
}

shouldComponentUpdate(nextProps, nextState, nextContext) {
	if (this.state.number !== nextState.number) {
		return true; // 기존 state와 바뀐 state가 다르면 state가 바뀌었으므로 true를 return
	}
	return false; // 같으면 false를 return
}
```

### render

- 컴포넌트를 렌더링하는 메소드
- 함수 컴포넌트에서는 render 메소드 없이 렌더링 가능

### componentDidMount

- render()가 처음 실행되고 컴포넌트가 성공적으로 렌더되었을 때만 실행됨
  - 리렌더링 시 실행되지 않음
  - componentDidMount를 사용하여 비동기 요청 많이 일어남
- 함수 컴포넌트에서는 useEffect hook을 활용

### componentDidUpdate

- 리렌더링 완료 후 실행됨

### componentWillUnmount

- 컴포넌트가 DOM에서 제거되기 직전에 실행
  - 부모에 의해 자식 컴포넌트가 제거될 때 실행됨
  - componentDidMount, componentDidUpdate에서 등록된 이벤트, 비동기 요청 등의 정리가 일어남
    - 예를 들어, setInterval을 componentDidMount에 등록해서 처음 성공적으로 렌더링된 이후부터 반복 작업을 실행했다면 그 반복 작업은 컴포넌트가 사라졌더라도 웹 브라우저를 종료하기 전까지 계속 실행됨 = 메모리 누수 발생
    - 따라서 해당 작업을 componentWillUnmout를 통해 컴포넌트가 DOM에서 제거되기 직전에 정리해야 함

## Class Component의 라이프 사이클

### Component Mount

- constructor에 의해 state나 메소드들이 초기화 및 등록됨 -> 첫 render() 메소드 실행 -> ref를 사용할 시 ref를 설정해주는 부분이 실행됨 -> componentDidMount 메소드 실행

### State or Props 변경

- shouldComponentUpdate가 true를 반환 = 리렌더링 필요 -> render() 메소드 실행(리렌더링 발생) -> componentDidUpdate 메소드 실행

### 부모에 의해 제거됨

- 부모에 의해 컴포넌트가 제거되기 전 componentWillUnmount 메소드 실행 -> 컴포넌트 소멸(화면에서 사라짐)

## Function Component의 라이프 사이클

- 클래스 컴포넌트와의 차이점
  - 클래스 컴포넌트의 경우 componentDidMount나 componentDidUpdate에서 모든 state를 조건문으로 분기 처리함
  - 함수 컴포넌트에는 라이프 사이클이 없지만 useEffect hook을 사용하여 유사하게 구현 가능
    - useEffect 내의 콜백 함수에서 컴포넌트가 성공적으로 렌더링되었을 때와 리렌더링이 완료되었을 때 실행될 내용을 구현
    - 콜백 함수가 return하는 clean up 함수에서 컴포넌트가 DOM에서 제거되기 직전에 싱행될 내용을 구현

```jsx
useEffect(() => {
  // componentDidMount, componentDidUpdate의 역할을 수행
  return () => {
    // componentWillUnmount 역할을 수행하는 clean up 함수
  }
}, [])
```

- useEffect에서 componentDidMount 말고 componentDidUpdate만 실행하고 싶을 때 방법

```jsx
const mounted = useRef(false);
useEffect(() => {
	if (!mounted.current) {
		mounted.current = true; // do nothing (componentDidMount)
	} else {
		// do something (componentDidUpdate)
	}
}, [바뀌는 값])
```

[참고](https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)
