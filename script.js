function calcularEficiencia() {
    const horasPlanejadas = document.getElementById('horasPlanejadas').value;
    const horasConfirmadas = document.getElementById('horasConfirmadas').value;

    if (horasPlanejadas == 0) {
        alert("Erro: o valor de horas planejadas não pode ser zero.");
        return;
    }

    const eficiencia = (horasPlanejadas / horasConfirmadas) * 100;
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = `A eficiência é: ${eficiencia.toFixed(2)}%`;

    // Verifica se a eficiência está entre 80% e 120%
    if (eficiencia >= 80 && eficiencia <= 120) {
        resultadoElement.style.color = 'green'; // Se estiver dentro desse intervalo, a cor é verde
    } else {
        resultadoElement.style.color = 'red'; // Se não estiver dentro desse intervalo, a cor é vermelha
    }
}

