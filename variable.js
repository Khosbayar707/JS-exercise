// 1. 4 нь 3-аас их үү ?
// let a = 3;
// b = 4;

// console.log(1, a > b);
// // 2. 3 нь 4-өөс их үү ?
// console.log(2, a < b);
// // 3. 4 нь 3-аас их буюу тэнцүү юу ?
// console.log(3, a >= b);
// // 4. 3 нь 4-өөс их буюу тэнцүү юу ?
// console.log(4, a <= b);
// // 5. 4 нь 4-тэй тэнцүү юу ?
// let c = 4,
//   d = 4;
// console.log(5, c == d);
// // 6. 4 нь 4-тэй яг тэнцүү юу ?
// console.log(6, c === d);
// // 7. 4 нь 4-тэй тэнцүү биш нь үнэн үү ?
// console.log(7, c != d);
// // 8. 4 нь "4"-тэй тэнцүү биш үү ?
// let e = "4";
// console.log(8, c != e);
// // 9. 4 нь "4"-тэй яг тэнцүү юу ?
// console.log(9, c === e);
// // 10. 4 нь "4"-тэй тэнцүү юу ?
// console.log(10, c == e);
// // 11. 4 нь 3-аас их болон 10 нь 12-оос бага нь үнэн үү ?
// console.log(11, 4 > 3 && 10 < 12);
// // 12. 4 нь 3-аас их болон 10 нь 12-оос их нь үнэн үү ?
// console.log(12, 4 > 3 && 10 > 12);
// // 13. 4 нь 3-аас их эсвэл 10 нь 12-оос бага нь үнэн үү ?
// console.log(13, 4 > 3 || 10 > 12);
// // 14. 4 нь 3-аас их эсвэл 10 нь 12-оос их нь үнэн үү ?
// console.log(14, 4 > 3 || 10 < 12);
// // 15. 4 нь 3-аас бага эсвэл 10 нь 12-оос их нь үнэн үү ?
// console.log(15, 4 < 3 || 10 > 12);
// // 16. let five = !(4 > 3) ямар хариу буцаах вэ ?
// console.log(16, !(4 > 3));
// // 17. let six = !(4 < 3) ямар хариу буцаах вэ ?
// console.log(17, !(4 < 3));
// // 18. let seven = !(4 > 3 && 10 < 12) ямар хариу буцаах вэ ?
// console.log(18, !(4 > 3 && 10 < 12));
// // 19. let eight = !(4 > 3 && 10 > 12) ямар хариу буцаах вэ ?
// console.log(19, !(4 > 3 && 10 > 12));
// // 20. let nine = !(4 === "4") ямар хариу буцаах вэ ?
// console.log(20, !(4 === "4"));

// // ih bagiin temdeggvi ihiig oloh

// console.log((a + b + ((a - b) ** 2) ** 0.5) / 2);

// IF ELSE

// let c;
// c = 36;

// if (c % 5 === 0 && c % 3 === 0) {
//   console.log("hoyulandHuwaagddagToo");
// } else if (c % 5 === 0) {
//   console.log("tavdHuwaagddagToo");
// } else if (c % 3 === 0) {
//   console.log("guravdHuwaagddagToo");
// }

// 1. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү.
// let aToo;
// aToo = 936;

// console.log((aToo % 12) / 9);
// 2. Гараас 0-100 хооронд тоон утга авч тохирох үсгэн тэмдэглэгээгээр онц эсвэл сайн эсэхийг буцаа.
// let grade;
// grade = 50;

// if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80 && grade <= 89) {
//   console.log("B");
// } else if (grade >= 70 && grade <= 79) {
//   console.log("C");
// } else if (grade >= 60 && grade <= 69) {
//   console.log("D");
// } else if (grade <= 59) {
//   console.log("F");
// }

// 3. Он, сараа гараас оруулахад тухайн сар хэд хоногтой болохыг харуул.
// let month;
// month = 7;
// if (month >= 13) {
//   console.log("saraa shalgana uu");
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//   console.log("30 hongtoi");
// } else if (month == 2) {
//   console.log("29 hongtoi");
// } else if (
//   month == 1 ||
//   month == 3 ||
//   month == 5 ||
//   month == 7 ||
//   month == 8 ||
//   month == 10 ||
//   month == 12
// ) {
//   console.log("31 hongtoi");
// }
// 4. Өгөгдсөн тооны тэгш эсвэл сондгой эсэхийг шалгана уу.
// let bToo;
// bToo = 30;
// if (bToo % 2 === 0) {
//   console.log("tegsh");
// } else if (bToo % 2 === 1) {
//   console.log("sondgoi");
// }

