var formToGetData = document.getElementById("form-data");
var formContainer = formToGetData.firstElementChild;

createNewImputs();

function createNewImputs() {
  const trContainer = document.createElement("tr");
  trContainer.className = "container-matter";

  items = document.querySelectorAll(".container-matter").length;

  const tdCredits = document.createElement("td");

  const inputCredits = document.createElement("input");
  inputCredits.setAttribute("type", "number");
  inputCredits.setAttribute("name", `matter-credits${items + 1}`);
  inputCredits.setAttribute("class", "matter-credits");
  inputCredits.setAttribute("placeholder", "Numero de creditos");
  inputCredits.setAttribute("required", "true");

  tdCredits.appendChild(inputCredits);

  const tdNote = document.createElement("td");

  const inputNote = document.createElement("input");
  inputNote.setAttribute("type", "number");
  inputNote.setAttribute("name", `matter-note${items + 1}`);
  inputNote.setAttribute("class", "matter-note");
  inputNote.setAttribute("placeholder", "Nota");
  inputNote.setAttribute("required", "true");

  tdNote.appendChild(inputNote);

  const tdButtons = document.createElement("td");

  const addButtonNew = document.createElement("button");
  addButtonNew.setAttribute("type", "button");
  addButtonNew.setAttribute("class", "add-matter");
  addButtonNew.innerHTML = `<i class="fa-solid fa-plus"></i>`;

  const deleteButtonNew = document.createElement("button");
  deleteButtonNew.setAttribute("type", "button");
  deleteButtonNew.setAttribute("class", "delete-matter");
  deleteButtonNew.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  addButtonNew.addEventListener("click", (e) => {
    if (document.querySelectorAll(".container-matter").length <= 19)
      createNewImputs();
  });

  deleteButtonNew.addEventListener("click", (e) => {
    if (document.querySelectorAll(".container-matter").length > 1)
      formContainer.removeChild(trContainer);
  });

  tdButtons.appendChild(addButtonNew);
  tdButtons.appendChild(deleteButtonNew);
  
  trContainer.appendChild(tdCredits);
  trContainer.appendChild(tdNote);
  trContainer.appendChild(tdButtons);

  formContainer.appendChild(trContainer);
}
