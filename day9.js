/*
Task for You:
Create an object book with properties:

title: "JavaScript Guide"

author: "John Doe"

pages: 300

Add a new property → publishedYear: 2024

Update pages to 350.

Delete the author property.

Print the final object.
*/

const book = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
};

book.publishedYear = 2024;
console.log(book);
book.pages = 300;
console.log(book);
delete book.author;
console.log(book);
