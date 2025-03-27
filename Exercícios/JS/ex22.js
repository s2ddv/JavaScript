function calcularMedia() {
    let entrada = document.getElementById("numeros").value;
    let arrayNum = entrada.split(","); // transforma em array de substring
    let soma = 0;
    let total = arrayNum.length;
    for (let i = 0; i < total; i++) {
        soma += parseFloat(arrayNum[i]);
    }
    let media = soma / total;
    document.getElementById("resultadoMedia").textContent = "Média: " + media;
}