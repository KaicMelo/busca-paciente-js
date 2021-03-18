var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');
    var paciente = obtemPacienteForm(form);

    var errors = validaPaciente(paciente);
    if(errors.length > 0){

        exibeMensagensErro(errors)
        return;
    }
    
    adicionaPacienteNaTabela(paciente)

    form.reset();
    document.querySelector("#mensagens-erro").innerHTML = '';

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    document.querySelector('#tabela-pacientes').appendChild(pacienteTr);
}

function exibeMensagensErro(erros){
    var ul =  document.querySelector("#mensagens-erro");
    ul.innerHTML = '';
    erros.forEach(function(erro) {
        var li = document.createElement('li');
        li.textContent = erro
        ul.appendChild(li);
    });
}

function obtemPacienteForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');
 
    pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
    pacienteTr.appendChild(montaTd(calculaIMC(paciente.peso, paciente.altura),'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td
}

function validaPaciente(paciente){

    var errors = [];

    if(!validaPeso(paciente.peso))  errors.push('Peso é inválido');
    
    if(!validaAltura(paciente.altura))  errors.push('Altura é inválida');
    
    if(paciente.nome.length == 0)  errors.push('O nome não pode ser em branco');

    if(paciente.gordura.length == 0)  errors.push('Gordura não pode ser em branco');

    if(paciente.peso.length == 0)  errors.push('Peso não pode ser em branco');

    if(paciente.altura.length == 0)  errors.push('Altura não pode ser em branco');
    
    return errors;
}