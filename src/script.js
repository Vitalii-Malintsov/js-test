console.log('Module 1.2');


// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }
// --------------------------------------------------------------------
// ==== slice ====
// const text =
//   'Метод slice() возвращает новый массив, содержащий копию части исходного массива ';

// const title = document.querySelector('h3');

// for (let i = 0; i < text.length; i += 1) {
//   const str = text.slice(i);

//   setTimeout(() => {
//     title.textContent = str;
//   }, i * 100);
// }
// --------------------------------------------------------------------
// function calculateTotalPrice(order) {
//   console.log (order);
//   let total = 0;
//   // Change code below this line
// for (const element of order) {
//   total += element;
// }
//   // Change code above this line
//   console.log (total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// --------------------------------------------------------------------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (i = min; i < max; i += 1) {
//    numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// --------------------------------------------------------------------


// const numbers = [2, 1, 3, 7, 10, 4, 5];
// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
//   for (let j = i + 1; j < numbers.length; j += 1) {
//     const a = numbers[i];
//     const b = numbers[j];
//     const temp = a;

//     if (b < a) {
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }
// console.log(numbers);
// ------------------------------------------------------------------
// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94

// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// --------------------------------------------------------------------
// function filterArray(numbers, value) {

//   let max = [];

//   for (const number of numbers) {
//     if (number > value) {
//       max.push(number);
//     }
//   }

//      return max
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
// console.log(filterArray());

// --------------------------------------------------------------------

// function filterArray(numbers, value) {

//   let max = []; 

//   for (i = 0; i < numbers.length; i += 1) {
//     if (numbers(i) > value) {
//       numbers(i) = max.push(i);
//     }
//   }
//      return numbers
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
// console.log(filterArray());