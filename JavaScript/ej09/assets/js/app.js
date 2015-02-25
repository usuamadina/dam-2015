window.onload = function(){

    var enlace = document.querySelectorAll('.enlace');
    var span = document.querySelectorAll('.adicional.oculto');


    

    var muestra = function(e){

        // hemos quitado la almohadilla del href y hemos puesto 
        //una url real, para ver que es lo que pasa. Lo que hace es
        //ejecutar las dos acciones, cargar el texto-quitar enlace y después
        // ir a la url. 

        e.preventDefault(); 


        // así hacemos que el al hacer click en el enlace
        // no se comporte como tal
        // en un formulario, el comportamiento por defecto es
        // enviar el formulario, podemos llevar un contador de errores y
        // en caso de error no enviamos el formulario.


        if(span.length){
            console.log(span[0].classList.remove('oculto'));

        }

        if(enlace.length){
            console.log(enlace[0].classList.add('oculto'));
        }

        
        /*Para modificar la clase y que salga el elemento, entre las propiedades de span
        podemos ver que existe una propiedad que se llama CLASSLIST que contiene una lista 
        con los elementos class a los que pertenece el elemento*/
    };


    //añadimos un Listener, parámetros: elemento a escuchar, la función
    // a ejecutar cuando se haga click y el tercero  
    //El orden importa: primero creamos la función y después añadimos el listener

    if(enlace.length){

            enlace[0].addEventListener('click',muestra, false);
            //podríamos añadir todos los Listeners que queramos x ej:
            // enlace[0].addEventListener('focus',muestra, false);
        }
    

}; 