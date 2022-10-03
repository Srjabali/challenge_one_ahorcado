let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML"];
let tablero = document.getElementById("horca").getContext("2d");

let palabraSecreta = "";
let usedLetters = [];
let contadorFallos = 0;
let aciertos = 0;

words();
escojerPalabrasSecretas();
console.log(palabras)

document.addEventListener("keydown", e => {

    //"key" hace que entrege el valor que uno ingresa

    let palabraIngresada = e.key.toUpperCase();
    console.log(palabraIngresada);

    //expresion regular y check de palabra para no repetir
    if (palabraIngresada.match(/^[a-zñ]$/i) && !usedLetters.includes(palabraIngresada)) {
        //palabra usadas
        usedLetters.push(palabraIngresada)

        tablero.font = "70px Verdana";
        tablero.fillStyle = "#0a3871";
        tablero.textAlign = "justify";

        let anchura = 700/palabraSecreta.length;
        let haFallado = true;
        //mostrar por pantalla palabra correcta
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraIngresada == palabraSecreta[i]) {

                tablero.fillText(palabraSecreta[i], 450 + (anchura * i), 530)
                haFallado = false;
                aciertos++;
            }
        }
        //mostrar ganaste
        tablero.font = "50px Verdana";
        tablero.fillStyle = "green";
        if (aciertos == palabraSecreta.length) {
            tablero.fillText("You", 450, 220)
            tablero.fillText("win!", 450, 300)
            reload();
        }
        //ups! jeje!
        tablero.font = "50px Verdana";
        tablero.fillStyle = "red";
        if (haFallado) {
            if (contadorFallos == 8) {
                tablero.fillText("You", 450, 220);
                tablero.fillText("lose!", 450, 300);
                alert("La palabra secreta era " + palabraSecreta)
                reload();
            }
            //palabras erroneas por pantalla
            tablero.font = "30px Verdana";
            tablero.fillStyle = "#0a3871";
            let anchuraMalita = 600 / 10;
            tablero.fillText(palabraIngresada, 530 + (anchuraMalita * contadorFallos), 600)

            contadorFallos++;
            dibujarAhorcado(contadorFallos);
        }
    };
});
function escojerPalabrasSecretas() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}
//JSON.parse transforma mi string JSON de session Storage a un objeto javascript
function words(){
    let word = JSON.parse(sessionStorage.getItem('data'));
    if (word) {
        let words;
        for (let r = 0; r < word.length; r++) {
            if (word[r] != ['']) {
                words = word[r]
                palabras.push(words)
            }
        }
    }
}
function saveButton() {
    let cont = 0;
    var newWord = document.getElementById('new-word').value;

    for(let z = 0;  z<newWord.length; z++){
        if(!newWord[z].match(/^[a-zñ]$/i)){
            alert("Favor solo ingresar letras")
            cont=0;break;
        }
        cont++;
    }
    if(cont == newWord.length){
        newWord=newWord.toUpperCase();
        if (sessionStorage.getItem('data') == null) {
            sessionStorage.setItem('data', '[]');
        }
        var old_data = JSON.parse(sessionStorage.getItem('data'));
        old_data.push(newWord)
        //JSON.stringify transforma un objeto javascript a JSON string
        sessionStorage.setItem('data', JSON.stringify(old_data));

        location.href = "game.html"
    }
}

function cancel(){location.href = "index.html"}

function reload(){location.reload()}

function reload(){
    document.addEventListener('keydown', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});}