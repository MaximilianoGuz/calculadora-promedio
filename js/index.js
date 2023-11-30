import { createInputCredits, createInputNote } from "./createInputs.js";
import { createButtons } from "./createButtons.js";

var formToGetData = document.getElementById("form-data");
var formContainer = formToGetData.firstElementChild;

formToGetData.addEventListener("submit", (e) => {
  e.preventDefault();
  // const data = Object.fromEntries(new FormData(e.target));

  const data = new FormData(e.target);

  let spanOfTheTotalAverage = document.getElementById("total-average");
  let pOfTheAverage = document.getElementsByClassName("average")[0];

  let total = 0;
  let sumCredits = 0;
  let instantPercent = 0;

  data.forEach((values, key) => {
    if (key.startsWith("matter-cred")) sumCredits += parseFloat(values);
  });

  data.forEach((values, key) => {
    if (key.startsWith("matter-cred"))
      instantPercent = parseFloat(values) / sumCredits;
    else {
      if (values.includes(",")) values = values.replace(",", ".");
      total += parseFloat(values) * instantPercent;
    }
  });

  total = total.toFixed(3);

  spanOfTheTotalAverage.textContent = total;

  if (total < 3) {
    pOfTheAverage.classList.remove("disapproved");
    pOfTheAverage.classList.add("approved");
  } else {
    pOfTheAverage.classList.remove("approved")
    pOfTheAverage.classList.add("disapproved");
  }
});

createNewImputs();

function createNewImputs() {
  const trContainer = document.createElement("tr");
  trContainer.className = "container-matter";

  const items = document.querySelectorAll(".container-matter").length;

  const tdCredits = createInputCredits(items);
  const tdNote = createInputNote(items);
  const tdButtons = createButtons(trContainer, formContainer, createNewImputs);

  trContainer.appendChild(tdCredits);
  trContainer.appendChild(tdNote);
  trContainer.appendChild(tdButtons);

  formContainer.appendChild(trContainer);
}

function calculateProm(data) {}
