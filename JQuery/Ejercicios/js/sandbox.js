//Ejercicios 3.8 EJERCICIOS 1 y 2




$(function() {
    var $divs = $("div.module");
    var $li = $('#mylist li:nth-child(3)');
    var $lis = $('#mylist > li'); // en la documentación de JQuery viene como Traversing

    //añadimos un listener a cada li

    $lis.on('click mouseover', function(e){
        console.log(e);
        console.log(this);
    });


    console.log($lis.eq(3));

    var $ul = $('#mylist');
    console.log($ul.find('li').eq(2)); // de todos los li's coge el tercero (empieza desde cero)

    var $input = $('input[name="q"]');
    var $label = $('label[for="' + $input.attr('name') + '"]'); // $input.attr('name')  accedemos al atributo name del input
    console.log($label);

    var $hidden = $(':hidden'); // selecciona todos los elementos ocultos sin importar la forma en que han sido ocultados
    //da igual que se el atributo hidden, display=none, opacity=0, height=0 etc...

    $hidden.each(function(idx, elem) { //lo que devuelve es un array de elementos con cada uno de los elementos ocultos
        // console.log(elem);
        $(elem).show(); // metiendo entre paréntesis pasamos de jquery a javascritp y 
        $(elem).hide();
    });

    var $img = $('img');
    $img.each(function(idx, elem) {
        console.log(elem.alt);
        // console.log($(elem).attr('attr')); // esto está maaaal!! es absurdo poner la carcasa de jquery, se hace de la primera forma
    });

    $input.closest('form').addClass('form'); // closest busca el selector más cercano, en este caso, sube y busca el formulario más cercano
    $input.closest('form').removeClass('form');
    $input.closest('form').toggleClass('form'); // el toggle si tiene se lo quita y si no tiene se lo pone, es una forma de evitar if's. Ejemplo de uso, para ocultar y mostrar menús

    var $current = $('#myList .current');
    $current.removeClass('current').next().addClass('current'); //next va al hermano

    var $submit = $('#specials select')
        .closest('ul')
        .find('input[type="submit"]');

    /*$('#slideshow li')
        .first()
        .addClass('current')
        .siblings()
        .addClass('disabled'); // le pone la clase disabled a todos los hermanos que devuelve sibblings*/


    var lis = [];
    for (var i = 0; i < 5; i++){
        lis.push('<li class="">Element' + i +' </li>');
    }

    $ul.append(lis.join(''));

    $li = $('<li/>',{
        class: 'current',
        text: 'Node list',
        id: 'myli'
    });

    $ul.append($li); // diferentes forma de hacer lo mismo
    $li.appendTo($ul);

   $ul.find('li:odd').remove();

    $ul.on('click', 'li', function(e){
        console.log(e);
        console.log(this);
    });
  

});
