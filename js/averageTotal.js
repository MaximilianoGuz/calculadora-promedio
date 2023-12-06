import { createInput } from "./createInputs.js";
import { createDeleteButton } from "./createButtons.js";
import { createAddEventListeners } from "./addEventListeners.js";

const formToGetData = document.getElementById("form-data");
const formContainer = formToGetData.firstElementChild;

createAddEventListeners(createNewImputs, calculateAverageTotal);
createNewImputs();

function createNewImputs() {
  const trContainer = document.createElement("tr");
  trContainer.className = "container-matter";

  const items = document.querySelectorAll(".container-matter").length;

  let attributes = {
    type: "number",
    min: "0",
    max: "20",
    name: `matter-credit${items + 1}`,
    placeholder: "Numero de creditos",
    required: "true",
  };
  const tdCredits = createInput(attributes);

  attributes = {
    type: "number",
    min: "0",
    max: "5",
    step: "0.001",
    name: `matter-note${items + 1}`,
    placeholder: "Nota",
    required: "true",
  };
  const tdNote = createInput(attributes);

  const tdButtons = createDeleteButton(trContainer, formContainer);

  trContainer.appendChild(tdCredits);
  trContainer.appendChild(tdNote);
  trContainer.appendChild(tdButtons);

  formContainer.appendChild(trContainer);
}

function calculateAverageTotal(data) {
  const spanOfTheTotalAverage = document.getElementById("total-average");
  const pOfTheAverage = document.getElementsByClassName("average")[0];

  let total = 0;
  let sumCredits = 0;
  let instantPercent = 0;

  data.forEach((values, key) => {
    if (key.startsWith("matter-cred")) sumCredits += parseInt(values);
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
    pOfTheAverage.classList.remove("approved");
    pOfTheAverage.classList.add("disapproved");
  }

  pOfTheAverage.scrollIntoView({ behavior: "smooth", block: "center" });
}
