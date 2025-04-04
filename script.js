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

let frutas = ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja"]
console.log(frutas);

frutas.sort();
console.log(frutas);

function SingularAPlural(palabra) {    
    palabra = palabra + "s"
    return palabra
}

let frutasMayusculas = []
for (const fruta of frutas) {
    
    frutasMayusculas.push(SingularAPlural(fruta))
}

console.log(frutasMayusculas);
