const elementId = (id) => document.getElementById(id);

/*BOTONES*/
const btnTriangulo = elementId("form-caja1__button");

/*EVENTOS*/
btnTriangulo.addEventListener("click", calcularTriangulo);

function calcularTriangulo() {
  /*FORMUARIOS */
  const formTriangulo = elementId("form-caja1");

  const form = new FormData(formTriangulo);
  const base = form.get("base");
  const ladoA = form.get("lado-a");
  const ladoB = form.get("lado-b");
  const altura = form.get("altura");

  console.log(base, ladoA, ladoB, altura);
  console.log(inputTriBase, inputTriLadoA, inputTriLadoB, inputTriAltura);
}
