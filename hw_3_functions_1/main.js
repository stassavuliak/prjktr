/*
1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості 
(але без використання вбутованого об'єкту Math). Використайте оператор розширення:
*/

console.log(addThemAll(1,2,3)); // 6*
console.log(addThemAll(1,2,3,4)); // 10*
console.log(addThemAll(5,5,10)); // 20*

function addThemAll (...numbers) {
  const sumOfNumbers = numbers.reduce((acc, current) => {
    return acc + current;
  });
  return sumOfNumbers;
}
 


/*
2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b
*/

console.log(multiply(5)(5)); // 25*
console.log(multiply(2)(-2)); // -4*
console.log(multiply(4)(3)); // 12*

function multiply(a) {
  if (typeof a !== 'number' || isNaN(a) ) {
    return 'Invalid param type!';
  }
  return function inner(b) {
    if (typeof b !== 'number' || isNaN(b) ) {
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



  
// console.log(movies.sort(byProperty('releaseYear', '<'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
// console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(byProperty('runningTimeInMinutes', '<')); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
  
function byProperty(property, direction) {
  if (typeof property !== 'string' || !property || typeof direction !== 'string' || !direction) {
    return 'Invalid param type!';
  }
  
  movies.sort((a, b) => {
    if (direction === '>') {
      return a[property] > b[property] ? 1 : -1;
    } else if (direction === '<') {
      return a[property] < b[property] ? 1 : -1;
    }
  });

}

console.log(movies);







