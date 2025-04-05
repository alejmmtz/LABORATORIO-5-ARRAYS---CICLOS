// Actividad 1

const opciones = ["PIEDRA", "PAPEL","TIJERA"]

function juego() {
    let jugar = true;
  
    while (jugar) {

      let computadora = opciones[Math.floor(Math.random() * 3)];
      let eleccion = prompt("Elige entre PIEDRA, PAPEL o TIJERA:").toUpperCase();
  
      console.log("Tu elección: " + eleccion);
      console.log("Elección de la computadora: " + computadora);
      
      
      if (eleccion === computadora) {
        console.log("¡ESTAMOS EMPATADOS!");
      } else if (
        (eleccion === "PIEDRA" && computadora === "TIJERA")||
        (eleccion === "PAPEL" && computadora === "PIEDRA")||
        (eleccion === "TIJERA" && computadora === "PAPEL")
      ) {
        console.log("¡FELICIDADES...GANASTE! 😄");
      } else {
        console.log("LO SIENTO...PERDISTE 🥺");
    }

    jugar = prompt("¿Quieres jugar de nuevo? responde (S/N)").toUpperCase()
    if (jugar === "S"){
        jugar = true
    } else (
        jugar = false,
        console.log("Gracias por jugar")
    )
}
}

//Para iniciar el ciclo se debe iniciar la función
//juego();


//Actividad 2

let frutas = ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja",]
console.log(frutas);

frutas.sort();

function SingularAPlural(palabra) {
  if (palabra.endsWith("s") === false) {
      palabra = palabra + "s";
  }
  return palabra;
}


let frutasPlural = []
for (const fruta of frutas) {
  frutasPlural.push(SingularAPlural(fruta))
}

console.log(frutasPlural);

function existeFruta(buscarfruta){
  if (frutas.includes(buscarfruta)) {
    return "true";
  } else {
    return "false";
  }
}

console.log(existeFruta("mango"))
console.log(existeFruta("uva"))
//Pruebas console.log(existeFruta("manzana"))
//Pruebas console.log(existeFruta("arandano"))

let frutasCortas = []
for (const fruta of frutas) {
  if (fruta.length <= 4) {
    frutasCortas.push(fruta);
  }
}

console.log(frutasCortas);

function eliminarFruta(buscarfruta) {
  if (frutas.includes(buscarfruta)){
    let borrar = frutas.indexOf(buscarfruta);
    frutas.splice(borrar,1);
    return "Eliminado";
  } else {
    return "false";
  }
}

console.log(eliminarFruta("mango"));
console.log(eliminarFruta("uva"));
console.log(eliminarFruta("kiwi"));
console.log(eliminarFruta("banano"));
console.log(eliminarFruta("perro caliente"));

console.log(frutas);
