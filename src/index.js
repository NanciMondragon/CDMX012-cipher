import cipher from './cipher.js';


const btnCifrar = document.getElementById("cifrar");

//evento cifrar
btnCifrar.addEventListener("click", function () {
  let mensaje = document.getElementById("mensaje").value;
  let offSet = document.getElementById("offSet").value;
  let mensaje2 = document.getElementById("mensaje2");
  mensaje2.innerHTML = cipher.encode(offSet, mensaje);

  //console.log(mensaje,offSet);

})

let btnDescifrar = document.getElementById("descifrar");

//evento descifrar
btnDescifrar.addEventListener("click", function () {
  let mensaje3 = document.getElementById("mensaje3").value;
  let offSet2 = document.getElementById("offSet2").value;
  let mensaje4 = document.getElementById("mensaje4");
  mensaje4.innerHTML = cipher.decode(offSet2, mensaje3);

  //console.log(mensaje,offSet); 
})
