let btn = document.getElementsByTagName("button")[0];
let txtbx = document.getElementsByTagName("input")[0];
let result = document.getElementById("result");
let ans;
btn.addEventListener("click", () => {
  result.innerHTML = "";
  let arr = txtbx.value.split(" ");

  // replacing to all lowercase
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  let uniqueWords = [...new Set(arr)];
  let uniqueWords2 = [];
  arr.forEach((e) => {
    if (!uniqueWords2.includes(e)) {
      uniqueWords2.push(e);
    }
  });
  let str = `Unique words [processed using Set()] are: <b> ${uniqueWords.join(
    ", "
  )} </> </b><br />`;
  str =
    str +
    `Unique words [processed manually] are: <b> ${uniqueWords2.join(
      ", "
    )} </> <br /></b>`;
  result.innerHTML = str;
});
