const elementId = (id) => document.getElementById(id);

/*BOTONES*/
const btnTriangulo = elementId("form-caja1__button");
const btnRectangulo = elementId("form-caja2__button");

/*EVENTOS*/
btnTriangulo.addEventListener("click", calcularTriangulo);
btnRectangulo.addEventListener("click", calcularRectangulo);

function calcularTriangulo() {
  /*FORMUARIOS */
  const formTriangulo = elementId("form-caja1");
  const resultPerimetro = elementId("perimetro-tri");
  const resultArea = elementId("area-tri");

  const form = new FormData(formTriangulo);
  const base = parseFloat(form.get("base"));
  const ladoA = parseFloat(form.get("lado-a"));
  const ladoB = parseFloat(form.get("lado-b"));
  const altura = parseFloat(form.get("altura"));

  resultPerimetro.textContent = `${ladoA + ladoB + base} metros`;
  resultArea.textContent = `${(base * altura) / 2} metros cuadrados`;
}
function calcularRectangulo() {
  /*FORMUARIOS */
  const formRectangulo = elementId("form-caja2");
  const resultPerimetro = elementId("perimetro-rect");
  const resultArea = elementId("area-rect");

  const form = new FormData(formRectangulo);
  const base = parseFloat(form.get("base"));
  const altura = parseFloat(form.get("altura"));

  resultPerimetro.textContent = `${(altura + base) * 2} metros`;
  resultArea.textContent = `${base * altura} metros cuadrados`;
}