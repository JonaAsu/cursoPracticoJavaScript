//creo un array solo con los salarios, se utiliza el metodo map para recorrer el array
const salariosCol = colombia.map(
   function (personita) {
      return personita.salary;
   }
);

//utilizando el metodo sort, creo un nuevo array con los salarios ordenados de forma creciente con la resta realizada
const salariosColSorted = salariosCol.sort(
   function (salaryA, salaryB) {
      return salaryA - salaryB;
   }
);

function calcularMediaAritmetica(lista) {
   const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
         return valorAcumulado + nuevoElemento;
      }
   );

   const promedioLista = sumaLista / lista.length;

   return promedioLista;
}

function esPar(numero) {
   return (numero % 2 === 0);
}


function medianaSalarios(lista) {
   const mitad = parseInt(lista.length / 2);

   if (esPar(lista.length)) {
      const personaMitad1 = lista[mitad - 1];
      const personaMitad2 = lista[mitad];

      const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

      return mediana;
   } else {
      const personaMitad = lista[mitad];

      return personaMitad;
   }
}

const medianaGeneral = medianaSalarios(salariosColSorted);



// Mediana de top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTop10 = salariosColSorted.splice(
   spliceStart,
   spliceCount,
);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log(
   medianaGeneral,
   medianaTop10,
);