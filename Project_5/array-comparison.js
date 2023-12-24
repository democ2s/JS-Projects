//Number array comparison
let arr1 = [1, 2, 5, 3, 8, 7, 1, 4, 3, 7];
console.log(`Array before sorting is: ${arr1}`);
arr1.sort();
console.log(`Array after sorting is: ${arr1}`);

let arr2 = [1, 2, 5, 13, 82, 7, 1, 4, 33, 7];
console.log(`Array before sorting is: ${arr2}`);
arr2.sort();
console.log(`Array after sorting is: ${arr2}`);
console.log(
  "We can see sorting is not quite right, because of Unicode code points comparion. It requires to instruct sort() with formula."
);
arr2.sort((a, b) => a - b);
console.log(`Array after sorting with specific comparing formula is: ${arr2}`);

// string array comparison

let fruits = ["banana", "orange", "Apple", "Mango"];
console.log(`Array before sorting is: ${fruits}`);
fruits.sort((a, b) => a - b);
console.log(`Array after sorting is: ${fruits}`);

let fruits2 = ["apples", "mangoes", "strawberries", "Coconut"];
console.log(`Array before sorting is: ${fruits2}`);
fruits2.sort();
console.log(`Array after sorting is: ${fruits2}`);
fruits2.sort((a, b) => b - a);
console.log(
  `Array after sorting with specific comparing formula is: ${fruits2}`
);
