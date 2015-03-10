window.onload = function() {
    var input = document.getElementById("inputNumber");
    var calcular = document.getElementById("calcular");
    var results = document.getElementById("resultado");
    var workers = new Worker("assets/js/factorial.js");



    var factorial = function(e) {
        e.preventDefault();
        var number = input.value;
        workers.postMessage(number);

    };

    var mensaje = function(e) {
        var factorial = e.data;
        result.innerHTML = factorial.join(" ");
    };


    calcular.addEventListener = ('click', factorial);
    workers.addEventListener = ('message', mensaje);
};
