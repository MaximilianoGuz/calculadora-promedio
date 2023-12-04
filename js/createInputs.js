// Create a new input with atributes passed by parameter
export function createInput(atributtes) {
  const td = document.createElement("td");

  const input = document.createElement("input");

  for (const atributte in atributtes) {
    input.setAttribute(atributte, atributtes[atributte]);
  }

  td.appendChild(input);

  return td;
}