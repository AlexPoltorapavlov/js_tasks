/*
Входные данные:

[

{name: ‘Сбер Банк’, ticker: ‘SBER’},

{name: ‘МТС’, ticker: ‘MTSS’},

{name: ‘Тинькофф групп’, ticker: ‘TCS’},

{name: ‘Московская биржа’, ticker: ‘MOEX’}

]

Задача:

Поиск. Написать функцию, которая принимает строку, находит по этой строке 
соответствия в выше указанном массиве по полю name и возвращает массив 
тикеров (даже если один найден, всё равно в массив его)

Пример:

поиск(‘e’) возвращает [SBER]

поиск(‘ко’) возвращает [TCS, MOEX]

поиск(‘с’) возвращает [SBER, MTSS, MOEX]
*/

const data = [
  { name: 'Сбер Банк', ticker: 'SBER' },
  { name: 'МТС', ticker: 'MTSS' },
  { name: 'Тинькофф групп', ticker: 'TCS' },
  { name: 'Московская биржа', ticker: 'MOEX' }
];

function searchLine(str, data) {
  // Приводим обе строки к нижнему регистру, чтобы поиск был нечувствителен к регистру
  const strLowCase = str.toLowerCase();
  
  return data
    .filter(item => item.name.toLowerCase().includes(strLowCase))
    .map(item => item.ticker);
}

// Примеры использования:
console.log(searchLine('е', data)); // [ 'SBER' ]
console.log(searchLine('ко', data)); // [ 'TCS', 'MOEX' ]
console.log(searchLine('с', data)); // [ 'SBER', 'MTSS', 'MOEX' ]
