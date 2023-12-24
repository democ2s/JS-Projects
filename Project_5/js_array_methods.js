// let retArray = arr.filter();
let arr = ["indigo", "india", "iglo", "lion", "tiger"];
let arr2 = arr.filter((e) => {
  if (e.length > 4 && !e.startsWith("i")) return e;
});
arr2 = arr.filter((e) => {
  if (e.length > 4 && e.startsWith("i")) return e;
});
arr2 = arr.filter((e) => {
  if (e.length > 4) return e;
});
arr2 = arr.filter((e) => {
  if (e.startsWith("i")) return e;
});

// IndexOf
let arr3 = ["indigo", "india", "iglo", "lion", "tiger"];
let searchWord1 = "india";
let index = arr3.indexOf(searchWord1);
console.log(`Index of ${searchWord1} is ${index}`);

// includes
let arr4 = ["indigo", "india", "iglo", "lion", "tiger"];
let searchWord2 = "india";

let found = arr4.includes(searchWord2);
console.log(`element ${searchWord2} found? ${found}`);

// reduce
let arr5 = [3, 4, 6, 3, 6, 9, 10];
let ans = arr5.reduce((acc, ele) => {
  return acc + ele;
});
console.log(`Sum of all numbers: ${ans}`);

let arr6 = ["indigo", "india", "iglo", "lion", "tiger"];
let ans1 = arr6.reduce((acc, ele) => {
  console.log(`processing ${acc}`);
  return acc + " [ " + ele + " ] ";
});
console.log(`Sum of all words: ${ans1}`);
