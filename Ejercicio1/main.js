/*Función para obtener elementos del dom por ID*/
const elementId = (id) => document.getElementById(id);

/*BOTONES DEL FORMULARIO*/
const btnTriangulo = elementId("form-caja1__button");
const btnRectangulo = elementId("form-caja2__button");
const btnCuadrado = elementId("form-caja3__button");
const btnCirculo = elementId("form-caja4__button");

/*EVENTOS*/
btnTriangulo.addEventListener("click", calcularTriangulo);
btnRectangulo.addEventListener("click", calcularRectangulo);
btnCuadrado.addEventListener("click", calcularCuadrado);
btnCirculo.addEventListener("click", calcularCirculo);

/*LÓGICA PAR CALCULAR ÁREAS Y PERÍMETROS DE LAS FIGURAS*/
function calcularTriangulo() {
  const formTriangulo = elementId("form-caja1"); //Se obtiene el formulario del dom
  /*Etiquetas <p> donde se verán los resultados */
  const resultPerimetro = elementId("perimetro-tri");
  const resultArea = elementId("area-tri");
  /*El objeto FormData servirá para obtener los valores de los inputs */
  const form = new FormData(formTriangulo);
  /*Se obtienen los valores de los inputs y se convierten a número flotante*/
  const base = parseFloat(form.get("base"));
  const ladoA = parseFloat(form.get("lado-a"));
  const ladoB = parseFloat(form.get("lado-b"));
  const altura = parseFloat(form.get("altura"));
  /*Se insertan los resultados en las etiquetas */
  resultPerimetro.textContent = `${ladoA + ladoB + base} metros`;
  resultArea.textContent = `${(base * altura) / 2} metros cuadrados`;
}

function calcularRectangulo() {
  const formRectangulo = elementId("form-caja2");
  const resultPerimetro = elementId("perimetro-rect");
  const resultArea = elementId("area-rect");

  const form = new FormData(formRectangulo);
  const base = parseFloat(form.get("base"));
  const altura = parseFloat(form.get("altura"));

  resultPerimetro.textContent = `${(altura + base) * 2} metros`;
  resultArea.textContent = `${base * altura} metros cuadrados`;
}

function calcularCuadrado() {
  const formCuadrado = elementId("form-caja3");
  const resultPerimetro = elementId("perimetro-cuadra");
  const resultArea = elementId("area-cuadra");

  const form = new FormData(formCuadrado);
  const lado = parseFloat(form.get("lado"));

  resultPerimetro.textContent = `${lado * 4} metros`;
  resultArea.textContent = `${lado ** 2} metros cuadrados`;
}

function calcularCirculo() {
  const formCuadrado = elementId("form-caja4");
  const resultPerimetro = elementId("perimetro-circulo");
  const resultArea = elementId("area-circulo");

  const form = new FormData(formCuadrado);
  const r = form.get("radio");

  resultPerimetro.textContent = (2 * Math.PI * r ** 2).toFixed(2) + " metros";
  resultArea.textContent = (Math.PI * r ** 2).toFixed(2) + "metros cuadrados";
}
