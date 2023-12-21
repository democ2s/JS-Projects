function chngBgColor() {
  var ele = document.querySelector(".box");
  ele.style.backgroundColor = "blue";
}
function unDoBgColor() {
  var ele = document.querySelector(".box");
  ele.style.backgroundColor = "";
}
function createLstItems() {
  let newItm = document.createElement("li");
  newItm.innerText = "Added dynamically";
  document.getElementById("ol").appendChild(newItm);
}

function removeLstItems() {
  let ol = document.getElementById("ol");
  let allItems = document.querySelectorAll("#ol li");
  allItems.forEach((element) => {
    if (element.className != "static-added") {
      document.getElementById("ol").removeChild(element);
    }
  });
}
