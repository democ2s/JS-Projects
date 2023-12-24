// references of elements
let btn = document.getElementsByTagName("button")[0];
let result = document.getElementById("result");

//Event handlers

// To rest error message
txtbx.addEventListener("click", () => {
  result.innerHTML = "";
});

btn.addEventListener("click", (e) => {
  let txtbx = document.getElementById("txtbx");
  let userInput = "";
  userInput = txtbx.value;
  if (userInput) {
    let arr = userInput.split(",").map(Number);
    arr.forEach((e) => {});
    let sum = arr.reduce((acc, ele) => acc + ele);
    result.innerHTML = `<b>Sum of all elements in the array is ${sum}</b>`;
  } else {
    result.innerHTML = `<b style="color:red;">Please enter value</b>`;
  }
});
