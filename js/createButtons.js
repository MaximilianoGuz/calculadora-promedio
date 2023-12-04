// Create a new Button with atributes passed by parameter
function createButton(atributtes) {
  const button = document.createElement("button");

  for (const atributte in atributtes) {
    button.setAttribute(atributte, atributtes[atributte]);
  }

  return button;
}

export function createDeleteButton(trContainer, formContainer) {
  const attributes = {
    type: "button",
    class: "delete-matter",
    title: "Eliminar materia",
  };

  const tdButtons = document.createElement("td");
  const deleteButtonNew = createButton(attributes);

  deleteButtonNew.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  deleteButtonNew.addEventListener("click", (e) => {
    if (document.querySelectorAll(".container-matter").length > 1)
      formContainer.removeChild(trContainer);
  });

  tdButtons.appendChild(deleteButtonNew);

  return tdButtons;
}