(function() {
    var valores = [];
    var misstrings = [];
    var j = 0;
    valores.push(true, 5, false, 'hola', 'adios', 2);
    for (var i = 0; i < valores.length; i++) {
        if (typeof valores[i] === 'string') {
            console.log(valores[i]);
            misstrings.push(valores[i]);
            j++;
            if (i = valores.length - 1) {
                var mayor = [];
                for (var k = 0; k < j; k++) {
                    if (mayor.length < misstrings[k].length) {
                    	//console.log(misstrings[k]);
                        mayor = misstrings[k];
                    }
                }

            }
        }

    }


})();


/*A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

    Determinar cual de los dos elementos de texto es mayor
    Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
    Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos*/
