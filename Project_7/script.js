let btn = document.getElementsByTagName("button")[0];
let txbxs = document.querySelectorAll('input[type="text"]');
let result = document.getElementById("result");
let doc = document;
let idealSleep = 7 * 8;

console.log(txbxs);

btn.addEventListener("click", () => {
  calcSleepDeficit();
});

doc.addEventListener("DOMContentLoaded", () => {
  console.log("inside");
  txbxs.forEach((txbx) => {
    txbx.value = 0;
  });
});

function calcActualHrs() {
  let actHrs = 0;
  txbxs.forEach((txbx) => {
    actHrs += Number(txbx.value);
  });
  console.log(`Actual slept hrs: ${actHrs}`);
  return actHrs;
}

function calcSleepDeficit() {
  let deficit = 0;
  let actualSleepHrs = calcActualHrs();
  let msg = 0;
  console.log(idealSleep);
  deficit = idealSleep - actualSleepHrs;
  if (deficit === 0) {
    msg = `<h2>You are sleeping ${Math.abs(deficit)} hours ideal hours</h2>`;
    console.log(msg);
  } else if (deficit > 0) {
    msg = `<h2>You are sleeping ${Math.abs(
      deficit
    )} hours less than ideal hours</h2>`;
    console.log(msg);
  } else if (deficit < 0) {
    msg = `<h2>You are sleeping ${Math.abs(
      deficit
    )} hours more than ideal hours</h2>`;
    console.log(msg);
  }
  result.innerHTML = msg;
}
