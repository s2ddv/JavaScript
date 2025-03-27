const stringmaiuscula = () => {
    let texto = document.getElementById("texto").value;
    let textoMaiusculo = texto.toUpperCase();
    document.getElementById("resultado").innerText = `Texto em maiúsculas: ${textoMaiusculo}`;
}