// Sum of array elements
let arr = [1, 32, 23, 41, 5, 6, 7, 8, 9, 10];
let sum = 0;

arr.forEach(sum_cb);
function sum_cb(ele) {
  console.log("working on " + ele);
  sum += ele;
}
console.log(`Sum of elements is: ${sum}`);

let total = arr.reduce(cb);
function cb(acc, ele) {
  console.log(`Accumalator is ${acc}, element is ${ele}`);
  return acc + ele;
}

console.log(`Total of elements is: ${total}`);
