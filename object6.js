const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1967,
  },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

function filterBooksByYear(year) {
  let publish = [];
  let i = 0;
  for (i = 0; i < books.length; i++) {
    if (books[i].year >= year) {
      publish.push(books[i]);
    }
  }
  console.log(year, "- н Оноос хойш хэвлэгдсэн номнууд:", publish);
  return publish;
}

filterBooksByYear(1940);
