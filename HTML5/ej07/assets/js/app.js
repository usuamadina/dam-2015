window.onload = function() {
    var input = document.getElementById('number');
    var calcular = document.getElementById('calcular');
    var result = document.getElementById('result');
    console.log(input.value);
    var worker = new Worker("assets/js/primes.js");

    calcular.addEventListener('click', function(e) {

        e.preventDefault();
        var num = input.value;
        /* var primes = getPrimes(num);
         console.log(primes);
        // result.innerHTML = primes.join("");
         */

        worker.postMessage(num);

    });

    worker.addEventListener('message', function(e) {
        var primes = e.data;
        result.innerHTML = primes.join(" ");

    });



};
