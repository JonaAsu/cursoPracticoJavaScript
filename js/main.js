//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
   return lado * 4;
}

function areaCuadrado(lado) {
   return lado * lado;
}

console.groupEnd();


//Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
   return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}

function areaTriangulo(base, altura) {
   return (base * altura) / 2;
}

function alturaTriangulo(lado1, lado2, lado3) {
   if(lado1 == lado2){
      if(lado1 != lado3){
         return Math.sqrt(((lado1 * lado1) - ((lado3 * lado3) / 4)));
      }
      else{
         return "La dimension de los lados no responde a un triangulo isoseles";
      }
   }
   else if(lado1 == lado3){
      return Math.sqrt(((lado1 * lado1) - ((lado2 * lado2) / 4)));
   }
   else if(lado2 == lado3) {
      return Math.sqrt(((lado2 * lado2) - ((lado1 * lado1) / 4)));
   }
   else{
      return "La dimension de los lados no responde a un triangulo isoseles";
   }
}

console.groupEnd();


//Codigo del Circulo
console.group("Circulos");

const PI = Math.PI;

function diametroCirculo(radio) {
   return radio * 2;
}

function circunferenciaCirculo(radio) {
   const diametro = diametroCirculo(radio);

   return diametro * PI;
}

function areaCirculo(radio) {
   return (radio * radio) * PI;
}

console.groupEnd();


//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
   const input = document.getElementById("inputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);

   alert(perimetro);
}

function calcularAreaCuadrado() {
   const input = document.getElementById("inputCuadrado");
   const value = input.value;

   const area = areaCuadrado(value);

   alert(area);
}

function calcularPerimetroTriangulo(){
   const lado1 = document.getElementById("inputTrianguloLado1").value;
   const lado2 = document.getElementById("inputTrianguloLado2").value;
   const base = document.getElementById("inputTrianguloBase").value;

   const perimetro = perimetroTriangulo(lado1, lado2, base);

   alert(perimetro);
}

function calcularAreaTriangulo() {
   const base = document.getElementById("inputTrianguloBase").value;
   const altura = document.getElementById("inputTrianguloAltura").value;

   const area = areaTriangulo(base, altura);

   alert(area);
}

function calcularDiametroCirculo(){
   const radio = document.getElementById("inputCirculo").value;

   const diametro = diametroCirculo(radio);

   alert(diametro);
}

function calcularCircunferenciaCirculo(){
   const radio = document.getElementById("inputCirculo").value;

   const circunferencia = circunferenciaCirculo(radio);

   alert(circunferencia);
}

function calcularAreaCirculo() {
   const radio = document.getElementById("inputCirculo").value;

   const area = areaCirculo(radio);

   alert(area);
}


function calcularAlturaTriangulo(){
   const lado1 = document.getElementById("inputTrianguloIsoLado1").value;
   const lado2 = document.getElementById("inputTrianguloIsoLado2").value;
   const lado3 = document.getElementById("inputTrianguloIsoLado3").value;

   const altura = alturaTriangulo(lado1, lado2, lado3);

   alert(altura);
}