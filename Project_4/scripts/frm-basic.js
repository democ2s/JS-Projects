let frm1 = document.getElementById("myForm1");
frm1.addEventListener("submit", function (e) {
  e.preventDefault();
  let fname = document.getElementById("firstName").value;
  let sname = document.getElementById("secondName").value;
  fname = fname || "Fname";
  sname = sname || "Sname";
  const h3Opt1 = document.getElementById("h3Opt1");
  h3Opt1.innerText = `Hello ${fname} ${sname}`;
});
