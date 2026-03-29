'use strict';

let numbers = [];
let num = prompt(`Enter number (leave blank to finish):`);

while (num !== '') {
  numbers.push(Number(num));
  num = prompt(`Enter number (leave blank to finish):`);
}

let evenNumbers = '';

for (let number of numbers) {
  if (number % 2 == 0) {
    evenNumbers += `${number} `;
  }
}

if (evenNumbers !== '') {
  document.querySelector('#target1').innerHTML =
    `Even numbers entered: ${evenNumbers}`;
} else {
  document.querySelector('#target1').innerHTML = `No even numbers entered.`;
}

console.log(numbers);
