---
layout: post
title: '[Node.js 백엔드 기초] MySQL 기초 - 조건에 따라 그룹으로 묶기'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511673-6babd0af-a835-4dfd-8075-2976bf9f8cf5.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 조건에 따라 그룹으로 묶기

### GROUP BY

- 조건에 따라 집계된 값을 가져옴

  - Ex. Price열의 값 별로 몇 개의 행이 있는지 개수를 가져오기(= Price열의 값이 10,000인 행은 4개, 12,000인 행은 6개...), OrderDate열의 값 별로 몇 개의 행이 있는지 개수를 가져오기(= 1996-01-01인 행은 5개...)

  ```sql
  SELECT CategoryID FROM Products
  GROUP BY CategoryID;
  -- Products 테이블의 CategoryID 열을 CategoryID 기준으로 같은 CategoryId열의 값을 가진 행들끼리 그룹화하여 가져오기 = 모든 CategoryID를 중복 없이 가져오기

  SELECT
  CONCAT_WS(', ', City, Country) AS Location,
  COUNT(CustomerID)
  FROM Customers
  GROUP BY Country, City;
  /*
    Customers 테이블의 Location 열(City열의 값과 Country열의 값을 ,로 연결한 값들이 들어간 열)과 CustomerID의 개수가 담긴 열을 가져오는데, Country열과 City열 별로 가져오기
      - Country열의 값이 Buenos Aires이며 City열의 값이 Argentina인 행의 경우 Location열의 값은 Buenos Aires, Argentina, COUNT(CustomerID)열의 값은 3
        - Country열의 값이 Buenos Aires이며 City열의 값이 Argentina인 행의 개수는 테이블 내 총 3개가 존재
  */
  --
  ```

### HAVING

- 그룹화된 데이터 걸러내기
  - WHERE은 그룹하기 전 데이터, HAVING은 그룹 후 집계에 사용

```sql
  SELECT
    COUNT(*) AS Count, OrderDate
  FROM Orders
  WHERE OrderDate > DATE('1996-12-31')
  GROUP BY OrderDate
  HAVING Count > 2;
  /*
    Orders 테이블의 OrderDate열의 값이 1996-12-31 이후인 행들에 대해, OrderDate 열을 기준으로 그룹화하여 OrderDate열과 COUNT(*)열(OrderDate열의 값에 따른 행의 개수)을 가져오는데, 해당 행의 개수가 2개보다 많은 경우에만 가져오기
      - OrderDate열의 값이 1997-12-16인 행의 개수는 3개, 1998-04-01인 행의 개수는 4개이며 2개 이하인 행은 가져오지 않음
  */
```

```sql
SELECT
  COUNT(*) AS Count, OrderDate
FROM Orders
WHERE OrderDate > DATE('1996-12-31')
GROUP BY OrderDate
HAVING Count > 2;
/*
  Orders 테이블의 OrderDate열의 값이 1996-12-31 이후인 행들에 대해, OrderDate 열을 기준으로 그룹화하여 OrderDate열과 COUNT(*)열(OrderDate열의 값에 따른 행의 개수)을 가져오는데, 해당 행의 개수가 2개보다 많은 경우에만 가져오기
    - OrderDate열의 값이 1997-12-16인 행의 개수는 3개, 1998-04-01인 행의 개수는 4개이며 2개 이하인 행은 가져오지 않음
*/
```

### DISTINCT

- 중복된 값 제거

  - 집계함수가 사용되지 않으며, 정렬하지 않아 빠름

  ```sql
  SELECT DISTINCT Country, City
  FROM Customers
  ORDER BY Country, City;
  /*
    Customers 테이블의 Country열과 City 열을 가져오는데, 각 열의 값이 중복되지 않게 가져오기
      - Argentina-Buenos Aires, Austria-Graz, Austria-Salzburg...
  */

  SELECT
  Country,
  COUNT(DISTINCT CITY)
  FROM Customers
  GROUP BY Country;
  /*
    Customers 테이블의 Country열을 기준으로 그룹화하여 COUNTRY열과, 중복 없는 CITY열의 값만 선택하여 가져온 개수가 담긴 열을 가져오기
      - DISTINCT가 없을 경우 COUNT(DISTINCT CITY)열의 값은 Country 별 행의 개수와 동일
      - DISTINCT가 있으므로 CITY 별로 한 행만 선택하여 가져옴
  */
  ```

  [출처](https://www.yalco.kr/lectures/sql/)
