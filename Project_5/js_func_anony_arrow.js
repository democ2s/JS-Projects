// Difference in calling filter method's callback function

//option 1
let arr1 = [1, 2, 4, 7, 5, 5];
let retArr1 = arr1.filter(cb1);
function cb1(ele) {
  return ele % 2 === 0;
}
console.log(retArr1);

//option 2
let arr2 = [6, 8, 45, 65, 67, 89, 2];
let retArr2 = arr2.filter(function (ele) {
  return ele % 2 === 0;
});
console.log(retArr2);

//option 3
let arr3 = [67, 89, 2, 100, 102];
let retArr3 = arr3.filter((ele) => ele % 2 === 0);
console.log(retArr3);
