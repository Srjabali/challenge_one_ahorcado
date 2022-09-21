
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML" ];
let tablero = document.getElementById("horca").getContext("2d");

let palabraSecreta = "";
let usedLetters = [];
let contadorFallos = 0;
let aciertos = 0;


function escojerPalabrasSecretas(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

document.addEventListener("keydown", e=>{

    //"key" hace que entrege el valor que uno ingresa
      
     let palabraIngresada = e.key.toUpperCase();
     console.log (palabraIngresada);
  
     //
     if(palabraIngresada.match(/^[a-zñ]$/i) && !usedLetters.includes(palabraIngresada)){
        usedLetters.push(palabraIngresada)
         
        console.log(usedLetters)
     
        tablero.font="70px Verdana";
        tablero.fillStyle = "#0a3871";
        tablero.textAlign="justify";
 
        let anchura = 600/palabraSecreta.length;
        let haFallado = true;
 
        for(let i=0; i<palabraSecreta.length; i++){
             
             if (palabraIngresada==palabraSecreta[i]){
                 
                 tablero.fillText(palabraSecreta[i],450 +(anchura*i), 620)
                 console.log(palabraSecreta)
                 haFallado = false;
                 aciertos++;
 
             }  
 
         }
 
         if(aciertos == palabraSecreta.length){
            tablero.fillText("you win!",150, 120)
         }
 
         if (haFallado){
 
             tablero.font="30px Verdana";
             let anchuraMalita = 600/10;
             tablero.fillText(palabraIngresada,470+(anchuraMalita*contadorFallos), 750)
             
             contadorFallos++;
             dibujarAhorcado(contadorFallos);
             console.log(contadorFallos)

             if(contadorFallos == 9){
                 alert("you lose")
             }
 
         }
 
     };
 
});

escojerPalabrasSecretas();



    // document.getElementById("start-button").style.display = "none";
    // document.getElementById("add-button").style.display = "none";
    // location.href = "game.html";




