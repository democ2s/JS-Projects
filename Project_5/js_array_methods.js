/*
Explain: 
let retArray = arr.filter(cb);
let foundIndex = arr.indexOf(4);
let foundElement = arr.includes(4);
let sum = arr.reduce(cb);
arr.forEach(cb);
*/

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
