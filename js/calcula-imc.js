var title = document.querySelector(".titulo");
title.textContent = 'Kaic Melo';

var paciente = document.querySelectorAll('.paciente');

if (paciente.length > 0) {

    for (var i = 0; i < paciente.length; i++) {

        var tdPeso = paciente[i].querySelector('.info-peso').textContent;
        var tdAltura = paciente[i].querySelector('.info-altura').textContent;

        var pesoValido = validaPeso(tdPeso);
        var alturaValida = validaAltura(tdAltura);

        if (!pesoValido) {
            pesoValido = false;
            paciente[i].querySelector('.info-imc').textContent = "Peso Inválido";
            paciente[i].classList.add('paciente-invalido');
        }
        if (!alturaValida) {
            alturaValida = false
            paciente[i].querySelector('.info-imc').textContent = "Altura Inválida";
            paciente[i].classList.add('paciente-invalido');
        }

        if (pesoValido && alturaValida) {
            var total = calculaIMC(tdPeso, tdAltura)
            paciente[i].querySelector('.info-imc').textContent = total;

        }
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    return false;
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3.0) {
        return true;
    }
    return false;
}

function calculaIMC(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}