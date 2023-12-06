const formToGetData = document.getElementById("form-data");
const formContainer = formToGetData.firstElementChild;

const cleanButton = document.getElementsByClassName("clean")[0];
const addButton = document.getElementsByClassName("add-matter")[0];

export function createAddEventListeners(createNewImputs, calculateFunction) {
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
    calculateFunction(data);
  });
}
