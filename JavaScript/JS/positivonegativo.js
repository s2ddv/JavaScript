function verificarPositivoNegativo() {
    let num = document.getElementById("num").value;
    let resultado = document.getElementById("resultado")

    if(num > 0){
        resultado.textcontent = "Este número é positivo";
    } else {
        reultado.textcontent = "Este número é negativo";
    }
}