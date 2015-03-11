window.onload = function() {
    var input = document.getElementById("inputNumber");
    var calcular = document.getElementById("calcular");
    var results = document.getElementById("resultado");
    var worker = new Worker("assets/js/factorial.js");
       
   

   calcular.addEventListener('click', function(e) {
        e.preventDefault();
        var num = input.value;
        worker.postMessage(num);    
           
    });
      
  	
  	worker.addEventListener('message', function(e) {
  		var factorial = e.data;
        results.innerHTML = factorial;
    });
};
