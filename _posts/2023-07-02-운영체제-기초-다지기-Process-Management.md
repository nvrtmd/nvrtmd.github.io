---
layout: post
title: '[운영체제 기초 다지기] Process Management'
description: '프로세스를 생성하는 주체: 부모 프로세스'
featured: false
author: admin
categories: [os]
tags: [운영체제 기초]
image: 'https://github.com/nvrtmd/nvrtmd/assets/67324487/14a07235-3121-4fd0-9c4c-780eeba4022a'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 프로세스의 생성과 종료

## 프로세스 생성 (Process Creation)

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/fd4dcc8d-5a4c-4165-aafa-c575aa3cd2b5)

- 프로세스를 생성하는 주체: 부모 프로세스
  - 부모 프로세스가 운영체제에 시스템 콜 해서 자식 프로세스 생성을 요청
  - 부모 프로세스가 자신과 똑같은 자식 프로세스를 복제해냄: 모든 맥락(주소 공간(메모리)의 코드, 데이터, 스택과 CPU 문맥을 나타내는 PC를 그대로 copy)
  - 자식 프로세스는 부모 프로세스를 그대로 카피하기 때문에 메모리 낭비 발생 → 리눅스와 같은 운영체제에서는 자식 프로세스가 부모 프로세스의 주소 공간을 공유하고 PC만 카피해서 동일한 위치를 가리키도록 함
    - 만약 부모 프로세스와 자식 프로세스가 달라지면 공유하던 부모 프로세스의 주소 공간 일부를 카피해서 자식 프로세스가 갖게 됨(=Copy-On-Write 기법)
      - Write가 발생하여 내용이 바뀔 때 카피, 그 전에는 부모 프로세스의 것을 그대로 공유
- 프로세스 트리(계층 구조)를 형성
  - 부모 프로세스 한 개가 여러 개의 자식 프로세스를 생성할 수 있으므로
- 프로세스를 실행하기 위해서는 CPU, 메모리와 같은 자원이 필요함
  - 자원을 운영체제로부터 받거나, 부모와 공유함
  - 일반적으로 부모 프로세스와 자식 프로세스는 경쟁 관계이므로 공유하지 않음

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/c1b7e67e-f850-4e93-a943-be5a1cbe241a)

- 프로세스는 부모 프로세스가 자식 프로세스를 복제 생성함
  - 부모 프로세스의 주소 공간을 자식 프로세스가 복사 → 운영체제에 있는 자원도(PCB 등) 복사 → 복제된 곳에 새로운 프로그램을 덮어 씌움
- Fork: 부모 프로세스를 복제함 / Exec: 새로운 프로그램을 덮어 씌움
  - 자식 프로세스를 만들지 않고 exec()을 통해 새로운 프로그램을 자기 자신에게 덮어 씌울 수도 있음
  - Fork와 Exec은 시스템 콜이기 때문에 결과적으로 운영체제에게 자식 프로세스를 생성해달라고 부탁하여 운영체제가 대신 생성해주는 것

## 프로세스 종료 (Process Termination)

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/8c8751ba-6db9-448d-bfa8-bb757ab4204d)

- 자발적 종료: Exit 시스템 콜이 프로세스를 종료함 → 프로세스 종료 시 자식 프로세스가 부모 프로세스에 output 데이터를 전송함
  - 무조건 자식 프로세스가 부모 프로세스보다 먼저 종료되어야 함
- 강제 종료(Abort)
  - 자식 프로세스가 너무 많은 자원을 사용하는 경우
  - 자식 프로세스에 지시할 작업이 없는 경우
  - 부모 프로세스가 종료되는 경우
    - 부모 프로세스 종료 시 해당 프로세스의 자식 프로세스들이 계층 구조 최하단부터 단계적으로 종료됨

# 프로세스와 관련한 시스템 콜

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/abed0154-304f-4f60-b496-69e950f6a7b8)

## Fork() 시스템 콜

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/2d9333ea-20c7-474b-b831-360a75096396)

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/879c8b08-eddd-43c9-a279-bb533607f002)

- fork() 함수 호출
  - 운영체제에 요청하는 시스템 콜
  - 자식 프로세스는 부모 프로세스의 문맥을 가져가므로 자식 프로세스는 fork() 함수 이후부터 코드를 실행함
    - 부모 프로세스의 PC가 `pid = fork()` 를 가리킨 후(= 해당 instruction이 CPU에 의해 실행된 후)에 자식 프로세스가 만들어지므로
  - 자식 프로세스를 복제 후, 자식 프로세스와 부모 프로세스의 구분 필요 → fork() 함수의 return값이 양수일 경우 부모 프로세스이며 0일 경우 자식 프로세스
    - fork()의 return값이 다르므로 부모 프로세스와 자식 프로세스를 구분할 수 있음

