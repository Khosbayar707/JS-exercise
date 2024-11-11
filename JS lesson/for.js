// 10 удаа  "Hello!" гэж хэвлэх

// for (let i = 1; i <= 10; i++) {
//   console.log(i, "hello");
// }

// 2. 1-ээс 10 хүртэлх тоог хэвлэх

// for (let n = 1; n <= 10; n++) {
//   console.log(i);
// }

// 1-ээс 20 хүртэлх тооны нийлбэр олох

// let sum = 0;
// for (let n = 1; n <= 20; n++) {
//   sum = sum + n;
// }
// console.log(sum);

// 1-ээс 20 хүртэлх сондгой тоонуудыг хэвлэх

// for (let n = 1; n <= 20; n++)
//   if (n % 2 == 1) {
//     console.log(n);
//   }

// Дурын тоо өгөгдөхөд тухайн тооны факториал олох

// let n = 10;
// let result = 1;

// for (let i = 1; i <= n; i++) {
//   result *= i;
// }

// console.log(result);

//Тооны хүрд харуулах програм бич.

// let number = 3;

// for (let i = 1; i <= 10; i++) {
//   let urjver = number * i;
//   console.log(number, "x", i, "=", urjver);
// }

// Create a while loop that runs from 1-100

// Every 10 loops, print out: Checkpoint! and the loop number
// On loop 50 print out ONLY: Half way there!
// On the final loop (100) print out ONLY: You made it!
// AFTER the loop is done, print out: All, done!
// You should see this printed out when run:

// for (let i = 1; i <= 100; i++) {
//   if (i % 100 === 0) {
//     console.log("You made it!");
//   } else if (i % 50 === 0) {
//     console.log("Half way there!");
//   } else if (i % 10 === 0) {
//     console.log("Checkpoint!", i);
//   }
// }
// console.log("All, done!");

/**
Төсвийн хянагч (Budget Tracker)

Та өдөр тутмын зардлаа хянахыг хүсч байна. Таны төсөв буюу зарцуулах боломжтой мөнгөний хэмжээ $100 байна.

Ажлын өдрүүдэд (Даваа - Баасан) зардал $5 байх болно.
Амралтын өдрүүдэд (Бямба, Ням) зардал $10 байх болно.
Хэрэв  нийт зардал $80-аас илүү, гэхдээ $100-аас бага болвол "Таны нийт зардал 100$ руу ойртож байна шүү" гэж хэвлэ.
Хэрэв  нийт зардал $100 буюу төсвийн хязгаарт хүрсэн бол: "Та зардлын хязгаарт хүрлээ!" гэж хэвлээд давталтыг зогсоо.


budget => 100
day =>
totalExpense => 

 */

// const budget = 100;
// let day = 1;

// for (let totalExpense = 0; totalExpense <= budget; day++) {
//   let dayExpense;

//   if (day <= 5) {
//     dayExpense = 5;
//   } else if (day > 5 && day <= 7) {
//     dayExpense = 10;
//   }

//   totalExpense = totalExpense + dayExpense;

//   if (totalExpense >= 80 && totalExpense <= 100) {
//     console.log("Таны нийт зардал 100$ руу ойртож байна шүү");
//   } else if (totalExpense > 99) {
//     console.log("Та зардлын хязгаарт хүрлээ!");
//   }

//   if (day >= 7) {
//     day = 1;
//   }
//   console.log(totalExpense);
// }
