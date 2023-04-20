/* 1. Обчислення дати 

Напишіть функцію яка буде буде приймати 3 параметри
- початкову дату (string)
- кінцеву дату (string)
- розмірність ('days',  'hours', 'minutes', seconds)
Функція повертатиме часовий період між цими датами згідно розмірності.
Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')  // поверне '86400 seconds'

durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')  // поверне '362 days'
*/

const DIMENSION_VALUES = {
  days: 1000 * 60 * 60 * 24,
  hours: 1000 * 60 * 60,
  minutes: 1000 * 60,
  seconds: 1000
};

function checkIsDimensionValid(dimension) {
  if (!dimension || typeof dimension !== 'string') {
    return false;
  }

  const validValues = Object.keys(DIMENSION_VALUES);
  const isValid = validValues.includes(dimension);

  return isValid;
}

function checkIsDateValid(date) {
  const parsedValue = Date.parse(date);
  const isValid = !isNaN(parsedValue);

  return isValid;
}

function durationBetweenDates (startDate = '03 Mar 1992', finalDate = '15 Apr 2023', dimension = 'days') {
  if (!checkIsDimensionValid(dimension)) {
    return 'Invalid dimension';
  }

  if(!checkIsDateValid(startDate) || !checkIsDateValid(finalDate)) {
    return 'Invalid date';
  }

  let result;

  const differenceBetweenDates = Math.abs(new Date(startDate) - Date(finalDate));

  switch (dimension) {
    case 'days': {
      result = Math.floor(differenceBetweenDates / DIMENSION_VALUES.days);
      break;
    }
    case 'hours': {
      result = Math.floor(differenceBetweenDates / DIMENSION_VALUES.hours);
      break;
    }
    case 'minutes': {
      result = Math.floor(differenceBetweenDates / DIMENSION_VALUES.minutes);
      break;
    }
    case 'seconds': {
      result = Math.floor(differenceBetweenDates / DIMENSION_VALUES.seconds);
      break;
    }
    default: {
      return 'Unsupported case';
    }
  }

  return `${result} ${dimension}`;

 
}

console.log(durationBetweenDates('03 Mar 1992', '15 Apr 2023', 'days'));


/* 2. Перетворення об'єкту

Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
*/

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

function optimizer(data) {
  if (!data || Array.isArray(data) || typeof data !== 'object') {
    return 'Invalid data';
  }
  const array = Object.entries(data);
  const newArray = array.map((element) => {
    return [element[0].toLowerCase(), parseFloat(element[1]).toFixed(2)];
  });

  return Object.fromEntries(newArray);
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);   // {apples: '23.40', bananas: '48.00', oranges: '48.76'}



// 3. Задача про рекурсію та ітерацію

// функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
function recursiveOddSumTo(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return 'Invalid param type!';
  }
  
  if (number <= 0) {
    return 0;
  } 

  if (number % 2 === 0) {
    return recursiveOddSumTo(number - 1); // 10 -> 10 - 1 => 9
  } 
  
  return number + recursiveOddSumTo(number - 2); // 9 + func(9 - 2)
  
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25


//функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.
function iterativeOddSumTo(number) {
  // тут ваш код
  let result = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      result += i;
    }
  }


  return result;
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25



