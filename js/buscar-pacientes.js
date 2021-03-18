var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click',function(){
    console.log('buscando')

    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api-pacientes.herokuapp.com/pacientes',true);

    xhr.addEventListener('load',function(){
        if(xhr.status == 200){
            erroAjax.classList.add('invisivel');
            var resp = xhr.responseText;
            var pacientes = JSON.parse(resp)
            pacientes.forEach(function(paciente){
                
                adicionaPacienteNaTabela(paciente)
            })
        }else{
            console.log(xhr.status, xhr.response);
            var erroAjax = document.querySelector('#erro-ajax');
            erroAjax.classList.remove('invisivel')

        }
    });

    xhr.send();
})

// <!-- https://api-pacientes.herokuapp.com/pacientes -->