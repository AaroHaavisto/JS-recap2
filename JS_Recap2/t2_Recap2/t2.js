'use strict';

let numbers = [];

for (let i = 1; i <= 5; i++) {
  let num = prompt(`Enter number ${i}:`);
  numbers.push(num);
}
document.querySelector('#target1').textContent = `Numbers entered: ${numbers}`;

let num_Check = prompt("Enter a number to check if it's in the array:");
if (numbers.includes(num_Check)) {
  console.log('Number found!!');
} else {
  console.log('Number was not found');
}
numbers.pop([-1]);
document.querySelector('#target2').textContent =
  `Numbers after pop: ${numbers}`;

numbers.sort();
document.querySelector('#target3').textContent =
  `Numbers after sort: ${numbers}`;
