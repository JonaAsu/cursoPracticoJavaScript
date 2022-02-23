var lista = new Array();

function agregarValor() {
   const newItem = parseInt(document.getElementById("value-array").value);

   var nuevalista = lista.push(newItem);

   document.getElementById("value-array").value = "";
}

function mostrarArray() {
   listaIngresada.innerText = "Se ha ingresado la siguiente lista de datos: " + lista;
}


// Inicio Promedio
function calcularMediaAritmetica(lista) {
   const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
         return valorAcumulado + nuevoElemento;
      }
   );

   const promedioLista = sumaLista / lista.length;

   return promedioLista;
}


function promedioCalcular() {
   const promedioLista = calcularMediaAritmetica(lista);

   mediaAritmetica.innerText = "El promedio de la lista ingresada es igual a " + promedioLista;
}
// Fin Promedio


// Inicio Mediana


function calcularMediana(lista) {
   const mitadLista = parseInt(lista.length / 2);

   function esPar(numero) {
      if(numero % 2 === 0) {
         return true;
      } else {
         return false;
      }
   }

   let mediana;

   if(esPar(lista.length)) {
      const elemento1 = lista[mitadLista - 1];
      const elemento2 = lista[mitadLista];

      const promedioMediana = calcularMediaAritmetica([elemento1, elemento2,]);

      mediana = promedioMediana;
   } else {
      mediana = lista[mitadLista];
   }

   return mediana;
}

function medianaCalcular() {
   const mediana = calcularMediana(lista);

   medianaCalculada.innerText = "La mediana de la lista ingresada: " + mediana;
}
//Fin Mediana


// Inicio Moda
function calcularModa(lista) {
   const listaCount = {};

   lista.map(
      function (elemento) {
         if(listaCount[elemento]) {
            listaCount[elemento] += 1; 
         } else {
            listaCount[elemento] = 1;
         }
      }
   );

   const listaArray = Object.entries(listaCount).sort(
      function (valorAcumulado, nuevoValor) {
         return valorAcumulado[1] - nuevoValor[1];
      }
   );

   const moda = listaArray[listaArray.length - 1];

   return moda;
}

function modaCalcular() {
   const moda = calcularModa(lista);

   modaCalculada.innerText = "El valor modal es: " + moda;
}
// Fin Moda