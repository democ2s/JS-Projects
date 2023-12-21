function chngBgColor() {
  var ele = document.querySelector(".box");
  ele.style.backgroundColor = "blue";
}
function unDoBgColor() {
  var ele = document.querySelector(".box");
  ele.style.backgroundColor = "";
}
function createLstItems() {
  let colTextBx = document.getElementById("txt-col-new-element");
  let ChoosenColor = colTextBx.value || "Red";
  let styleAttr = `color:${ChoosenColor}`;
  console.log(styleAttr);

  let newItm = document.createElement("li");
  newItm.innerText = "Added dynamically";
  newItm.setAttribute("style", styleAttr);
  document.getElementById("ol").appendChild(newItm);
}

function removeLstItems() {
  let colTextBx = document.getElementById("txt-col-new-element");
  colTextBx.value = "";
  let ol = document.getElementById("ol");
  let allItems = document.querySelectorAll("#ol li");
  allItems.forEach((element) => {
    if (element.className != "static-added") {
      document.getElementById("ol").removeChild(element);
    }
  });
}

function toggleClass() {
  //console.log(this.event.target);
  //this.event.target.classList.toggle("highLight-Yellow");
  let allBoxes = document.getElementsByClassName("box");

  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].classList.toggle("highLight-Yellow");
  }
}

function createTable() {
  let tab = document.getElementById("tbl-create");
  tab.setAttribute("border", "1px solid black;");
  let newRow = tab.insertRow();
  newRow.insertCell().textContent = "Cell 1";
  newRow.insertCell().textContent = "Cell 2";
  newRow.insertCell().textContent = "Cell 3";
}

function removeTable() {
  let tab = document.getElementById("tbl-create");
  let rows = tab.rows;
  while (rows.length > 0) {
    tab.deleteRow(0);
  }
}

function toggleOl() {
  //ol-toggle
  let olist = document.getElementById("ol-toggle");
  olist.style.display = olist.style.display === "block" ? "none" : "block";
}

function switchParent() {
  //ol-toggle2
  let oList = document.getElementById("ol-toggle2");
  let parent1 = document.getElementsByClassName("parent1")[0];
  let parent2 = document.getElementsByClassName("parent2")[0];
  oList.parentNode.className === "parent1"
    ? parent2.appendChild(oList)
    : parent1.appendChild(oList);
}
