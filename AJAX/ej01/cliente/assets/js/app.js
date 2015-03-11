$(function() {
    // Javascript window.onload = function(){}; === $(function(){}); JQuery
    var $ticker = $('#ticker');
    var $detener = $('#detener');

    //jQuery.ajax( url [, settings ])
    var peticionAJAX = function(){
        /*
        $.ajax('../servidor/generaContenidos.php', {
            data: {
                user: 'Usua',
                pass: '1234'
            },

            method: 'POST',
            succes: function(data, status, jqXHR) {
                $ticker.text(data);
            }
        });
        Las dos formas son equivalentes
        */

        $.get('../servidor/generaContenidos.php', null, function(data){
            $ticker.text(data);
        });
    };

// crear intervalo de tiempo en el que se estarán ejecutando las peticiones en al servidor
    

    var interval = setTimeout(peticionAJAX, 1000); // devuelve el identificador único del intervalo, que es un número
    $detener.on('click',function(e){

        clearInterval(interval); // detiene la ejecución de las peticiones, en caso de querer volver a usarlo, hay que crear otro intervalo
    });
    
     

});
