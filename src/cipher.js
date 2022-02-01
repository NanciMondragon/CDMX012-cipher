const cipher = {
  encode: (offSet, mensaje) => {
    //manda el mensaje en mayuscula
    let texto = mensaje.toUpperCase();
    //console.log(texto)
    //Es vacio para ir guardando lo que realiza el buqle y el condicional
    let nuevoMensaje = '';
    //recorre el ciclo para el string (cadena)
    for (let i = 0; i < texto.length; i++) {
      //devuelva el valor en codigo ASCII
      let letraAscii = texto.charCodeAt(i);
      //console.log(letraAscii)
      //validar parametro de mayusculas
      if (letraAscii >= 65 && letraAscii <= 90) {
        //realizar fomula cipher
        let letraCifrada = ((letraAscii - 65 + parseInt(offSet)) % 26 + 65);
        //guardar en una nueva variable, lo debe convertir de ASCCI a String (cadena)
        let nuevaLetra = String.fromCharCode(letraCifrada);
        //Variable inicial en 0 (+=) agrega lo que devuelve la nueva palabra 
        nuevoMensaje += nuevaLetra;
        //console.log(nuevoMensaje)
      } else {
        //valida parametros de puntuación
        if (letraAscii >= 34 && letraAscii <= 47) {
          nuevoMensaje += String.fromCharCode((letraAscii - 34 + parseInt(offSet)) % 14 + 34);
        } else {
          //valida parametros de numeración
          if (letraAscii >= 48 && letraAscii <= 57) {
            nuevoMensaje += String.fromCharCode((letraAscii - 48 + parseInt(offSet)) % 10 + 48);
          } else {
            //valida parametros de signo
            if (letraAscii >= 58 && letraAscii <= 63) {
              nuevoMensaje += String.fromCharCode((letraAscii - 58 + parseInt(offSet)) % 6 + 58);
            } else {
              //valida parametros de corchete
              if (letraAscii >= 91 && letraAscii <= 96) {
                nuevoMensaje += String.fromCharCode((letraAscii - 91 + parseInt(offSet)) % 6 + 91);
              } else {
                //valida parametros de minuscula
                if (letraAscii >= 97 && letraAscii <= 122) {
                  nuevoMensaje += String.fromCharCode((letraAscii - 97 + parseInt(offSet)) % 26 + 97);
                } else {
                  //valida parametros de llave
                  if (letraAscii >= 123 && letraAscii <= 126) {
                    nuevoMensaje += String.fromCharCode((letraAscii - 123 + parseInt(offSet)) % 4 + 123);
                  } else {
                    nuevoMensaje = nuevoMensaje + texto[i];
                  }
                }
              }
            }
          }
        }
      }

    }
    return nuevoMensaje;
  },

  decode: (offSet2, mensaje3) => {
    //manda el mensaje en mayuscula
    let texto2 = mensaje3.toUpperCase();
    //console.log(texto2)

    //Es vacio para ir guardando lo que realiza el buqle y el condicional
    let nuevoMensaje2 = '';
    //recorre el ciclo para el string (cadena)
    for (let i = 0; i < texto2.length; i++) {
      //devuelva el valor en codigo ASCII
      let letraAscii2 = texto2.charCodeAt(i);
      //console.log(letraAscii2)
      //validar se encuentra entre este parametro
      if (letraAscii2 >= 65 && letraAscii2 <= 90) {
        //realizar fomula cipher
        let letraDescifrada = ((letraAscii2 - 90 - parseInt(offSet2)) % 26 + 90);
        //guardar en una nueva variable, lo debe convertir de ASCCI a String (cadena)
        let nuevaLetra2 = String.fromCharCode(letraDescifrada);
        //Variable inicial en 0 (+=) agrega lo que devuelve la nueva palabra 
        nuevoMensaje2 += nuevaLetra2;
        //console.log(nuevoMensaje2)
      } else {
        //valida parametros de puntuación
        if (letraAscii2 >= 34 && letraAscii2 <= 47) {
          nuevoMensaje2 += String.fromCharCode((letraAscii2 - 47 - parseInt(offSet2)) % 14 + 47);
        } else {
          //valida parametros de numeración
          if (letraAscii2 >= 48 && letraAscii2 <= 57) {
            nuevoMensaje2 += String.fromCharCode((letraAscii2 - 57 - parseInt(offSet2)) % 10 + 57);
          } else {
            //valida parametros de signo
            if (letraAscii2 >= 58 && letraAscii2 <= 63) {
              nuevoMensaje2 += String.fromCharCode((letraAscii2 - 63 - parseInt(offSet2)) % 6 + 63);
            } else {
              //valida parametros de corchete
              if (letraAscii2 >= 91 && letraAscii2 <= 96) {
                nuevoMensaje2 += String.fromCharCode((letraAscii2 - 96 - parseInt(offSet2)) % 6 + 96);
              } else {
                //valida parametros de minuscula
                if (letraAscii2 >= 97 && letraAscii2 <= 122) {
                  nuevoMensaje2 += String.fromCharCode((letraAscii2 - 122 - parseInt(offSet2)) % 26 + 122);
                } else {
                  //valida parametros de llave
                  if (letraAscii2 >= 123 && letraAscii2 <= 126) {
                    nuevoMensaje2 += String.fromCharCode((letraAscii2 - 126 - parseInt(offSet2)) % 4 + 126);
                  } else {
                    nuevoMensaje2 = nuevoMensaje2 + texto2[i];
                  }
                }
              }
            }
          }
        }
      }


    }
    return nuevoMensaje2;
  }
  
};

export default cipher;