function calculatePtoblems(count) {
  let problemsPerHour = 2;
  totalHours = console.log(
    "I study for",
    totalHours,
    "hours to solve",
    problemsPerHour,
    "problems."
  );
}

let studyHours = 3;

function printFavoriteFood(name, food) {
  console.log(name, "loves", "to", "eat", food, ".");
}
printFavoriteFood("Sara", "pizza");

function printWeather(cityName, weather) {
  console.log(cityName, "hotod", weather, "C", "baina.");
}
printWeather("Chicago", 32);

function printBookDetail(title, author, yearPublished) {
  console.log(author, "wrote", title, "in", yearPublished);
}
printBookDetail("Harry Potter", "JK Rowling", 1997, ".");

function calculateArea(width, height) {
  return width * height;
}
const area = calculateArea(10, 20);
console.log("Area: " + area);

function calculateVolume(width, height, depth) {
  return width * height * depth;
}
const volume = calculateVolume(10, 20, 30);
console.log("Volume: " + volume);

function printTicketInfo(eventName, ticketPrice, discount) {
  console.log(
    eventName,
    "kinonii une",
    ticketPrice,
    "unetei ba",
    discount,
    "huwiar buurlaa."
  );
}
printTicketInfo("galzuu hurd", 20000, 10);

function findDigitCount(number, digit) {
  let digitCount = 0;
  while (number > 0) {
    if (digit == number % 10) {
      digitCount++;
    }
    number = Math.floor(number / 10);
  }

  console.log(digitCount);
}

findDigitCount(1215, 1);
