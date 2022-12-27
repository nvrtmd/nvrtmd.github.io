---
layout: post
title: '[Node.js 백엔드 기초] MySQL 기초 - 각종 연산자들'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511667-a4c7b6d6-71d7-4d4d-9fb1-192a807cd1a0.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 각종 연산자들

### 사칙연산

- 문자열에 사칙연산 시도 시 0으로 인식

```sql
SELECT 'ABC' + 3;
-- 결과: 3
```

- 숫자로 구성된 문자열은 숫자로 자동 인식됨

```sql
SELECT '1' + '002' * 3;
-- 결과: 7

SELECT
  OrderID + ProductID
FROM OrderDetails;
-- OrderDetails 테이블의 각 행에 대해 OrderID열의 값과 ProductID열의 값을 더하여 가져오기

SELECT
  ProductName,
  Price / 2 AS HalfPrice
FROM Products;
-- Products 테이블의 각 행에 대해 ProductName열과, Price열을 2로 나눈 값을 'HalfPrice'라는 별칭으로 가져오기
```

### 참/거짓 관련 연산자

- TRUE는 1, FALSE는 0으로 취급
- IS: 양쪽이 모두 TRUE 또는 FALSE
- IS NOT: 한쪽은 TRUE, 한쪽은 FALSE

```sql
SELECT (TRUE IS FALSE) IS NOT TRUE;
-- (TRUE IS FALSE)는 FALSE, (TRUE IS FALSE) IS NOT TRUE는 FALSE IS NOT TRUE이므로 1(=TRUE)
```

- AND, &&: 양쪽이 모두 TRUE일 때만 TRUE
- OR, ||: 한쪽은 TRUE면 TRUE

```sql
SELECT * FROM Products
WHERE
  ProductName = 'Tofu' OR CategoryId = 8;
-- Products 테이블의 ProductName이 'Tofu'이거나 CategoryId가 8인 모든 행을 가져오기
```

- 기본 사칙연산자는 대소문자 구분을 하지 않음

```sql
SELECT 'A' = 'a';
-- 결과: 1(=TRUE)
```

- 테이블의 컬럼이 아닌 값으로 선택

```sql
SELECT
  ProductName, Price,
  NOT Price > 20 AS CHEAP
FROM Products;
/*
  Products 테이블에서
  모든 행의 ProductName열과 Price열을 가져오고
  Price열의 값이 20보다 크지 않은 경우 1을, 큰 경우 0을 CHEAP이라는 이름의 열로 가져오기
*/
```

- BETWEEN {MIN} AND {MAX}: 두 값 사이에 있음
- NOT BETWEEN {MIN} AND {MAX}: 두 값 사이가 아닌 곳에 있음

```sql
SELECT 5 BETWEEN 1 AND 10;
-- 결과: 1
SELECT 'banana' NOT BETWEEN 'Apple' AND 'camera';
/*
  결과: 0
  b로 시작하는 banana는 알파벳 순서 상 a로 시작하는 단어와 c로 시작하는 단어 사이에 위치
*/
SELECT * FROM OrderDetails
WHERE ProductID BETWEEN 1 AND 4;
-- OrderDetails 테이블에서 ProductID열의 값이 1과 4 사이인 모든 행들 가져오기
```

- IN (...): 괄호 안의 값들 가운데 있음
- NOT IN (...): 괄호 안의 값들 가운데 없음

```sql
SELECT * FROM Customers
WHERE City IN ('Torino', 'Paris', 'Portland', 'Madrid')
-- Customers 테이블에서 City열의 값이 'Torino', 'Paris', 'Portland', 'Madrid' 값들 중 하나인 모든 행 가져오기
```

- LIKE '... % ...': 0~N개 문자를 가진 패턴
- LIKE '... _ ...': _ 갯수만큼의 문자를 가진 패턴

```sql
SELECT
'HELLO' LIKE 'hel%', -- 1
'HELLO' LIKE 'H%', -- 1
'HELLO' LIKE 'H%O', -- 1
'HELLO' LIKE '%O', -- 1
'HELLO' LIKE '%HELLO%', -- 1
'HELLO' LIKE '%H', -- 0: '%H'는 H로 끝나는 단어
'HELLO' LIKE 'L%' -- 0: 'L%'는 L로 시작하는 단어

SELECT
'HELLO' LIKE 'HEL__', -- 1
'HELLO' LIKE 'h___O', -- 1
'HELLO' LIKE 'HE_LO', -- 1
'HELLO' LIKE '_____', -- 1
'HELLO' LIKE '_HELLO', -- 0: HELLO 앞에 한 글자 존재해야 함
'HELLO' LIKE 'HEL_', -- 0: HEL 뒤에 한 글자만 존재해야 함
'HELLO' LIKE 'H_O' -- 0: H와 O 사이에 한 글자만 존재해야 함

SELECT * FROM OrderDetails
WHERE OrderID LIKE '1025_'
-- OrderDetails 테이블에서 OrderID열의 값이 1025 뒤에 한 글자만 존재하는 모든 행 가져오기
```

[출처](https://www.yalco.kr/lectures/sql/)
