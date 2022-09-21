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
    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(450 + (anchura * i), 640)
        tablero.lineTo(500 + (anchura * i), 640)
    }
    tablero.stroke();
    tablero.closePath();
}
function dibujarAhorcado(contadorFallos){

    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#f3f5fc";
    tablero.strokeStyle = "#0a3871";

    tablero.beginPath();

    switch(contadorFallos){
        //Soporte
        case 1:
            tablero.moveTo(650, 500);
            tablero.lineTo(650, 100);
            break;
        //Soporte 2
        case 2:
            tablero.moveTo(650, 100);
            tablero.lineTo(800, 100);
            break;
        //soporte 3
        case 3:
            tablero.moveTo(800, 100);
            tablero.lineTo(800, 150);
            break;
        //cabeza
        case 4:
            tablero.arc(800,190,40,5,12*Math.PI);
            break;
        //cuerpo
        case 5:
            tablero.moveTo(800, 230);
            tablero.lineTo(800, 400);
            break;
        //Brazo derecho
        case 6:
            tablero.moveTo(800, 230);
            tablero.lineTo(850, 300);
            break;
        //brazo izquierdo
        case 7:
            tablero.moveTo(800, 230);
            tablero.lineTo(750, 300);
            break;
        //pierna derecha
        case 8:
            tablero.moveTo(800, 400);
            tablero.lineTo(850, 470);
            break;
        //pierna izquierda
        case 9:
            tablero.moveTo(800, 400);
            tablero.lineTo(750, 470);
            break;

    }
   
    tablero.stroke();
    tablero.closePath();
}
dibujarCanvas();
dibujarLinea();
