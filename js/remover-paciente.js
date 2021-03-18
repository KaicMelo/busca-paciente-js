// var pacientes = document.querySelectorAll('.paciente');
var table = document.querySelector('table');

table.addEventListener('dblclick', function (event) {
    var tr = event.target.parentNode;
    tr.classList.add('fadeOut');

    setTimeout(function () {
        tr.remove();
    }, 500);
})
