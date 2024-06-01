/*
Задача:

Этот скрипт добавить в один файл, создать второй файл, в котором написать функцию, которая будет строкой принимать цвет в формате hsl (‘235, 58%, 49%’) и возвращать цвет в формате hex строкой (‘#3441c5’).

Пример:
функция(‘235, 58%, 49%’) возвращает ‘#3441c5’
*/
const HSLToHex = require('./colorFuncs');

function hslToHex(color) {
  const hsl = color.match(/(\d+),\s*(\d+)%?,\s*(\d+)%?/);

  const h = parseInt(hsl[1], 10);
  const s = parseInt(hsl[2], 10);
  const l = parseInt(hsl[3], 10);

  return HSLToHex(h, s, l);
}

console.log(hslToHex('235, 58%, 49%')); // Пример: '#3441c5'
