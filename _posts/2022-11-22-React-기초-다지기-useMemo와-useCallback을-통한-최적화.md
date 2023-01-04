---
layout: post
title: '[React 기초 다지기] useMemo와 useCallback을 통한 최적화'
description: ''
featured: false
author: admin
categories: [React]
tags: [리액트 기초]
image: 'https://user-images.githubusercontent.com/67324487/209516667-ea650ed1-69e0-4a6e-90bb-ee2d6cf8477a.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# useMemo와 useCallback을 통한 최적화

## useMemo와 useCallback의 역할

- useMemo
  - 함수의 반환값을 기억함
- useCallback
  - 함수 자체를 기억함

## useMemo를 사용하여 연산값 재사용하기

- 함수 컴포넌트는 리렌더링 시 함수 전체가 재실행되므로 컴포넌트 함수 내의 함수들도 계속 재실행됨
  - 재실행될 때마다 반환하는 값이 달라지는 함수는 useMemo를 통해 함수의 반환값을 기억하기
  - 아래의 경우, input에 내용을 입력할 때마다 컴포넌트가 리렌더링 되고, 그에 따라 sayHello()가 재실행되며 콘솔에 hello가 계속 출력됨
- useMemo를 사용하면 두번째 인자인 dependency array 내의 값이 바뀌지 않는 한 콜백 함수가 다시 실행되지 않음

```jsx
import React, { useState } from 'react'

function sayHello() {
  console.log('hello')
  return 'hello'
}

const Component = () => {
  const [input, setInput] = useState('')

  const onChangeInput = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const hello = sayHello()
  return (
    <>
      <div>{hello}</div>
      <input onChange={(e) => onChangeInput(e)} />
    </>
  )
}
```

![](https://velog.velcdn.com/images/carmine/post/ce685c5e-c304-46c2-bb20-15777a14933f/image.png)

```jsx
import React, { useState } from 'react'

function sayHello() {
  console.log('hello')
  return 'hello'
}

const Component = () => {
  const [input, setInput] = useState('')

  const onChangeInput = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const hello = useMemo(() => sayHello(), [])

  return (
    <>
      <div>{hello}</div>
      <input onChange={(e) => onChangeInput(e)} />
    </>
  )
}
```

- useMemo를 사용하여 컴포넌트 자체를 memoization 할 수도 있음

```jsx
return (
  <>
    <div>{hello}</div>
    {dataArr.map((data) => {
      useMemo(() => <Component data={data} />, [])
    })}
  </>
)
```

- useMemo를 사용하여 컴포넌트가 리랜더링될 때 return부는 한 번만 실행되도록 할 수 있음

```jsx
return useMemo(() => <div>// ...</div>)
```

## useCallback을 사용하여 함수 재사용하기

- 함수 컴포넌트가 재실행되면 컴포넌트 내의 함수가 새로 생성됨
  - 함수 생성 자체가 오래 걸린다면 useCallback을 사용하여 함수가 새로 생성되지 않게 할 수 있음
- useCallback 내에서 사용되는 state나 props는 꼭 dependency array에 넣어줘야 함
  - 이유: 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조할 것이라고 보장할 수 없으므로 state나 props가 바뀔 때마다 useCallback을 새로 실행해줘야 함
- 자식 컴포넌트에 props로 함수를 넘길 때에도 useCallback 사용하는 것을 권장
  - useCallback으로 감싸주지 않으면 부모 컴포넌트가 리렌더링될 때마다 해당 함수가 매번 새로 생성되며 자식 컴포넌트에 매번 새로운 함수가 전달됨 -> 함수 자체는 변한 것이 없는데 자식 컴포넌트의 불필요한 리렌더링을 발생시킴

```jsx
import React, { useState } from 'react'

function sayHello() {
  console.log('hello')
  return 'hello'
}

const Component = () => {
  const [input, setInput] = useState('')

  const onChangeInput = useCallback((e) => {
    const { value } = e.target
    setInput(value)
  }, [])

  const hello = useMemo(() => sayHello(), [])

  return (
    <>
      <div>{hello}</div>
      <input onChange={(e) => onChangeInput(e)} />
    </>
  )
}
```

[참고](https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)
