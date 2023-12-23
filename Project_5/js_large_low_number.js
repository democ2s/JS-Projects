// Find highest element in array

// Option 1: using bubble sort algorithm
let arr = [1, 2, 4, 7, 5, 0, 43, 45, 65, 67, 89, 2];

let temp;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    temp = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = temp;
  }
}
console.log(`Highest element from bubble sort is ${arr[arr.length - 1]}`);

//Option 2: JS native method Math.max
let lnum = Math.max(...arr);
console.log(`Highest element from Math.max is ${lnum}`);
// and same goes for loweest number as well.
lnum = Math.inx(...arr);
console.log(`Lowest element from Math.min is ${lnum}`);
