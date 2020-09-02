// // Membuat Function
// function greeting() {
//   return "Hello World";
// }
// // Memanggil Function
// greeting();
// console.log(greeting());

// // Parameter Function
// function penambahan(a, b) {
//   return a + b;
// }// Argumen Function
// console.log(penambahan(5, 5));

// Default Parameter
function greetOnWebsite(name = "Stranger") {
  return "Hello" + name;
}
console.log(greetOnWebsite("David"));
console.log(greetOnWebsite());

// Function Helper
// function multiplyByNineFifths(number) {
//   return number * (9 / 5);
// }
// function getFahrenheit(celsius) {
//   return multiplyByNineFifths(celsius) + 32;
// }
// console.log(getFahrenheit(15));

// // Arrow Function
// const greeting = () => {
//   return "Hello world";
// };
// const penambahan = (a, b) => {
//   return a + b;
// };
// console.log(penambahan(10, 10));
// // Short Syntax Function
// // 0 Parameter
// const namaFunction = () => {};

// // 1 Parameter
// const namaFunction = (parameterSatu) => {};

// // 2 Parameter atau lebih
// const namaFunction = (parameterSatu, parameterDua) => {};

// // Single-Line Block
// const sumNumbers = (number) => number + number;

// // Multi-Line Block
// const sumNumbers = (number) => {
//   const sum = number + number;
//   return sum;
// };
