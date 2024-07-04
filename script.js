function calcularEficiencia() {
    const horasPlanejadas = parseFloat(document.getElementById('horasPlanejadas').value);
    const horasConfirmadas = parseFloat(document.getElementById('horasConfirmadas').value);

    if (horasPlanejadas === 0 || isNaN(horasPlanejadas) || isNaN(horasConfirmadas)) {
        alert("Erro: os valores de horas planejadas e confirmadas devem ser válidos e diferentes de zero.");
        return;
    }

    const eficiencia = (horasPlanejadas / horasConfirmadas) * 100;
    const textoResultado = document.getElementById('textoResultado');
    const circuloElement = document.getElementById('circulo');

    textoResultado.innerText = `${eficiencia.toFixed(0)}%`;

    // Verifica se a eficiência está entre 80% e 120%
    if (eficiencia >= 80 && eficiencia <= 120) {
        circuloElement.style.borderColor = 'green'; // Se estiver dentro desse intervalo, a cor é verde
    } else {
        circuloElement.style.borderColor = 'red'; // Se não estiver dentro desse intervalo, a cor é vermelha
    }
}
