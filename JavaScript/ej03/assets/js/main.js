(function(){
    var espar=function(num){
        if (typeof num === "number"){
            if (num%2 === 0){
                return true;
            }

        }

    return false;

    };

    console.log(espar(1)===false);
    console.log(espar(2)===true);
    console.log(espar(5)===false);
    console.log(espar(-5)===false);
    console.log(espar(0)===true);
    console.log(espar()===false);
    console.log(espar("A")===NaN);
    console.log(espar(undefined)===NaN);
    console.log(espar({})===NaN);
    console.log(espar(function(){})===NaN);
    
})();