// 5. Өгөгдсөн тооны эерэг тоо эсвэл сөрөг тоо болохыг шалгаад хэвлэж харуулна уу.
// let cToo;
// cToo = 0;
// if (cToo > 0) {
//   console.log("eyreg too");
// } else if (cToo < 0) {
//   console.log("surug too");
// } else if (cToo === 0) {
//   console.log("uur number songoochee");
// }

// 6. 4 н хувьсагч зарлан тоон утга өг. Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.

// let too1 = 30;
// let too2 = 40;
// let too3 = 90;
// let too4 = 85;
// let sum = 0;

// if (too1 >= 80) {
//   sum += too1;
// }
// if (too2 >= 80) {
//   sum += too2;
// }
// if (too3 >= 80) {
//   sum += too3;
// }
// if (too4 >= 80) {
//   sum += too4;
// }
// console.log(sum);

// 1.

// let a = 4;
// let b = 5;

// console.log(a + b);

// 2.

// console.log((a + b) * 2);

// 3.

// console.log((a * b) / 2);

// 9.

// let dYear = 2400;

// if ((dYear % 4 === 0 && dYear % 100 != 0) || dYear % 400 === 0) {
//   console.log("undur jil");
// } else {
//   console.log("engiin jil");
// }

// 13.

// let number1 = 1000,
//   number2 = 800,
//   number3 = 900,
//   number4 = 1100;

// if (number2 >= number1 && number2 >= number3 && number1 >= number3) {
//   console.log(number2, number1, number3);
// } else if (number2 >= number3 && number2 >= number1 && number3 >= number1) {
//   console.log(number2, number3, number1);
// } else if (number1 >= number3 && number1 >= number2 && number3 >= number2) {
//   console.log(number1, number3, number2);
// } else if (number1 >= number2 && number1 >= number3 && number2 >= number3) {
//   console.log(number1, number2, number3);
// } else if (number3 >= number1 && number3 >= number2 && number1 >= number2) {
//   console.log(number3, number1, number2);
// } else if (number3 >= number1 && number3 >= number2 && number2 >= number1) {
//   console.log(number3, number2, number1);
// }

// 14.
// if (
//   number1 > number2 &&
//   number1 > number3 &&
//   number1 > number4 &&
//   number2 > number3 &&
//   number2 > number4
// ) {
//   console.log("1-2", number2);
// } else if (("1-3", number3 > number2 && number3 > number4)) {
//   console.log("1-3", number3);
// } else if (number4 > number3 && number4 > number2) {
//   console.log("1-4", number4);
// }
// if (
//   number2 > number1 &&
//   number2 > number3 &&
//   number2 > number4 &&
//   number1 > number3 &&
//   number1 > number4
// ) {
//   console.log("2-1", number1);
// } else if (number3 > number1 && number3 > number4) {
//   console.log("2-3", number3);
// } else if (number4 > number3 && number4 > number1) {
//   console.log("2-4", number4);
// }
// if (
//   number3 > number1 &&
//   number3 > number2 &&
//   number3 > number4 &&
//   number1 > number2 &&
//   number1 > number4
// ) {
//   console.log("3-1", number1);
// } else if (number2 > number1 && number2 > number4) {
//   console.log("3-2", number2);
// } else if (number4 > number1 && number4 > number2) {
//   console.log("3-4", number4);
// }
// if (
//   number4 > number1 &&
//   number4 > number2 &&
//   number4 > number3 &&
//   number1 > number2 &&
//   number1 > number3
// ) {
//   console.log("4-1", number1);
// } else if (number2 > number1 && number2 > number3) {
//   console.log("4-2", number2);
// } else if (number3 > number1 && number3 > number2) {
//   console.log("4-3", number3);
// }

// let star = "";
// let n = 0;
// while (n < 9) {
//   n = n + 1;
//   star = star;
//   star = star + " *";
//   console.log(star);
// }

// 23.

// let numbers;
// i = 1;
// a = 4219;

// while (a > 0) {
//   numbers = a % 10;
//   if (numbers % 2 == 0) {
//     i = i * numbers;
//   }
//   a = Math.floor(a / 10);
// }
// console.log(i);

// 21;

let n = 3;

while (n <= 37) {
  if (n % 5 === 0) {
    console.log(n);
  }
  n++;
}
