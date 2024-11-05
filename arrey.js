// favoriteColors гэсэн array үүсгээд 5 дуртай өнгийг оруулна. Дараа нь гурав дахь өнгийг өөрчилж, шинэчилсэн array-ыг хэвлэ.

// let favoriteColors = ["green", "blue", "yellow", "white", "black"];

// favoriteColors[2] = "gray";

// console.log(favoriteColors);

// levelsCompleted гэсэн array үүсгээд  boolean утгууд оруул. Хамгийн төгсгөлд нь шинээр true гэсэн утга өгч,  шинэчилсэн array-ыг хэвлэ.

let levelsCompleted = [false, false, false, false, false, false];
levelsCompleted.push(true);
console.log(levelsCompleted);

// destinations array үүсгээд очихыг хүссэн 5 газрыг бич. Эхний газрыг устгаад шинэчилсэн array-ыг хэвлэ. Дараа нь хамгийн эхэнд нь “New York” гэсэн элемент нэмээд  шинэчилсэн array-ыг хэвлэ.

let destinations = ["USA", "JPN", "KOR", "CHI", "RUS"];
destinations.shift;
destinations.unshift("New York");
console.log(destinations);

// ages гэсэн array зарлаад 18, 21, 22, 20, 23, 36, 79, гэсэн утгуудыг оноож тус array-д байгаа бүх тоог 5-аар нэмэгдүүл. шинэчилсэн array-ыг хэвлэ.

let ages = [18, 21, 22, 20, 23, 36, 79];

ages[0] = ages[0] += 5;
ages[1] = ages[1] += 5;
ages[2] = ages[2] += 5;
ages[3] = ages[3] += 5;
ages[4] = ages[4] += 5;
ages[5] = ages[5] += 5;
ages[6] = ages[6] += 5;
console.log(ages);

// numbers гэсэн array зарлаад 15ш тоо оруул.

// Дээрх array доторх тоонуудын нийлбэрийг ол.

let sum = 0;
i = 0;
numbers = [2, 4, 5, 6, 7, 3, 4, 6, 10, 1, 5, 8, 6, 7, 9];
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log(sum);

// Дээрх аrray - ийн хамгийн их тоог ол

let max = 0;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

// Дээрх аrray - ийн хамгийн бага тоог ол.

let min = 0;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > min) {
    min;
  } else {
    min = numbers[i];
  }
}
console.log(min);

// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.

numbers.unshift(18);
console.log(numbers);

// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.

numbers.push(10);
console.log(numbers);

// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол.

// odd = [];
// even = [];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     odd.push(numbers[i]);
//   } else {
//     even.push(numbers[i]);
//   }
// }
// console.log(odd.length + 1);
// console.log(even.length + 1);
let odd;
event;
