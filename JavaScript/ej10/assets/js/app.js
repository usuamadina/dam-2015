window.onload = function(){

  

    boton= document.getElementById('boton'); // devuelve vacio o un solo elemento
    lista= document.getElementById('lista');
    lis = lista.querySelectorAll('li');


    var add = function(e){   
        e.stopPropagation(); 
            

    
        if (lista){

            var li= document.createElement('li');

            //añadimos el elemento y le asociamos un listener nada más crearlo, sino
            //solo podemos acceder a los elementos de la lista que ya estaban al cargar
            //la página

            //lis[i].addEventListener ('click', remove, false);

            li.innerText = 'Elemento' + (lista.children.length + 1);
           // li.innerHTML=''

           lista.appendChild(li);
        }


    };

    var remove = function(e){

        //console.log(e);  e es el evento así podemos ver el evento y mirando sus propiedades nos encontramos la propiedad target
          if (confirm('Seguro que desea eliminar este elemento??')){
            this.removeChild(e.target);
          }
         
         //la propiedad target nos dice quien a causado realmente el evento, e es el evento  
         //a esto se le llama Delegación de eventos
    };

    var log=function(e){
        //console.log( "Click on "e.target + Date + 'on' );
        console.log(e);

    };


    if (boton){
            boton.addEventListener('click', add, false);
    }

    if (lista){

        lista.addEventListener('click', remove, false);
    }

    document.addEventListener('click',log,false)
    


        // Forma de desacoplar código: 
        //podríamos lanzar más eventos asociados a la misma acción
        // añadiendo una nuevo función (log x ejem) y lanzando el evento asociado a la misma acción
        // boton.addEventListener('click', log, false); 
        // 
        

//NO acceder nunca a elementos del DOM dentro de un for ni un while y a ser posible tampoco 
//dentro de la función asociada al listener

};