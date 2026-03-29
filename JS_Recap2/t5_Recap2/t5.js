'use strict';
const numbers = [5, 2, 1, 3, 8, 4];

function sortArray(numbers, order) {
  let newArray = [...numbers];
  if (order === 'asc') {
    newArray.sort((a, b) => a - b);
  } else if (order === 'desc') {
    newArray.sort((a, b) => b - a);
  }
  return newArray;
}
console.log('Original:', numbers);
console.log('Ascending:', sortArray(numbers, 'asc'));
console.log('Descending:', sortArray(numbers, 'desc'));
