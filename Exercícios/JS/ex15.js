function verificarIdade() {
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado")

    if(idade >= 18){
        resultado.textcontent = "Maior de idade";
    } else {
        reultado.textcontent = "Menor de idade";
    }
}