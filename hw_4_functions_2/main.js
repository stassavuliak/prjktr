/*
1. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, 
починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. 
Напишіть її двома варіантами:
  - Використовуючи setInterval
  - Використовуючи вкладений setTimeout
 */

// Варіант із setInterval
detonatorTimer(3);

function checkIsNumber (number) {
  return typeof number === 'number' && !isNaN(number);
}

function detonatorTimer (delay) {
  let timerId = setInterval(function() {
    
    if (!checkIsNumber(delay)) {
      clearInterval(timerId);
      return console.log('Invalid param type!');
    }

    console.log(delay--);

    if (delay < 1) {
      clearInterval(timerId);
      console.log('BOOM!*');
    }
  },1000);
}

// Варіант із вкладеним setTimeout
detonatorTimer1(3);

function detonatorTimer1 (delay) {
  let timerId = setTimeout(function countTicks () {
    
    if (!checkIsNumber(delay)) {
      clearInterval(timerId);
      return console.log('Invalid param type!');
    }

    console.log(delay--);
    timerId = setTimeout(countTicks, 1000);

    if (delay < 1) {
      clearInterval(timerId);
      console.log('BOOM!*');
    }
  }, 1000);
}



/**
 * 2. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять. 
 * Наприклад:
 */

let me = {
  name: 'Stas',
  countryOfBirth: 'Ukraine',
  currentCountry : 'Denmark',
  gender: 'male',
  age: 31,
  year: 2023,
  currentPosition() {
    console.log(`I am from ${this.countryOfBirth}. But now I am in ${this.currentCountry}`);
  },
  findOutNextYear() {
    console.log(`Next year will be ${this.year + 1}`);
  }
};

me.currentPosition();
me.findOutNextYear();



/**
 * 3. А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту - 
 * аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
 */

let securedcurrentPosition = me.currentPosition.bind(me); 
let securedfindOutNextYear = me.findOutNextYear.bind(me); 

setTimeout(securedcurrentPosition, 2000); // виведе коректний результат*
setTimeout(securedfindOutNextYear, 3000); // виведе коректний результат*



/**
 * 4. Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.
 */

// тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль
function someFunction (a, b) {
  const sum = a + b;
  console.log(sum);
} 


function slower(func, seconds) {

  return (...params) => {
    console.log(`Chill out, you'll get you result in ${seconds} seconds`);

    setTimeout(() => func(...params), seconds * 1000);
  };
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

slowedSomeFunction(2, 5); // викликаєте декоратор*
 
// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'




