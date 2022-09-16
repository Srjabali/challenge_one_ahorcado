
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

dibujarCanvas();
dibujarLinea();
