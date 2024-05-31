/* 
Задача:
- [x] Написать функцию, которая подсчитывает сумму операций по имени пользователя, и возвращает актуальную сумму после каждого вызова функции.
- [x] Написать функцию, которая выводит сумму операций по имени пользователя.
Пример:
Иван совершает операцию на 100 - возвращаем 100
Иван совершает операцию на 100 - возвращаем 200
Иван совершает операцию на 300 - возвращаем 500
Сергей совершает операцию на 200 - возвращаем 200
Сергей совершает операцию на 400 - возвращаем 600
Запрашиваем сумму операций по Ивану - получаем 500
Запрашиваем сумму операций по Сергею - получаем 600
*/

const userOperations = {}

function addOperation (userName, amount) {
  if (!userOperations[userName]) {
    userOperations[userName] = 0; 
  }
  userOperations[userName] += amount;
  return `${userName} совершает операцию на ${amount} - возвращаем ${userOperations[userName]}`;
}

function getSum(userName) {
  if (!userOperations[userName]) {
    return `Запрашиваем сумму операций по ${userOperations[userName]} - получаем 0`;
  }
  return `Запрашиваем сумму операций по ${userName} - получаем ${userOperations[userName]}`;
}

console.log(addOperation('Иван', 100));
console.log(addOperation('Иван', 100));
console.log(getSum('Иван'))
