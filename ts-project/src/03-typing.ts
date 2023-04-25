// Funcion anonima autoejecutada
(() => {
  // Inferido
  let myProduct = 'Product 1';
  let myProductPrice = 123;

  //Explicito
  let myProduct1: String = 'Product 1';
  let myProductPrice1: Number = 123;

  // da error porque no puedo asignar un numero a un String
  //myProduct = 154;
  myProduct.length;

  myProductPrice.toFixed(2)

  const myProductStock = 1000;

  //da errror porque una constante no se puede volver a reasignar
  //myProductStock = 255

})();
