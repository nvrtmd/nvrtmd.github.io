---
layout: post
title: '[React 기초 다지기] ContextAPI'
description: ''
featured: false
author: admin
categories: [React]
tags: [리액트 기초]
image: 'https://user-images.githubusercontent.com/67324487/209516669-f9d72284-cb26-4c98-a3bc-d507bbea2952.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# ContextAPI

## action, dispatch, reducer의 관계

### action

- action의 type은 액션의 이름, 나머지는 데이터들

```jsx
// number라는 상태를 0으로 변경하는 액션 객체이며 액션의 이름은 'SET_NUMBER'
{type: 'SET_NUMBER', number: 0}
```

### dispatch

- 액션 객체 발행

  - dispatch를 통해 액션을 실행하는 것

```jsx
const onClickButton = useCallback(() => {
  dispatch({ type: 'SET_NUMBER', number: 0 })
}, [])

return (
  <>
    <div onClick={onClickButton}></div>
  </>
)
```

### reducer

- 디스패치한 액션을 해석하여 state를 직접 변경해주는 함수
  - 디스패치 할 때마다 reducer 실행됨
  - state를 수정하기 위해서는 이벤트가 실행될 때 액션을 실행(디스패치)해서 state를 바꿔야 하며, state를 어떻게 바꿀 것인지는 reducer에 기록
- 불변성 지키기

  - 기존 state를 직접 바꾸면 안되고, 새로운 state를 만들어서 바뀔 부분만 바꿔준 뒤, 그 새로운 state로 기존 state를 대체해야 함

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUMBER':
      // state.number = action.number (x)
      return {
        ...state,
        number: action.number,
      }
  }
}
```

## ContextAPI 사용하기

### 사용법

- ContextAPI에서 접근 가능한 데이터들에 접근하고자 하는 컴포넌트들을 Provider로 묶어주기
  - Provider의 value로 state와 dispatch 함수를 넣어주면 감싸진 컴포넌트들에서 사용 가능함
- 성능 최적화

  - 해당 Provider 코드가 있는 컴포넌트가 새로 리랜더링 될 떄마다 value 객체도 새로 생성됨 -> ContextAPI를 사용하는 컴포넌트들도 매번 새로 리랜더링 됨
  - 따라서 useMemo를 사용한 캐싱 필요

```jsx
const NumberContext = createContext({
  number: 0,
  dispatch: () => {},
})

const value = useMemo(() => ({ number: state.number, dispatch }), [
  state.number,
])
// dispatch 함수는 절대 바뀌지 않기 때문에 useMemo의 dependency array에 넣지 않음

return (
  <NumberContext.Provider value={value}>
    <Table />
    <Form />
  </NumberContext.Provider>
)
```

- dispatch 함수를 하위 컴포넌트에서 사용하기

  - 우선 해당 함수를 초기값으로 갑고 있는 context를 export
  - 사용하고 싶은 하위 컴포넌트 파일 내에서 import -> useContext를 사용하여 변수에 할당하기

```jsx
// app.js
export const NumberContext = createContext({
  number: 0,
  dispatch: () => {},
})

// Form.js
import { NumberContext } from './app'

const Form = () => {
  const number = useState(10)
  const value = useContext(NumberContext)

  // ...
  const onClickButton = useCallback(() => {
    dispatch({ type: SET_NUMBER, number })
  }, [number])
}
```

[참고](https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)
