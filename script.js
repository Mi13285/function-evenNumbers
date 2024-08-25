// function evenNumbers(array, number) {
//   let arr = [];
//   for (let p = array.length - 1; number > 0; p--) {
//     if (array[p] % 2 == 0) {
//       arr.push(array[p]);
//       number--;
//     }
//   }
//   return arr.reverse();
// }
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

const evenNumbers = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
