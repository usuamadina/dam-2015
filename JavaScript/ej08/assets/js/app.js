window.onload = function(){
enlaces=document.getElementsByTagName('a');
console.log("Numero de enlaces: " + enlaces.length);



enlaces=document.querySelectorAll('a');
console.log("Numero de enlaces:" +enlaces.length);

enlaces = document.querySelectorAll('a[href="http://prueba"]');
console.log("Numero de enlaces:" +enlaces.length);

var enlacesPrueba = 0;
for (i=0; i<enlaces.length; i++){
    if (enlaces.item(i).href === "http://prueba"){
        enlacesPrueba++;
    }
}

console.log("Numero de enlaces" + enlaces);

var parrafos=document.querySelectorAll('p');
if (parrafos.length > 2){

    enlaces=parrafos[2].querySelectorAll('a');
    console.log("Numero de enlaces" + enlaces);

}

/*la función querySelectorAll es propia de todos los elementos html,
  no solo de document. Al realizar la búsqueda en parrafos[2].querySelectorAll
  estamos podando el árbol y acotando de esta manera la búsqueda.*/


var enlaces = document.querySelectorAll('body > p: nth-child(3) a');



//console.log(enlaces[enlaces.length-2].href);

};