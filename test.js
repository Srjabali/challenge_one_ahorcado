let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML" ];
let tablero = document.getElementById("keya").getContext("2d");

function escojerPalabrasSecretas(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabra)
    return palabraSecreta;
}




function testClick(){
    escojerPalabrasSecretas();
    dibujarLinea();
}

const keyBoard = document.getElementById('key');

keyBoard.addEventListener('keydown', e=>{

    const hola=(e.key.toUpperCase());
    console.log(hola);

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "red";
    tablero.strokeStyle = "#0a3871";

    tablero.font="70px Verdana";
    tablero.fillStyle = "#0a3871";
    tablero.textAlign="justify";

    

    let anchura = 600/palabraSecreta.length;

    for(let i=0; i<palabraSecreta.length; i++){
        
        
        if(hola==palabraSecreta[i]){
            tablero.moveTo(450 + (anchura * i), 640)
            tablero.lineTo(500 + (anchura * i), 640)
            
            tablero.fillText(palabraSecreta[i],450 +(anchura*i), 640, 500)        }
        else
            console.log("chao");
        }          
        tablero.stroke();
        tablero.closePath();
});

function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#f3f5fc";
    tablero.strokeStyle = "#0a3871";

    tablero.fillRect(0, 0, 1200, 860);
    tablero.beginPath();
    tablero.moveTo(600, 500);
    tablero.lineTo(850, 500);
    tablero.stroke();
    tablero.closePath();
}
function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#f3f5fc";
    tablero.strokeStyle = "#0a3871";

    let anchura = 600/palabraSecreta.length;

    for (i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(450 + (anchura * i), 640)
        tablero.lineTo(500 + (anchura * i), 640)
    }
    tablero.stroke();
    tablero.closePath();
}


function dibujarLetra(){
    tablero.font="70px Verdana";
    tablero.fillStyle = "#0a3871";
    tablero.textAlign="justify";

    let anchura = 600/palabraSecreta.length;

    for (leti = 0; i < palabraSecreta.length; i++){
        tablero.fillText(palabraSecreta[i],450 +(anchura*i), 640, 500)   
    } 
}

dibujarCanvas();