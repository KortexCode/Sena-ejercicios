/*Función para obtener elementos del dom por ID*/
const elementId = (id) => document.getElementById(id);

/*ELEMENTOS DEL DOM */
/*Seleccionador */
const selector = elementId("selector-encuestado");
/*Botones del formulario*/
const btnOpcion1 = elementId("menu__opcion1-id"); //Botón para ir al menú Ingresar datos
const btnOpcion2 = elementId("menu__opcion2-id"); //Bitón para ir al menú Mostrar datos
const btnFormulario = elementId("btn-form"); //Botón ingresar datos
const botonVolverInterfazMostrarEncuestado = elementId("btn-volver"); //Botón volver
const botonVolverInterfazAgregarEncuestado = elementId("btn-form-volver"); //Botón volver

/*EVENTOS*/
btnFormulario.addEventListener("click", ingresarDatosDeEncuestado); //Llama a la función guarda los datos
/*Eventos para abrir y cerrar menús */
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
/*Evento para detectar cambios en el seleccionador */
selector.addEventListener("change", MostrarDatosDeEncuestado);

/*DECLARACIÓN DE VARIABLES*/
let listaEncuestados = []; //Aquí se guardarán los encuestados con su información

/*LÓGICA DEL PROGRAMA*/
/*FUNCIONES QUE ABREN Y CIERRAN MENÚS*/
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
/*FUNCIÓN QUE CREA EL OBJETO CON LOS DATOS DEL ENCUESTADO*/
function guardarEncuestado({
  nombre,
  id,
  fecha,
  correo,
  ciudad,
  ciudadOrigen,
  cancion1,
  cancion2,
  cancion3,
}) {
  /*Primero se verifica que no haya un encuestado con el mismo id */
  const existeEncuestado = listaEncuestados.some((item) => item.id === id);
  if (existeEncuestado) {
    alert("Ya existe una persona con el mismo id");
    return;
  }
  /*Si no hay id repetidos se prosigue guardando los datos del encuestado en un objeto */
  const encuestado = {
    nombre,
    id,
    fecha,
    correo,
    ciudad,
    ciudadOrigen,
    cancion1,
    cancion2,
    cancion3,
  };
  /*Valida si ya se ingresaron 6 encuestados*/
  if (listaEncuestados.length === 6) {
    btnFormulario.disabled = true;
    alert("No puedes registrar más de 6 personas");
    return;
  }
  /*Se agrega el objeto del encuestado a la lista*/
  listaEncuestados.push(encuestado);
  /*Agrega una opción en el seleccionador con información del encuestado*/
  agregarASeleccionador(listaEncuestados);
  alert("Ingreso Exitoso");
}
/*FUNCIÓN QUE OBTIENE LOS DATOS DEL FORMULARIO Y ASIGNA LOS ENCUESTADOS A LA LISTA*/
function ingresarDatosDeEncuestado() {
  const form = elementId("form"); //Se obtiene el formulario del dom

  /*El objeto FormData servirá para obtener los valores de los inputs */
  const formEncuesta = new FormData(form);
  /*Se obtienen los valores de los inputs */
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
  /*Se valida que los campos del formulario estén todos llenos */
  if (form.checkValidity()) {
    guardarEncuestado({
      //Se manda a guardar al encuestado
      nombre,
      id,
      fecha,
      correo,
      ciudad,
      ciudadOrigen,
      cancion1: `${nombreCancion1} - ${nombreArtista1}`,
      cancion2: `${nombreCancion2} - ${nombreArtista2}`,
      cancion3: `${nombreCancion3} - ${nombreArtista3}`,
    });
  } else {
    form.reportValidity();
  }
}
/*ESTA FUNCIÓN AGREGA AL SELECCIONADOR */
function agregarASeleccionador(listaE) {
  const optionVacio = document.createElement("option"); //option vacía
  const fragment = new DocumentFragment(); //Se crea un fragmento
  fragment.append(optionVacio); //Agregamos la opción vacía
  selector.innerText = ""; //Se borran siempre todas las opciones
  /*El ciclo crea las opciones y las agrega a la etiqueta <select>, recorre la lista de encuestados */
  for (let index = 0; index < listaE.length; index++) {
    const option = document.createElement("option");
    option.value = listaE[index].id; //El valor de la opción será el id del encuestado
    option.textContent = listaE[index].nombre; //El texto de la opción será el nombre del encuestado
    fragment.appendChild(option);
  }
  selector.append(fragment); //Agrega todas las opciones al selector
}
/*LA FUNCIÓN SE ENCARGARÁ DE MOSTRAR LOS DATOS DEL ENCUESTADO SEGÚN LA SELECCIÓN */
function MostrarDatosDeEncuestado() {
  /*Se necesita agregar los datos a las etiquetas p de la interfaz de mostrar datos */
  const listaParrafos = document.getElementsByClassName(
    //Se optienen todas las etiquetas p
    "mostrar-datos__encuestado"
  );
  const newListaParrafos = [...listaParrafos];
  const indiceSelector = selector.selectedIndex; //Se obtiene indice del selector
  const idEncuestado = selector.options[indiceSelector].value; //Se obtiene el valor de la opción
  const encuestadoFiltrado = listaEncuestados.filter(
    //Se filtra el encuestado validando el id
    (item) => item.id === parseFloat(idEncuestado)
  );
  const encuestado = encuestadoFiltrado[0]; //Obtenemos el encuestado sacándolo del array
  /*Si se selecciona la opción vacía se deben borrar los datos de las etiquetas <p>*/
  if (!encuestado) {
    for (const p of newListaParrafos) {
      p.textContent = "....";
    }
    return;
  }
  /*Obtenemos un array con los valores de las propiedades del objeto del encuestado */
  const valoresObjetoEncuestado = Object.values(encuestado);
  /*Recorremos el el array para guardar cada valor en cada etiqueta <p> */
  for (let index = 0; index < valoresObjetoEncuestado.length; index++) {
    const parrafo = newListaParrafos[index];
    parrafo.textContent = valoresObjetoEncuestado[index];
  }
}
