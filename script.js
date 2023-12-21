//window.location.href
let repoName = "";
let baseUrl = "";
let deploy = "github"; // github local

if (deploy === "local") {
  baseUrl = window.location.origin + `/`;
} else {
  repoName = "JS-Projects";
  baseUrl = window.location.origin + `/${repoName}/`;
}

let allTagA = document.querySelectorAll(".project a");

for (let i = 0; i < allTagA.length; i++) {
  //console.log(allTagA[i].id);
  allTagA[i].addEventListener("mouseover", function (event) {
    allTagA[i].href = baseUrl + `${allTagA[i].id}/index.html`;
    console.log(allTagA[i].href);
  });
}
