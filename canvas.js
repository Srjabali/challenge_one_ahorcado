function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#f3f5fc";
    tablero.strokeStyle = "#0a3871";
    //linea piso
    tablero.fillRect(0, 0, 1200, 680);
    tablero.beginPath();
    tablero.moveTo(600, 450);
    tablero.lineTo(1000, 450);//cambie aqui
    tablero.stroke();
    tablero.closePath();
}
function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#f3f5fc";
    tablero.strokeStyle = "#0a3871";

    let anchura = 700/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(450 + (anchura * i), 540)
        tablero.lineTo(500 + (anchura * i), 540)// combie aqui!
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
            tablero.moveTo(650, 450);
            tablero.lineTo(650, 50);
            break;
        //Soporte 2
        case 2:
            tablero.moveTo(650, 50);
            tablero.lineTo(800, 50);
            break;
        //soporte 3
        case 3:
            tablero.moveTo(800, 50);
            tablero.lineTo(800, 100);
            break;
        //cabeza
        case 4:
            tablero.arc(800,140,40,5,12*Math.PI);
            break;
        //cuerpo
        case 5:
            tablero.moveTo(800, 185);
            tablero.lineTo(800, 350);
            break;
        //Brazo derecho
        case 6:
            tablero.moveTo(800, 180);
            tablero.lineTo(850, 250);
            break;
        //brazo izquierdo
        case 7:
            tablero.moveTo(800, 180);
            tablero.lineTo(750, 250);
            break;
        //pierna derecha
        case 8:
            tablero.moveTo(800, 350);
            tablero.lineTo(850, 420);
            break;
        //pierna izquierda
        case 9:
            tablero.moveTo(800, 350);
            tablero.lineTo(750, 420);
            break;

    }
   
    tablero.stroke();
    tablero.closePath();
}
dibujarCanvas();
dibujarLinea();
