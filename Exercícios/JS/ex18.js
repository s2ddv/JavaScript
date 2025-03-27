function fatorial(n) {
    let resultado = 1; 
    for (let i = 1; i <= n; i++) {
        resultado *= i; 
    }
    return resultado; 
}

function calcularFatorial() {
    let num = document.getElementById("num").value; 
    num = parseInt(num); 

    if (isNaN(num) || num < 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um número válido (não negativo).";
    } else {
        const resultado = fatorial(num); 
        document.getElementById("resultado").innerText = `O fatorial de ${num} é ${resultado}`; // Exibe o resultado
    }
}
