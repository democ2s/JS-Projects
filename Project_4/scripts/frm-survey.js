let frm2 = document.getElementById("frm2");
frm2.addEventListener("submit", frmEventHandler);

function frmEventHandler(e) {
  e.preventDefault(); // prevent refresh of screen post submit

  let surveyResult = "";
  let flag = false;
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let custTypeChkbx = document.querySelector(
    'input[name="first-cust"]:checked'
  );
  let custRecom = document.querySelector('input[name="recom"]:checked');
  let custSatisfy = document.querySelector('input[name="satisfy"]:checked');

  surveyResult = surveyResult + `Hello ${name.value}`;
  if (custTypeChkbx != null) {
    if (custTypeChkbx.value.toLowerCase() === "yes") {
      surveyResult = surveyResult + ". Welcome to our family.";
    } else {
      surveyResult = surveyResult + ". Thanks for chosing us again.";
    }
  }
  if (custRecom != null) {
    if (custRecom.value.toLowerCase() === "yes") {
      surveyResult = surveyResult + " Thanks for recommendation";
    } else {
      surveyResult =
        surveyResult + " Sorry, can we know why you dont recommend?";
    }
  }
  if (custSatisfy != null) {
    if (custSatisfy.value.toLowerCase() === "satisfied") {
      surveyResult =
        surveyResult + " Thanks, you were satisfied with our service";
    } else if (custSatisfy.value.toLowerCase() === "undecided") {
      surveyResult =
        surveyResult + " ooh!, any clarification we can help you with?";
    } else if (custSatisfy.value.toLowerCase() === "unsatisfied") {
      surveyResult = surveyResult + " Sorry, what made you to be unsatisfied?";
    }
  }
  surveyResult = surveyResult + `we will contact you at ${email.value}.`;
  const summary = document.getElementById("summary");
  summary.innerText = surveyResult;
  console.log(surveyResult);
}
