'use strict';
let numbers = [5, 2, 1, 3, 8, 4];
function sortArray(numbers) {
  let newArray = [...numbers];
  newArray.sort((a, b) => a - b);
  return newArray;
}

let sortedNumbers = sortArray(numbers);
console.log('Original numbers:', numbers);
console.log('Sorted numbers:', sortedNumbers);
