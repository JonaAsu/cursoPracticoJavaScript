const cupones = [
   {
      name: "soyBatman",
      discount: 15,
   },
   {
      name: "saintSeiya",
      discount: 20,
   },
   {
      name: "lostCanvas",
      discount: 25,
   },
];

function precioConDescuento(precio, descuento, cupon) {
   const porcentajeConDescuento = 100 - descuento - cupon;
   const precioFinal = (precio * porcentajeConDescuento) / 100;

   return precioFinal;
}

function fnPrecioDescuento() {
   const price = document.getElementById("inputPrice").value;
   const discount = document.getElementById("inputDiscount").value;

   const cupon = document.getElementById("inputCupon").value;

   const cuponValido = function (coupon) {
      return coupon.name === cupon;
   };

   const cuponUsuario = cupones.find(cuponValido);

   if (!cuponUsuario) {
      cuponDescuento.innerText = 'El cupón "' + cupon + '" no es válido';

      const precioFinal = precioConDescuento(price, discount, 0);

      resultPrice.innerText = "El precio final es: $" + precioFinal;
   }
   else {
      cuponDescuento.innerText = 'Obtuvo un descuento del ' + cuponUsuario.discount + '% por el cupon "' + cuponUsuario.name + '"';

      const precioFinal = precioConDescuento(price, discount, cuponUsuario.discount);

      resultPrice.innerText = "El precio final es: $" + precioFinal;
   }
}