formToGetData = document.getElementById("form-data");
formContainer = formToGetData.firstElementChild;

createNewImputs();

function createNewImputs() {
  const divContainer = document.createElement("div");
  divContainer.className = "container-matter";

  items = document.querySelectorAll(".container-matter").length;

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", `matter-name${items + 1}`);
  inputName.setAttribute("class", "matter-name");
  inputName.setAttribute("placeholder", "Materia");

  const inputCredits = document.createElement("input");
  inputCredits.setAttribute("type", "number");
  inputCredits.setAttribute("name", `matter-credits${items + 1}`);
  inputCredits.setAttribute("class", "matter-credits");
  inputCredits.setAttribute("placeholder", "Numero de creditos");

  const inputNote = document.createElement("input");
  inputNote.setAttribute("type", "number");
  inputNote.setAttribute("name", `matter-note${items + 1}`);
  inputNote.setAttribute("class", "matter-note");
  inputNote.setAttribute("placeholder", "Nota");

  const addButtonNew = document.createElement("button");
  addButtonNew.setAttribute("type", "button");
  addButtonNew.setAttribute("class", "add-matter");
  addButtonNew.textContent = "+";

  const deleteButtonNew = document.createElement("button");
  deleteButtonNew.setAttribute("type", "button");
  deleteButtonNew.setAttribute("class", "delete-matter");
  deleteButtonNew.textContent = "X";

  divContainer.appendChild(inputName);
  divContainer.appendChild(inputCredits);
  divContainer.appendChild(inputNote);
  divContainer.appendChild(addButtonNew);
  divContainer.appendChild(deleteButtonNew);

  formContainer.appendChild(divContainer);

  addButtonNew.addEventListener("click", createNewImputs);

  deleteButtonNew.addEventListener("click", (e) => {
    if (document.querySelectorAll(".container-matter").length > 1)
      formContainer.removeChild(e.target.parentElement);
  });
}
