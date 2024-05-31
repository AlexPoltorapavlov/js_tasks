/* Входные данные:
Облигация(объект) {
номинал: “число”
размер купона: “число”
частота выплаты купона в год: “число”
погашение облигации через: “число” (указывать количество месяцев)
}
Задача:
Написать функцию, которая посчитает доходность облигации к погашению по текущей рыночной цене и вернёт результат в %. (округлить до сотых ответ)
Пример:
Облигация {
номинал: 1000
размер купона: 50
частота выплаты купона в год: 2
погашение облигации через: 12
}
При рыночной цене облигации в 900 - доходность к погашению такой облигации = 22.22%
*/

let bond = {
  nominal: 1000,
  coupon: 50,
  frequencyOfPayments: 2,
  repayment: 12
}

/* 
YTM = ((номинал - полная цена покупки + все купоны за период) * 12) / (полная цена покупки * время до погашения)

YTM = ((nominal - price + (coupon * frequencyOfPayments * repayment/12))*12) / (price * repayment) 
*/

function allCouponsPerPerionCounting(coupon, frequencyOfPayments, repayment) {
  return coupon * frequencyOfPayments * repayment / 12;
}

function ytm (bond, price) {
  let allCouponsPerPerion = allCouponsPerPerionCounting(bond["coupon"], bond["frequencyOfPayments"], bond["repayment"]);

  return (((bond["nominal"] - price + allCouponsPerPerion)*12) / (price * bond["repayment"])).toFixed(2) + "%";
}

console.log(ytm(bond, 900))