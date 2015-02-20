(function(){
    var validarDNI=function(dni){

        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        ok=false;

    
        if(dni && typeof dni === "string" & dni.length===9){
            var num = parseInt (dni);
            if(num>=0&& num<=999999999){
                var char=dni.charAt(dni.length - 1).toUpperCase; /*charAt te da el caracter en esa posición*/
                ok = char===letras[num%23];
            }
        }
        return ok;
    
};

console.log(validarDNI("123456789A") === false);
    console.log(validarDNI("999999999A") === false);
    console.log(validarDNI("A") === false);
    console.log(validarDNI(undefined) === false);
    console.log(validarDNI({}) === false);
})();