(function() {
    var esMayusculas = function(cadena) {
        var resultado = "La cadena";
        if (typeof cadena === 'string') {
            if (cadena === cadena.toUpperCase()) {
                console.log('mayúsculas');
            } else if (cadena === cadena.toLowerCase) {
                console.log('minúsculas');
            } else console.log('mix');

        } else {
            throw Error('No es un string');
        }


    };

    try {

        console.log(info('MAYÚSCULAS'));
        console.log(info('minúsculas'));
        console.log(info('maYúsCulas Y MinÚsculas'));
        console.log(info());
        console.log(info(null));
        console.log(info(0));
        console.log(info(function(){}));

    } catch (e) {
        if(e instanceof Error){

        }else if (e instanceof TypeError){

        }

    }






})();
