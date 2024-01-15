document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('meuFormulario');

    formulario.addEventListener('submit', function (event) {
        var checkboxes = document.querySelectorAll('input[name="preferencias"]');
        var peloMenosUmaSelecionada = false;

        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                peloMenosUmaSelecionada = true;
            }
        });

        if (!peloMenosUmaSelecionada) {
            alert('Selecione pelo menos uma preferência.');
            event.preventDefault();
        }
    });
});