export function createInputCredits(items) {
  const tdCredits = document.createElement("td");

  const inputCredits = document.createElement("input");
  inputCredits.setAttribute("type", "number");
  inputCredits.setAttribute("min", "0");
  inputCredits.setAttribute("max", "5");
  inputCredits.setAttribute("name", `matter-credits${items + 1}`);
  inputCredits.setAttribute("class", "matter-credits");
  inputCredits.setAttribute("placeholder", "Numero de creditos");
  inputCredits.setAttribute("required", "true");

  tdCredits.appendChild(inputCredits);

  return tdCredits;
}

export function createInputNote(items) {
  const tdNote = document.createElement("td");

  const inputNote = document.createElement("input");
  inputNote.setAttribute("type", "number");
  inputNote.setAttribute("min", "0");
  inputNote.setAttribute("max", "5");
  inputNote.setAttribute("step", "0.01");
  inputNote.setAttribute("name", `matter-note${items + 1}`);
  inputNote.setAttribute("class", "matter-note");
  inputNote.setAttribute("placeholder", "Nota");
  inputNote.setAttribute("required", "true");

  tdNote.appendChild(inputNote);

  return tdNote;
}
