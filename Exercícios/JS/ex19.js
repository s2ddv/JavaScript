function numprimo() {
    const num = parseInt(document.getElementById("num").value); 
    const resultadoElement = document.getElementById("resultado"); 

    if (isNaN(num) || num < 1) {
        resultadoElement.textContent = "Por favor, insira um número válido maior que 1.";
        return;
    }

    if (num === 2) {
        resultadoElement.textContent = "O número 2 é primo.";
        return;
    }

    let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrimo = false;
            break;
        }
    }

    // Exibe o resultado
    if (isPrimo) {
        resultadoElement.textContent = `O número ${num} é primo.`;
    } else {
        resultadoElement.textContent = `O número ${num} não é primo.`;
    }
}