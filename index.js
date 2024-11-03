// 1/

let number = 1;

while (number <= 100) {
  if (number == 50) {
    console.log("Half way there!");
  } else if (number == 100) {
    console.log("You made it!");
  } else if (number % 10 == 0) {
    console.log("Checkpoint!", number);
  }
  number += 1;
}
console.log("All done!");

// 1)

// 2/

// let a = 0,
//   b = 1,
//   count = 0;

// while (count < 10) {
//   console.log(a);
//   let daraagiinToo = a + b;
//   a = b;
//   b = daraagiinToo;
//   count += 1;
// }
