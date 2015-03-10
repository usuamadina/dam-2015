function getFactorial(num) {
    var fact = 1;
       for (var i = 0; i < num; i++) {
            fact = fact * (num - i);

        }    
        
    return fact;
}

this.addEventListener('message', function(e) {
    var factorial = getFactorial(e.data);
    this.postMessage(factorial);
    console.log(factorial);  
});

