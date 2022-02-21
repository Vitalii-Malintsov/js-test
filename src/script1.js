console.log('Module 1-3');


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
//------------------------------------------------------------------
//
// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Добавим картинку обложки если её нет в объекте книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480
// -----------------------------------------------------------------
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const key of object) {
  
//   if (object.hasOwnProperty(key)) {
   
//     propCount += 1
//   }
//     }
//   // Change code above this line
//   return propCount;
// }
// countProps({}) // 0
// countProps({ name: "Mango", age: 2 }) // 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) // 3
//-----------------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

//   for (const book of books) {
//     // Объект книги
//     console.log(book);
//     // Название
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }
//--------------------------------------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const values = [];
//   for (const product of products) {
//     if ('name' === propName) {
//       values.push(product.name);
//     } else if ('price' === propName) {
//       values.push(product.price);
//     } else if ('quantity' === propName) {
//       values.push(product.quantity);
//     }
//   }
//   return values;
// }
// getAllPropValues("name") // ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity") // [4, 3, 7, 9]
// getAllPropValues("price") // [1300, 2700, 400, 1200]
// getAllPropValues("category") // []
//
// ----------------------------------------------------------------------

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// const bookShelf = {
 
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//   return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }

// };

// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//     },
  
//   addBook(bookName) {
//     this.books.push(bookName);
//     },
  
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []

// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]

// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]

//----------------------------------------------------------------------

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
    if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
   
    for (let i = 0; i < this.potions.length; i += 1) {
    if (this.potions[i].name === potionName) {
      this.potions.splice(i, 1);
    }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {

    for (let i = 0; i < this.potions.length; i += 1) {
    if (this.potions[i].name === oldName) {
      this.potions[i].name = newName;
    }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line

};
atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
atTheOldToad.addPotion({ name: "Power potion", price: 270 }),
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), 
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), 
atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), 

atTheOldToad.removePotion("Dragon breath"),
atTheOldToad.removePotion("Speed potion"),

atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion") // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]