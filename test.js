let palabras = ["ONE", "ALURA", "ORACLE", "JAVASCRIPT", "HTML" ];

let tablero = document.getElementById("keya").getContext("2d");

function escojerPalabrasSecretas(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabra)
}
let usedLetters = [];
let contadorFallos = 0;

document.addEventListener("keydown", e=>{
    
    let palabraIngresada = e.key.toUpperCase();
    console.log (palabraIngresada);
 
    //
    if(palabraIngresada.match(/^[a-zñ]$/i) && !usedLetters.includes(palabraIngresada)){
        console.log("hola")
        console.log(usedLetters)
    };
});
//         tablero.font="70px Verdana";
//         tablero.fillStyle = "#0a3871";
//         tablero.textAlign="justify";
//         let anchura = 600/palabraSecreta.length;
//         let haFallado = true;

//         for(let i=0; i<palabraSecreta.length; i++){
            
//             if (palabraIngresada==palabraSecreta[i]){
                
//                 tablero.fillText(palabraSecreta[i],450 +(anchura*i), 620)
//                 console.log(palabraSecreta)
//                 haFallado = false;

//             }  

//         }

//         if (haFallado){

//             tablero.font="30px Verdana";
//             let anchuraMalita = 600/10;
//             tablero.fillText(palabraIngresada,470+(anchuraMalita*contadorFallos), 750)
            
//             contadorFallos++;
//             dibujarAhorcado(contadorFallos);
//             console.log(contadorFallos)
//             if(contadorFallos == 9){
//                 alert("you lose")
//             }

//         }

//         else r=0;
// }
// });

// function dibujarCanvas(){
//     tablero.lineWidth = 8;
//     tablero.lineCap = "round";
//     tablero.lineJoin = "round";
//     tablero.fillStyle = "#f3f5fc";
//     tablero.strokeStyle = "#0a3871";

//     tablero.fillRect(0, 0, 1200, 860);
//     tablero.beginPath();
//     tablero.moveTo(600, 500);
//     tablero.lineTo(850, 500);
//     tablero.stroke();
//     tablero.closePath();
// }
// function dibujarLinea(){
//     tablero.lineWidth = 6;
//     tablero.lineCap = "round";
//     tablero.lineJoin = "round";
//     tablero.fillStyle = "#f3f5fc";
//     tablero.strokeStyle = "#0a3871";

//     let anchura = 600/palabraSecreta.length;

//     for (i = 0; i < palabraSecreta.length; i++){
//         tablero.moveTo(450 + (anchura * i), 640)
//         tablero.lineTo(500 + (anchura * i), 640)
//     }
//     tablero.stroke();
//     tablero.closePath();
// }
// function dibujarAhorcado(contadorFallos){

//     tablero.lineWidth = 8;
//     tablero.lineCap = "round";
//     tablero.lineJoin = "round";
//     tablero.fillStyle = "#f3f5fc";
//     tablero.strokeStyle = "#0a3871";

//     tablero.beginPath();

//     switch(contadorFallos){
//         //Soporte
//         case 1:
//             tablero.moveTo(650, 500);
//             tablero.lineTo(650, 100);
//             break;
//         //Soporte 2
//         case 2:
//             tablero.moveTo(650, 100);
//             tablero.lineTo(800, 100);
//             break;
//         //soporte 3
//         case 3:
//             tablero.moveTo(800, 100);
//             tablero.lineTo(800, 150);
//             break;
//         //cabeza
//         case 4:
//             tablero.arc(800,190,40,5,12*Math.PI);
//             break;
//         //cuerpo
//         case 5:
//             tablero.moveTo(800, 230);
//             tablero.lineTo(800, 400);
//             break;
//         //Brazo derecho
//         case 6:
//             tablero.moveTo(800, 230);
//             tablero.lineTo(850, 300);
//             break;
//         //brazo izquierdo
//         case 7:
//             tablero.moveTo(800, 230);
//             tablero.lineTo(750, 300);
//             break;
//         //pierna derecha
//         case 8:
//             tablero.moveTo(800, 400);
//             tablero.lineTo(850, 470);
//             break;
//         //pierna izquierda
//         case 9:
//             tablero.moveTo(800, 400);
//             tablero.lineTo(750, 470);
//             break;

//     }
   
//     tablero.stroke();
//     tablero.closePath();
// }

// escojerPalabrasSecretas();

// dibujarCanvas();

// dibujarLinea();




