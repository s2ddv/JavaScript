function media() {
    n1 = parseFloat(document.getElementById('num1').value)
    n2 = parseFloat(document.getElementById('num2').value)
    n3 = parseFloat(document.getElementById('num3').value)
    n4 = parseFloat(document.getElementById('num4').value)

    let media = (n1 + n2 + n3 + n4) / 4;

    document.getElementById('resultado').textContent = 'A média dos quatro números é de: ' + media;
}