const circuloarea = () => {
    const raio = parseFloat(document.getElementById('num').value);

    if (isNaN(raio) || raio <= 0) {
        document.getElementById('resultado').textContent = "Por favor, insira um valor válido para o raio.";
        return;
    }

    const area = Math.PI * Math.pow(raio, 2);

    document.getElementById('resultado').textContent = `A área do círculo é: ${area.toFixed(2)} unidades quadradas.`;
};