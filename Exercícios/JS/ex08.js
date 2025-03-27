function imparpar() {
    let num = document.getElementById('num').value;
    
    num = parseInt(num);
    
    if (isNaN(num)) {
        document.getElementById('imparpar').textContent = "Por favor, insira um número válido.";
    } else {
        if (num % 2 === 0) {
            document.getElementById('imparpar').textContent = "Este número é par.";
        } else {
            document.getElementById('imparpar').textContent = "Este número é ímpar.";
        }
    }
}