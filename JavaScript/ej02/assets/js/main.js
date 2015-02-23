(function(){
    var factorial = function(num){
        var fact = 1;
        if ( typeof num === "number" && num>=0 || typeof num==="string"){
            
            for (var i=0; i<num; i++){
                fact=fact*(num-i);

            }

           
        } else{
            fact=false;
        }

        return fact;
    };


console.log(factorial(0)===1);
console.log(factorial(1)===1);
console.log(factorial(2)===2);
console.log(factorial(3)===6);
console.log(factorial(4)===24);
console.log(factorial("texto") ===false);
console.log(factorial(-1)===false);
console.log(factorial ("undefined")===false);
console.log(factorial({})===false);




})();