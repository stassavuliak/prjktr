/*
1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості 
(але без використання вбутованого об'єкту Math). Використайте оператор розширення:
*/

console.log(addThemAll(1,2,3)); // 6*
// console.log(addThemAll(1,2,3,4)); // 10*
// console.log(addThemAll(5,5,10)); // 20*

function checkIsNumber (number) {
  return typeof number === 'number' && !isNaN(number);
}

function addThemAll (...numbers) {
  const sumOfNumbers = numbers.reduce((acc, current) => {
    if (checkIsNumber(current)) {
      return acc + current;
    }
    return acc;
  }, 0);
  return sumOfNumbers;
}
 


/*
2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b
*/

console.log(multiply(5)(5)); // 25*
console.log(multiply(2)(-2)); // -4*
console.log(multiply(4)(3)); // 12*

function multiply(a) {
  return function inner(b) {
    if (!checkIsNumber(a) || !checkIsNumber(b)) {
      return 'Invalid param type!';
    }
    return a * b;
  };

}

console.log(multiply(2)(3));



/*
3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:
    1) властивість за якою треба посортувати
    2) опцію напрямку сортування, зростання чи спадання
*/

const movies = [
  {
  movieName: 'The Thing',
  releaseYear: 1982,
  directedBy: 'Carpenter',
  runningTimeInMinutes: 109,
  },

  {
  movieName: 'Aliens',
  releaseYear: 1986,
  directedBy: 'Cameron',
  runningTimeInMinutes: 137,
  },

  {
  movieName: 'Men in Black',
  releaseYear: 1997,
  directedBy: 'Sonnenfeld',
  runningTimeInMinutes: 98,
  },

  {
  movieName: 'Predator',
  releaseYear: 1987,
  directedBy: 'McTiernan',
  runningTimeInMinutes: 107,
  },
];


function checkIsPropertyValid(property) {
  const validKeys = Object.keys(movies[0]);

  return validKeys.includes(property);
}
  
function byProperty(property, direction) {
  if (!checkIsPropertyValid(property)) {
    return (a, b) => 0;
  }

  if (!['>', '<'].includes(direction)) {
    return (a, b) => 0;
  }
  
  return (a, b) => {
    if (direction === '>') {
      return a[property] > b[property] ? 1 : -1;
    } else if (direction === '<') {
      return a[property] < b[property] ? 1 : -1;
    }
  };

}



// console.log(movies.sort(byProperty('releaseYear', '<'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
// console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
// console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
console.log(movies.sort(byProperty('movieName', ''))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*








