---
layout: post
title: '[운영체제 기초 다지기] Introduction to Operating Systems'
description: '컴퓨터 하드웨어 윗단, 각종 소프트웨어 밑단에 설치되어 사용자 및 모든 소프트웨어, 하드웨어를 연결하는 소프트웨어 계층'
featured: false
author: admin
categories: [os]
tags: [운영체제 기초]
image: 'https://user-images.githubusercontent.com/67324487/224537426-4ae50fb4-3b70-4641-b3ca-c7d4e303dcea.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 운영체제 개요

## 운영체제의 정의

![image](https://user-images.githubusercontent.com/67324487/224536794-d495473c-23a9-4031-8c14-7a016a29ef51.png)

- 정의: 컴퓨터 하드웨어 윗단, 각종 소프트웨어 밑단에 설치되어 사용자 및 모든 소프트웨어, 하드웨어를 연결하는 소프트웨어 계층
    - 광의의 운영체제: 메모리에 상주하지 않는 별도의 프로그램들
    - 협의의 운영체제: 커널(부팅이 일어난 이후 메모리에 항상 상주하는 부분)
        - 운영체제 또한 소프트웨어로서 컴퓨터의 전원이 켜짐과 동시에 메모리에 올라감 → 운영체제 전부가 메모리에 올라가면 공간 낭비 → 운영체제 중 항상 필요한 부분만 메모리에 상주시키고 그렇지 않은 부분은 필요할 때만 메모리에 올려서 사용
        - 커널: 메모리에 항상 상주하는 운영체제의 부분 = 운영체제의 핵심적인 부분

## 운영체제의 목적

![image](https://user-images.githubusercontent.com/67324487/224536800-cb65b228-7a78-4a69-b9c2-3401dbcacdb0.png)

![image](https://user-images.githubusercontent.com/67324487/224536801-13d1c8a9-bd60-43ee-ac52-f40dc113dfce.png)

- 컴퓨터 시스템의 자원을 효율적으로 관리하며, 편리하게 사용할 수 있는 환경을 제공하는 것
    - 자원(리소스)
        - 하드웨어 자원: 프로세서, 기억장치, 입출력 장치 등
        - 소프트웨어 자원: 프로세스, 파일, 메시지 등
- 효율성: CPU나 메모리와 같은 한정된 자원으로 최대한의 성능을 내도록
- 형평성: 특정 프로그램 또는 사용자가 차별받지 않도록
    - 각 프로그램들이 메모리를 적절히 차지할 수 있도록 조율
- 편의성: 여러 프로그램이 한 대의 컴퓨터에서 동시 실행되지만 사용자는 자신이 사용하고 있는 하나의 프로그램만 CPU를 점유하여 사용하고 있는 것처럼 느끼도록

[출처](http://www.kocw.net/home/search/kemView.do?kemId=1046323&ar=pop)