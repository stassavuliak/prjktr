const startInput = document.getElementById('start');
const startInputValue = startInput.value;

const endInput = document.getElementById('end');
const endInputValue = endInput.value;

const selectTimeInterval = document.getElementById('timeInterval');

const dimensionSelect = document.querySelector('#dimension');
let dimensionSelectValue = dimensionSelect.value;

const calculateButton = document.querySelector('#btn');

// startInput.addEventListener('change', changeInput);
// endInput.addEventListener('change', changeInp ut);
calculateButton.addEventListener('click', durationBetweenDates);

// const values = {
//   start: '',
//   end: '',
// };

// const timeInterval = {
//   week: 'week',
//   month: 'month',
// };

const DIMENSION_VALUES = {
  days: 1000 * 60 * 60 * 24,
  hours: 1000 * 60 * 60,
  minutes: 1000 * 60,
  seconds: 1000
};

// function changeInput(e) {
//   const value = e.target.value;
//   const name = e.target.name;

//   values[name] = new Date(value);
// }



//  розрахувати різницю між датами
function durationBetweenDates (startDate, finalDate, dimension) {
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

durationBetweenDates(startInput.value, endInput.value, dimensionSelectValue);





  
