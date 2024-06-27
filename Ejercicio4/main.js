/*Función para obtener elementos del dom por ID*/
const elementId = (id) => document.getElementById(id);

/*ELEMENTOS DEL DOM */

/*BOTONES DEL FORMULARIO*/
const btnFormulario = elementId("btn-form");
const btnOpcion1 = elementId("menu__opcion1-id");
const btnOpcion2 = elementId("menu__opcion2-id");
const botonVolverInterfazMostrarEncuestado = elementId("btn-volver");
const botonVolverInterfazAgregarEncuestado = elementId("btn-form-volver");

/*EVENTOS*/
btnFormulario.addEventListener("click", ingresarDatosDeEncuestado);
btnOpcion1.addEventListener("click", openMenuAgregar);
btnOpcion2.addEventListener("click", openMenuConsultar);
botonVolverInterfazAgregarEncuestado.addEventListener(
  "click",
  cerrarMenuAgregar
);
botonVolverInterfazMostrarEncuestado.addEventListener(
  "click",
  cerrarMenuConsultar
);

/*DECLARACIÓN DE VARIABLES*/
let listaEncuestados = [];

/*LÓGICA PAR CALCULAR ÁREAS Y PERÍMETROS DE LAS FIGURAS*/
function openMenuAgregar() {
  const interfazAgregarEcuestado = elementId("interfazAgregar");
  const interfazMenu = elementId("menu-id");
  interfazAgregarEcuestado.classList.add("abrir-menu-ingreso-datos");
  interfazMenu.classList.add("cerrar-menu");
}
function openMenuConsultar() {
  const interfazMostrarEcuestado = elementId("interfazMostrar");
  const interfazMenu = elementId("menu-id");
  interfazMostrarEcuestado.classList.add("abrir-menu-mostrar-datos");
  interfazMenu.classList.add("cerrar-menu");
}
function cerrarMenuAgregar() {
  const interfazMostrarEcuestado = elementId("interfazAgregar");
  const interfazMenu = elementId("menu-id");
  interfazMostrarEcuestado.classList.remove("abrir-menu-ingreso-datos");
  interfazMenu.classList.remove("cerrar-menu");
}
function cerrarMenuConsultar() {
  const interfazMostrarEcuestado = elementId("interfazMostrar");
  const interfazMenu = elementId("menu-id");
  interfazMostrarEcuestado.classList.remove("abrir-menu-mostrar-datos");
  interfazMenu.classList.remove("cerrar-menu");
}

function guardarEncuestado({
  nombre,
  id,
  fecha,
  correo,
  ciudad,
  ciudadOrigen,
  canciones: [
    { nombreCancion1, nombreArtista1 },
    { nombreCancion2, nombreArtista2 },
    { nombreCancion3, nombreArtista3 },
  ],
}) {
  const encuestado = {
    nombre,
    id,
    fecha,
    correo,
    ciudad,
    ciudadOrigen,
    canciones: [
      { nombreCancion1, nombreArtista1 },
      { nombreCancion2, nombreArtista2 },
      { nombreCancion3, nombreArtista3 },
    ],
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
  const nombreCancion1 = formEncuesta.get("cancion1");
  const nombreArtista1 = formEncuesta.get("artista1");
  const nombreCancion2 = formEncuesta.get("cancion2");
  const nombreArtista2 = formEncuesta.get("artista2");
  const nombreCancion3 = formEncuesta.get("cancion3");
  const nombreArtista3 = formEncuesta.get("artista3");

  if (form.checkValidity()) {
    const encuestado = guardarEncuestado({
      nombre,
      id,
      fecha,
      correo,
      ciudad,
      ciudadOrigen,
      canciones: [
        { nombreCancion1, nombreArtista1 },
        { nombreCancion2, nombreArtista2 },
        { nombreCancion3, nombreArtista3 },
      ],
    });
    listaEncuestados.push(encuestado);
    agregarASeleccionador(listaEncuestados);
    alert("Ingreso Exitoso");
  } else {
    form.reportValidity();
  }
}
function agregarASeleccionador(listaE) {
  const selector = elementId("selector-encuestado");
  const fragment = new DocumentFragment();
  selector.innerText = "";
  for (let index = 0; index < listaE.length; index++) {
    const option = document.createElement("option");
    option.value = listaE[index].id;
    option.textContent = listaE[index].nombre;
    fragment.appendChild(option);
    selector.append(fragment);
  }
}
function MostrarDatosDeEncuestado() {}
