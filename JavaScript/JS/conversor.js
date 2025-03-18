function celsiusparafahrenheit(celsius) {
    let temperaturaCelsius = parseFloat(document.getElementById('num1').value)

    let conversao = (temperaturaCelsius * 9/5) + 32;

    document.getElementById('resultado').textContent = conversao + "°F";
}

