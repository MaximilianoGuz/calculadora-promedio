import { createInput } from "./createInputs.js";
import { createDeleteButton } from "./createButtons.js";

const formToGetData = document.getElementById("form-data");
const formContainer = formToGetData.firstElementChild;

const cleanButton = document.getElementsByClassName("clean")[0];
const addButton = document.getElementsByClassName("add-matter")[0];

cleanButton.addEventListener("click", (e) => {
  if (!confirm("¿Estás seguro que quieres limpiar los datos?")) return;

  document.getElementsByClassName("container")[0].innerHTML = `
    <tr>
      <th>Num. créditos</th>
      <th>Nota</th>
      <th></th>
    </tr>
  `;
  createNewImputs();
  formContainer.scrollIntoView({ behavior: "smooth", block: "end" });
});

addButton.addEventListener("click", (e) => {
  if (document.querySelectorAll(".container-matter").length <= 19)
    createNewImputs();
});

formToGetData.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
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
});

createNewImputs();

function createNewImputs() {
  const trContainer = document.createElement("tr");
  trContainer.className = "container-matter";

  const items = document.querySelectorAll(".container-matter").length;

  let attributes = {
    type: "number",
    min: "0",
    max: "5",
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
