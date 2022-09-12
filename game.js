
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML" ];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";

function escojerPalabrasSecretas(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

escojerPalabrasSecretas();


    // document.getElementById("start-button").style.display = "none";
    // document.getElementById("add-button").style.display = "none";
    // location.href = "game.html";




