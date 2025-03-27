function inverterString() {
    const entrada = document.getElementById("entrada").value;
    const invertida = entrada.split('').reverse().join();
    document.getElementById("resultado").textContent = "A string invertida é: " + invertida;
}