## Exec() 시스템 콜

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/8ab4c81f-7e56-4250-b4b9-949fe24cf296)

- exec() 함수 호출
  - 어떤 프로그램을 완전히 새로운 프로세스로 실행되게 함
  - fork()를 통해 자식 프로세스를 생성하고, 자식 프로세스는 execlp() 함수를 통해 exec() 시스템 콜 하게 됨 → 이전 맥락을 완전히 잃고, date를 출력하는 date 프로그램으로 새롭게 태어나게 됨
  - 한번 exec() 하게 되면 되돌아갈 수 없음

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/7b3b6913-9923-4ff6-afc3-0a2a2d47d4e5)

- 이와 같이 꼭 자식 프로세스를 만든 후 exec()을 할 수 있는 것은 아님
  - 대신 execlp() 이후의 printf는 실행 불가 → 프로세스가 완전히 새롭게 태어나기 때문

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/86db7113-6b6a-4e6c-b5c5-1420e9305f41)

- 위 프로세스는 1을 출력한 뒤, `echo`라는 새로운 프로그램으로서 3을 출력하고 종료됨
  - 2는 출력되지 않음

## Wait() 시스템 콜

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/76f65380-4c47-4c86-a8d3-e72c0ff0dd11)

- wait() 함수 호출
  - 자식 프로세스가 종료될 때까지 프로세스를 잠들게 함 == Blocked 상태로 만듦
    - 자식 프로세스 종료 시 Blocked 되어 있던 부모 프로세스를 깨워 Ready 상태로 만듦
  - 상기 이미지의 부모 프로세스는 자식 프로세스를 만든 뒤 wait() 시스템 콜을 하게 되므로 자식 프로세스가 종료되는 것을 기다리며 Blocked 상태가 되는 것
    - fork()한 이후, fork()의 return값이 0이 아니라면(= 부모 프로세스라면) wait() → 부모 프로세스가 CPU 제어권을 얻지 못하며(Blocked), 자식 프로세스가 자신의 코드를 다 실행한 후 종료되면 Blocked 상태에서 벗어남
  - 부모 프로세스와 자식 프로세스가 병렬적으로 실행되기도 하지만, 상기 경우처럼 부모 프로세스가 자식 프로세스를 기다리는 경우도 존재함

## Exit() 시스템 콜

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/f3498dd2-247d-4a03-bcec-2eeb260e28b0)

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/dd6b1fe9-5bc1-47d1-8498-13c138e744ac)

- exit() 함수 호출
  - 프로세스의 자발적 종료
    - 마지막 statement 수행 후 exit() 시스템 콜을 통해 종료됨
    - 명시적으로 exit() 함수가 존재하지 않아도 컴파일러에 의해 main 함수가 return되는 위치에 삽입됨

# 프로세스 간 협력

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/75bee302-3965-4c59-a3db-cc55f210ce91)

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/5fb7cb6e-8181-4182-ad67-39ff0d1f5220)

- 독립적 프로세스: 원칙적으로 프로세스는 독립적이며, 서로 데이터를 주고받으며 실행되지 않음
- 협력 프로세스: IPC를 통해 협력이 가능한 경우 존재함
- 프로세스 간 협력 매커니즘(Interprocess Communication)
  - 메세지를 전달하는 방식
    - message passing: 커널을 통해 프로세스 간 메세지를 주고 받음
  - 주소 공간을 공유하는 방식
    - shared memory: 두 프로세스가 일부 주소 공간을 공유하는 방법
      - 커널에 shared memory 매커니즘을 사용할 것이라는 시스템 콜을 해야 함
      - 두 프로세스가 서로 신뢰할 수 있는 관계여야 함
    - cf. 스레드들은 서로 주소 공간을 공유하기 때문에 완전한 협력이 가능함

![Untitled](https://github.com/nvrtmd/nvrtmd/assets/67324487/9b3d5f4f-80da-4efa-916f-4df5a31ecf25)

- message passing - Mailbox 또한 커널에 존재함 - 통신 방식에 따른 분류: 두 방식 모두 커널을 통해 메세지를 주고받음 - 직접적인 통신: 통신하려는 프로세스의 이름을 명시적으로 표시 - 간접적인 통신: 커널에 존재하는 메일 박스, 또는 port를 통해 메세지를 간접적으로 전달
  [출처](http://www.kocw.net/home/search/kemView.do?kemId=1046323&ar=pop)
