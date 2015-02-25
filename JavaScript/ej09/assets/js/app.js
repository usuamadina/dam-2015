window.onload = function(){

    var enlace = document.querySelectorAll('.enlace');
    var span = document.querySelectorAll('.adicional.oculto');


    

    var muestra = function(){

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