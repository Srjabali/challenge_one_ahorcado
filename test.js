let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML" ];


function escojerPalabrasSecretas(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabra)
    return palabraSecreta;
}

escojerPalabrasSecretas();


const keyBoard = document.getElementById('key');

keyBoard.addEventListener('keydown', e=>{

    const hola=(e.key.toUpperCase());
    console.log(hola);

    for(let i=0; i<palabraSecreta.length; i++){
        if(hola==palabraSecreta[i]){
            console.log("holi");       
        }
        else
            console.log("chao");
        }          

});


