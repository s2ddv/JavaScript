const stringvazia = () => {
    const entrada = document.getElementById("entrada").value;
    const resultado = entrada === "" ? "A string está vazia" : "A string não está vazia";
    document.getElementById("resultado").textContent = resultado;
}