import { createInputCredits, createInputNote } from "./createInputs.js";
import { createButtons } from "./createButtons.js";

var formToGetData = document.getElementById("form-data");
var formContainer = formToGetData.firstElementChild;

formToGetData.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  console.log(data);
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
