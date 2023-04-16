// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

const initials = userNames.sort().map((name) => {
    // перетворюємо кожен елемент масива в окремий масив - [ 'Петрик', 'Ольга', 'Іванівна' ], [ 'Гнатюк', 'Петро', 'Антонович' ], [ 'Рудко', 'Андрій', 'Опанасович' ]
    const parts = name.split(' ');  

    const transformedParts = parts.map((element) => {
        const firstLetter = element[0];

        return firstLetter;        
    });
    const initial = transformedParts.join('.');
    const initialWithDotAtTheEnd = initial + '.';

    return initialWithDotAtTheEnd;
});

console.log(initials);


// 2. Задача на розворот числа:
let currentMaxValue = -4589;
let reverseMaxValue;

if(currentMaxValue < 0) {
    reverseMaxValue = Number(`-${String(currentMaxValue).substring(1).split('').reverse().join('')}`);
} else {
    reverseMaxValue = Number(String(currentMaxValue).split('').reverse().join(''));
}

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


// 3. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
const resultsArray = [1, 2, [3, [4]]];

const productsCount = resultsArray.flat(Infinity).reduce((total, product) => {
    return total * product;
}, 1);

console.log(productsCount); // 24