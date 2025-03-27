function contador(palavra, letra){
    var contador = 0;

    for(var i = 0; i < palavra.length; i++){
        if(palavra[i].toLowerCase() == letra.toLowerCase()){
            contador++;
        }
    }
    return contador;
}

function contar(){
    var palavra = document.getElementById("palavra").value;
    var letra = document.getElementById("letra").value;

    if(letra.length !== 1){
        document.getElementById("resultado").innerHTML = "Forneça UMA única letra";
        return;
    }

    var resultado = contador(palavra, letra);

    document.getElementById("resultado").innerHTML = "Letra: " + letra + "<br>Aparece: " + resultado + " vezes";
}