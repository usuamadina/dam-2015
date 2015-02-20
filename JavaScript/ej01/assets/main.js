(function() {
    var validarDNI = function(dni) {
        var DNI = [];
        DNI=dni.toString();
        long=DNI.length;
        var numeros=[];
        var letra;
        for(i=0;i<long-1;i=+1){
            if (i<9){
                numeros.push(DNI(long));
            }
            else
            


        }



    
                var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        };

        return true;
    };

    console.log(validarDNI("123456789A") === false);
    console.log(validarDNI("999999999A") === false);
    console.log(validarDNI("A") === false);
    console.log(validarDNI(undefined) === false);
    console.log(validarDNI({}) === false);
})()
