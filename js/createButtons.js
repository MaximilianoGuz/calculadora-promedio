function createAddButton(createNewImputs){
    const addButtonNew = document.createElement("button");
    addButtonNew.setAttribute("type", "button");
    addButtonNew.setAttribute("class", "add-matter");
    addButtonNew.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  
    addButtonNew.addEventListener("click", (e) => {
      if (document.querySelectorAll(".container-matter").length <= 19)
        createNewImputs();
    });
  
    return addButtonNew;
  }
  
  function createDeleteButton(trContainer, formContainer) {
    const deleteButtonNew = document.createElement("button");
    deleteButtonNew.setAttribute("type", "button");
    deleteButtonNew.setAttribute("class", "delete-matter");
    deleteButtonNew.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  
    deleteButtonNew.addEventListener("click", (e) => {
      if (document.querySelectorAll(".container-matter").length > 1)
        formContainer.removeChild(trContainer);
    });
  
    return deleteButtonNew
  }
  
  export function createButtons(trContainer, formContainer, createNewImputs) {
    const tdButtons = document.createElement("td");
  
    const addButtonNew = createAddButton(createNewImputs);
    const deleteButtonNew = createDeleteButton(trContainer, formContainer);
  
    tdButtons.appendChild(addButtonNew);
    tdButtons.appendChild(deleteButtonNew);
  
    return tdButtons
  }