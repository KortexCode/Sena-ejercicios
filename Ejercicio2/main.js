/*ELEMENTOS DEL DOM GLOBALES*/
const buttom = document.getElementById("btn");
const pMayoresEdad = document.getElementById("mayores-edad");
const pAdultoMayor = document.getElementById("adulto-mayor-edad");
const pMenoresEdad = document.getElementById("menores-edad");
const pMayorEdad = document.getElementById("edad-mayor");
const pMenorEdad = document.getElementById("edad-menor");
const pPromedio = document.getElementById("promedio");

/*LÓGICA DELPROGRAMA */
function adultoMayor(list) {
  //Calcula la cantidad de edades adulto mayor
  /*El método filter devolverá una lista con las edades mayores o iguales a 60 */
  const adultoMayor = list.filter((edad) => {
    if (edad >= 60) {
      return edad;
    }
  });
  return adultoMayor.length; //Se retorna la cantidad de edades encontradas
}
function menorDeEdad(list) {
  //Calcula la cantidad de edades menores de edad
  const menorDeEdad = list.filter((edad) => {
    if (edad < 18) {
      return edad;
    }
  });
  return menorDeEdad.length;
}
function mayorDeEdad(list) {
  //Calcula la cantidad de edades mayor de edad
  const mayorDeEdad = list.filter((edad) => {
    if (edad >= 18 && edad < 60) {
      return edad;
    }
  });
  return mayorDeEdad.length;
}
function calcularEdadMayor(list) {
  //Calcula la edad mayor ingresada
  let edadM = list[0]; //Se extrae la primera edad de la lista como edad mayor actual
  let esMayor = true;
  /*En cada ciclo se compara si la edad mayor actual es mayor o igual a la edad que se encuentre en el indice actual de la lista */
  for (let index = 0; index < list.length; index++) {
    if (edadM >= list[index]) {
      //Si se cumple, edadM siguen siendo mayor que la edad en el indice actual
      esMayor;
    } else {
      edadM = list[index]; //La edad en el indice actual es mayor que la edad edadM(edad mayor actual)
    }
  }
  return edadM; //Se retorna la edad mayor
}
function calcularEdadMenor(list) {
  //Calcula la edad menor ingresada
  let edadMe = list[0];
  let esMenor = true;
  for (let index = 0; index < list.length; index++) {
    if (edadMe <= list[index]) {
      esMenor;
    } else {
      edadMe = list[index];
    }
  }
  return edadMe;
}
function calcularPromedioDeEdades(list) {
  //Calcula el promedio de edades
  /*El método Reduce sumará todos los elementos dentro de la lista*/
  let sum = list.reduce(function (valorAnterior, valorActual) {
    return valorAnterior + valorActual;
  }, 0);
  let pro = sum / list.length; //Se calcula promedio
  return pro;
}

function caracterizarEdades(lista) {
  /*Las funciones retornan los datos solicitados */
  const cantidadAdultosMayores = adultoMayor(lista);
  const cantidadMenoresDeEdad = menorDeEdad(lista);
  const cantidadDeMayoresDeEdad = mayorDeEdad(lista);
  const edadMayor = calcularEdadMayor(lista);
  const edadMenor = calcularEdadMenor(lista);
  const promedio = calcularPromedioDeEdades(lista);

  /*Mostrar información en el Dom */
  pAdultoMayor.textContent =
    "Número de adultos mayores: " + cantidadAdultosMayores;
  pMayoresEdad.textContent =
    "Número de mayores de edad: " + cantidadDeMayoresDeEdad;
  pMenoresEdad.textContent =
    "Número de menores de edad: " + cantidadMenoresDeEdad;
  pMayorEdad.textContent = "Edad mayor ingresada: " + edadMayor;
  pMenorEdad.textContent = "Edad menor ingresada: " + edadMenor;
  pPromedio.textContent = "Promedio de edad: " + promedio;
}

/*Esta función solicita al usuario el ingreso de las edades de 10 personas*/
function ingresarEdades() {
  /*Se declaran variables */
  const listaEdades = [];
  let edadValida = true; //Para validar si una edad ingresada en válida
  let numPersona;
  /*El ciclo for se repite 10 veces para solicitar 10 edades*/
  for (let index = 0; index < 10; index++) {
    numPersona = index + 1;
    /*El ciclo Do While se repetirá si el usuario no ingresa una edad válida*/
    do {
      num = prompt("Ingresa la edad de la persona número " + numPersona); //Solicita la edad
      num = parseInt(num); //Se convierte a número entero

      if (isNaN(num)) {
        //Si no ingresa número
        edadValida = false;
        alert("Debes ingresar números enteros");
      } else if (num >= 1 && num <= 120) {
        //Si está entre el rango de 1 a 120 años
        listaEdades[index] = num;
        edadValida = true;
      } else {
        //Si está fuera de rango
        alert("Debes ingresar edades entre 1 y 120 años");
        edadValida = false;
      }
    } while (edadValida === false);
  }

  return listaEdades; //Retorna la lista de edades ingresada por el usuario
}

const listaDeEdades = ingresarEdades(); //Se ejecuta la función al inicio del programa

/*El bóton caracterizará las edades y mostrará los resultados en pantalla*/
buttom.addEventListener("click", () => {
  caracterizarEdades(listaDeEdades);
});
