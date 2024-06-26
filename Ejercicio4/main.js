/*Función para obtener elementos del dom por ID*/
const elementId = (id) => document.getElementById(id);

/*BOTONES DEL FORMULARIO*/
const btnFormulario = elementId("btn-form");
/* const btnRectangulo = elementId("form-caja2__button"); */

/*EVENTOS*/
btnFormulario.addEventListener("click", ingresarDatosDeEncuestado);
/* btnRectangulo.addEventListener("click", calcularRectangulo); */

/*DECLARACIÓN DE VARIABLES*/
let listaEncuestados = [];

/*LÓGICA PAR CALCULAR ÁREAS Y PERÍMETROS DE LAS FIGURAS*/
function guardarEncuestado({
  nombre,
  id,
  fecha,
  correo,
  ciudad,
  ciudadOrigen,
}) {
  const encuestado = {
    nombre,
    id,
    fecha,
    correo,
    ciudad,
    ciudadOrigen,
  };
  return encuestado;
}

function ingresarDatosDeEncuestado() {
  const form = elementId("form"); //Se obtiene el formulario del dom
  /*Etiquetas <p> donde se verán los resultados */

  /*El objeto FormData servirá para obtener los valores de los inputs */
  const formEncuesta = new FormData(form);
  /*Se obtienen los valores de los inputs y se convierten a número flotante*/
  const nombre = formEncuesta.get("nombre");
  const id = parseFloat(formEncuesta.get("id"));
  const fecha = formEncuesta.get("fecha");
  const correo = formEncuesta.get("correo");
  const ciudad = formEncuesta.get("ciudad");
  const ciudadOrigen = formEncuesta.get("ciudad-origen");

  if (form.checkValidity()) {
    const encuestado = guardarEncuestado({
      nombre,
      id,
      fecha,
      correo,
      ciudad,
      ciudadOrigen,
    });
    listaEncuestados.push(encuestado);
    console.log(listaEncuestados);
  } else {
    form.reportValidity();
  }
}
