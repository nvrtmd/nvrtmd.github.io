---
layout: post
title: '[Node.js 백엔드 기초] JavaScript 기초 - 템플릿 문자열'
description: ''
featured: false
author: admin
categories: [nodejs]
tags: [백엔드 기초]
image: 'https://user-images.githubusercontent.com/67324487/209511660-f4962e7b-1122-4ffc-bb8c-09d1ef84da60.png'
# beforetoc: ""
toc: true
# rating: 3
hidden: false
---

# 정리📑

## 템플릿 문자열

### Code 💻

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Basic</title>
  </head>

  <body>
    <h1 id="title">JavaScript Basic6 - 템플릿 문자열</h1>

    제품 가격:
    <input type="text" id="productPrice" value="10000" />
    <br />
    배송비:
    <input type="text" id="deliveryFee" value="3000" />
    <br />
    카드 수수료:
    <input type="text" id="cardFee" value="500" />
    <br />
    총 결제 금액:
    <input type="text" id="totalPayment" />
    <br />

    <hr />

    <div id="payHistory"></div>

    <script>
      /*
            문자열과 변수의 조합
                - Case1: 전통적인 문자열과 변수를 조합할 시 '+' 사용
                - Case2: ECMA 템플릿 문자열 코딩 방식으로 문자열 변수 조합
        */
      var productPrice = document.getElementById('productPrice').value
      var deliveryFee = document.getElementById('deliveryFee').value
      var cardFee = document.getElementById('cardFee').value
      var totalPayment =
        Number(productPrice) + Number(deliveryFee) + Number(cardFee)

      document.getElementById('totalPayment').value = totalPayment

      var payHistory1 =
        '제품의 가격은 ' +
        productPrice +
        '원이고, 배송비는 ' +
        deliveryFee +
        '원이며, 카드 수수료는 ' +
        cardFee +
        '원입니다. 총 결제 금액은 ' +
        totalPayment +
        '원입니다.'
      console.log(payHistory1)

      var payHistory2 = `제품의 가격은 ${productPrice}원이고, 배송비는 ${deliveryFee}원이며, 카드 수수료는 ${cardFee}원이어서 총 결제 금액은 ${totalPayment}원입니다.`
      console.log(payHistory2)

      // div 태그에 결제 내역 출력
      document.getElementById('payHistory').innerText = payHistory2
    </script>
  </body>
</html>
```

### 결과 🚩

![](https://velog.velcdn.com/images/carmine/post/4dcc84e7-cc1c-4c03-b48e-2f9ebc521fe0/image.png)
