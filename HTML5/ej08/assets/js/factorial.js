function getFactorial(num) {
    var fact = 1;
    if (typeof num === "number" && num >= 0 || typeof num === "string") {

        for (var i = 0; i < num; i++) {
            fact = fact * (num - i);

        }


    } else {
        fact = false;
    }

    return fact;
}

this.addEventListener('message', function(e) {
    var factorial = getFactorial(e.data);
    this.postMessage(factorial);
    console.log(factorial);
});

