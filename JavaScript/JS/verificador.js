function imparpar(num){
    if (num % 2 === 0) {
        document.getElementById('imparpar').textContent = "Este número é par.";
    } else {
        document.getElementById('imparpar').textContent = "Este número é ímpar.";
    }
}