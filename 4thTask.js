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
Подходящая формула из интернета (Yeld to Maturity): 
YTM = [(C + (N - P) / t) / ((N + P) / 2)] * 100%
N = номинал облигации
C = сумма выплат по купонам за год (размер купона * частоту выплат в год)
P = текущая рыночная цена
t = срок до погашения облигации в годах
*/

function couponAnnualCounting (coupon, frequencyOfPayments) {
  return coupon * frequencyOfPayments;
}

// Среднегодовой доход по облигации (C + (N - P) / t))
function averengeAnnualYeldCounting(couponAnnual, nominal, price, time) {
  return (couponAnnual + (nominal - price)) / time;
}

// Средняя стоимость облигации
function averengeValueOfBondCounting(nominal, price) {
  return ((nominal + price) / 2);
}

// C
function ytm(bond, price) {
  let time = bond["repayment"] / 12;
  let couponAnnual = couponAnnualCounting(bond["coupon"], bond["frequencyOfPayments"]);
  let averengeAnnualYeld = averengeAnnualYeldCounting(couponAnnual, bond["nominal"], price, time);
  let averengeValueOfBond = averengeValueOfBondCounting(bond["nominal"], price);

  return averengeAnnualYeld / averengeValueOfBond * 100 + "%";
}

console.log(ytm(bond, 900))