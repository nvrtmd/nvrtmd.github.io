---
layout: post
title: '[Node.js 백엔드 기초] MySQL 기초 - SELECT 기능 훑어보기'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511665-d4ed1958-a1d8-498a-b2d8-6075796a3e07.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## SELECT 기능 훑어보기

### 테이블에서 모든 컬럼 가져오기

```sql
SELECT * FROM Customers;
```

### 원하는 열(컬럼)만 골라서 가져오기

```sql
SELECT CustomerName FROM Customers;
-- Customers 테이블에서 모든 행의 CustomerName 열만 가져오기

SELECT CustomerName, Address, City FROM Customers;
-- Customers 테이블에서 모든 행의 CustomerName, Address, City 열만 가져오기
```

### 원하는 조건의 행(로우)만 골라서 보기

```sql
SELECT * FROM Orders WHERE EmployeeID = 3;
-- Orders 테이블에서 EmployeeID열의 값이 3인 모든 행들 가져오기

SELECT * FROM OrderDetails WHERE Quantity < 5;
-- OrderDetails 테이블에서 Quantity열의 값이 5보다 작은 모든 행들 보기
```

### 원하는 순서로 데이터 가져오기: ORDER BY

```sql
SELECT * FROM Customers ORDER BY ContactName;
-- Customers 테이블의 모든 행을 ContactName 기준 오름차순 정렬하여 보기

SELECT * FROM OrderDetails ORDER BY ProductID ASC, Quantity DESC;
-- OrderDetails 테이블의 모든 행을 ProductID 기준 오름차순으로 정렬한 뒤 (ProductID가 같을 경우) Quantity를 기준으로 내림차순 정렬하여 보기
```

### 원하는 만큼만 데이터 가져오기: LIMIT

- LIMIT 가져올 개수 or LIMIT 건너뛸 개수, 가져올 개수

```sql
SELECT * FROM Customers LIMIT 10;
-- Customers 테이블의 10개 행을 가져오기

SELECT * FROM Customers LIMIT 30, 10;
-- Customers 테이블의 30번째 행부터 10개 행을 가져오기
```

### 원하는 별칭(alias)로 데이터 가져오기: AS

```sql
SELECT
  CustomerId AS ID,
  CustomerName AS NAME,
  Address AS ADDR
FROM Customers;
-- CustomerId의 별칭을 ID로 설정하여 가져오기

SELECT
  CustomerId AS '아이디',
  CustomerName AS '고객명',
  Address AS '주소'
FROM Customers;
-- CustomerId의 별칭을 ID로 설정하여 가져오기
```

## 모두 활용해보기

```sql
  SELECT
    CustomerID AS '아이디',
    CustomerName AS '고객명',
    City AS '도시',
    Country AS '국가'
  FROM Customers
  WHERE
    City = 'London' OR Country = 'Mexico'
  ORDER BY CustomerName
  LIMIT 0, 5;
  /*
    Customers 테이블에서
    CustomerID의 별칭을 '아이디'로 설정(이하 생략)하고
    City열의 값이 'London'이거나 Country열의 값이 'Mexico'인 행들만
    CustomerName를 기준으로 오름차순 정렬하여 가져오는데
    0번째 행부터 5개 행을 가져오기
  */
```

[출처](https://www.yalco.kr/lectures/sql/)
