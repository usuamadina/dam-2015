window.onload = function(){

  

    boton= document.getElementById('boton'); // devuelve vacio o un solo elemento
    lista= document.getElementById('lista');


    var add = function(){        

    
        if (lista){

            var li= document.createElement('li');
            li.innerText = 'Elemento' + (lista.children.length + 1);
           // li.innerHTML=''

           lista.appendChild(li);
        }


    };

    if (boton){
            boton.addEventListener('click', add, false);

        // Forma de desacoplar código: 
        //podríamos lanzar más eventos asociados a la misma acción
        // añadiendo una nuevo función (log x ejem) y lanzando el evento asociado a la misma acción
        // boton.addEventListener('click', log, false); 
        // 
        }

//NO acceder nunca a elementos del DOM dentro de un for ni un while y a ser posible tampoco 
//dentro de la función asociada al listener

};