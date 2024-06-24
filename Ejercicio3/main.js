/*LÓGICA DEL PROGRAMA*/
function ingresarNúmerosALista(lista, numlista) {
  let confirmado = true; //Para confirmar si el usuario debe repetir el ingreso de un número
  let numeroErrado; //Para confirmar si el usuario ingresó números menores a los ingresados
  let num; //Variable que guarda e ingreso de los números del usuario.

  for (let index = 0; index <= 4; index++) {
    const cont = index + 1;

    do {
      //Este ciclo repetirá el pedido al usuario si no se cumplen las condiciones
      num = prompt("Ingresa el " + cont + " número de la lista " + numlista);
      num = parseFloat(num); //Se convierte a número

      if (isNaN(num)) {
        //Si no ingresa números
        confirmado = false;
        alert("Debes ingresar números");
      } else {
        //Si el usuario ingresa números
        for (const item of lista) {
          if (num >= item) {
            //Si el número ingresado es mayor a los de la lista
            confirmado = true;
            numeroErrado = false;
          } else {
            //Si no es mayor a los de la lista
            confirmado = false;
            numeroErrado = true;
            break;
          }
        }
      }

      /*Indicamos al usuario que no debe ingresar números menores a los ya ingresados */
      if (numeroErrado === true) {
        alert("Debes ingresar números mayores a los que ya ingresaste");
      }
    } while (confirmado == false);

    /*Si sale del ciclo doWhile significa que podemos agregar el número a la lista*/
    lista[index] = num;
  }
}

function mezclarListasEnOrdenAbscendente(lista1, lista2) {
  const pListaMezclada = document.getElementById("listaM"); //Elemento del dom, párrafo
  let listaMezclada = []; //Lista donde se guardará la mezcla de las dos listas
  listaMezclada = [...lista1];
  lista2.map((num) => {
    //La funciòn map itera sobre cada item de la lista2
    for (let index = 0; index < listaMezclada.length; index++) {
      //itera segùn el tamaño actual de la lista mezclada
      if (num >= listaMezclada[listaMezclada.length - 1]) {
        listaMezclada.splice(listaMezclada.length, 0, num); //Agrega el número en la posición posterior al index
        return;
      }
      /*Si el número comparado es menor o igual al actual número de la lista mezclada se agregá a la lista mezclada */
      if (num <= listaMezclada[index]) {
        listaMezclada.splice(index, 0, num); //Agrega el número en la posición anterior al index
        return;
      }
    }
  });
  pListaMezclada.textContent = "Lista Final: " + listaMezclada.join(" - ");
}

function leerListas() {
  /*ELEMENTOS DEL DOM*/
  const pLista1 = document.getElementById("lista1");
  const pLista2 = document.getElementById("lista2");

  /*Se declaran dos listas vac+ias*/
  const lista1 = [];
  const lista2 = [];

  alert("Ingresa 5 números para dos listas de números de manera ascendente");

  /*Funciones*/
  ingresarNúmerosALista(lista1, 1); //Pide ingresar números a la lista 1
  ingresarNúmerosALista(lista2, 2); //Pide ingresar números a la lista 2
  /*Mostrar listas en el Documento */
  pLista1.textContent = "Lista primera: " + lista1.join(" - ");
  pLista2.textContent = "Lista segunda: " + lista2.join(" - ");
  mezclarListasEnOrdenAbscendente(lista1, lista2); //Mezcla las listas en orden ascendente
}

leerListas();
