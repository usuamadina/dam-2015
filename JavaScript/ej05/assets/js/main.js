(function(){
    var espalindromo=function(cadena){
        if( typeof cadena==='string'){
            /*
            Primero quitamos los espacios por los lados
            Lo ponemos todo en minúsculas
            Quitamos los espacios en blanco con la función replace
            Unimos todo con el join

            ---- la función split parte el string como yo le diga---
            
            */
            var tmp = cadena
                        .trim()
                        .toLowerCase()
                        .replace(/\s/g,'')
                        .split('')
                        .reverse()
                        .join('');

            return tmp=== cadena.trim().toLowerCase().replace(/\s/g,'').split('').reverse().join('');

        }
       return false;

    };


console.log(espalidromo('radar')===true);
console.log(espalindromo('JavaScript mola mazo')===false);
console.log(espalindromo('La ruta nos aporto otro paso natural')===true);
console.log(espalindromo(1)===false);
console.log(espalindromo(undefined)===false);
console.log(espalindromo({})===false);
console.log(espalindromo(function(){})===false);





})();