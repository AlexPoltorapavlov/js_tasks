/*
Делаем таймер.
Нужны:

метод, который принимает на вход количество секунд и запускает таймер.

метод, который сбрасывает таймер.

Доп условия:

запущенный таймер каждую секунду пишет в console.log - сколько осталось

когда время выходит, выводим об этом в console.log какое нибудь сообщение.

пока запущен один таймер, второй запустить нельзя, вывести какую нибудь ошибку в лог.
*/

 

class Timer {
  constructor() {
    this.timerId = null;
    this.spendedTime = 0;
    this.isRunning = false;
  }

  start(seconds) {
    if (this.isRunning) {
      console.log("Ошибка! Таймер уже запушен!");
      return;
    }

    this.spendedTime = seconds;
    this.isRunning = true;
    
    console.log(`Таймер на ${this.spendedTime} секунд запущен!`)
    this.timerId = setInterval(() => {
      if (this.spendedTime > 0) {
        this.spendedTime--;
        console.log(`Осталось ${this.spendedTime} секунд...`);
      }
      else {
        console.log("Время истекло!");
        this.stop();
      }
    }, 1000);
  }

  stop() {
    if (this.timerId !== null) {
      this.isRunning = false;
      clearInterval(this.timerId);
    }

  }

  reset() {
    this.stop();
    this.spendedTime = 0;
    console.log("Таймер сброшен!");
  }
}

// Как проверить код:

// Инициализация и запуск таймера
timer = new Timer();
timer.start(10);

// Проверка повторного запуска таймера спустя 3 секунды после запуска кода
setTimeout(() => {
  timer.start(10);
}, 3000);

// Сброс таймера спустя 7 секунд после запуска кода
//setTimeout(() => {
//  timer.reset()
//}, 7000);

