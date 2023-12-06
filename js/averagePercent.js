import { createInput } from "./createInputs.js";
import { createDeleteButton } from "./createButtons.js";
import { createAddEventListeners } from "./addEventListeners.js";

const formToGetData = document.getElementById("form-data");
const formContainer = formToGetData.firstElementChild;
const dialogBox = document.getElementsByTagName("dialog")[0];
const dialogButton = document.getElementsByClassName("dialog-button")[0];

createAddEventListeners(createNewImputs, calculateAverage);
createNewImputs();

function createNewImputs() {
  const trContainer = document.createElement("tr");
  trContainer.className = "container-matter";

  const items = document.querySelectorAll(".container-matter").length;

  let attributes = {
    type: "number",
    min: "0",
    max: "100",
    step: "0.001",
    name: `matter-percent${items + 1}`,
    placeholder: "Porcentaje",
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

function calculateAverage(data) {
  const spanOfTheTotalAverage = document.getElementById("total-average");
  const pOfTheAverage = document.getElementsByClassName("average")[0];

  let total = 0;
  let sumPercent = 0;
  let instantPercent = 0;

  data.forEach((values, key) => {
    if (key.startsWith("matter-perc")) {
      if (values.includes(",")) values = values.replace(",", ".");
      sumPercent += parseFloat(values);
    }
  });

  if(sumPercent > 100 || sumPercent < 99.9899) {
    dialogBox.setAttribute("open", "true");
    dialogButton.addEventListener("click", () => dialogBox.close());
    return;
  }

  data.forEach((values, key) => {
    if (key.startsWith("matter-perc"))
      instantPercent = parseFloat(values) / 100;
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
