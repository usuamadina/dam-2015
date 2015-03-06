HTMLFormElement.prototype.store = function() {

 var caja = document.querySelectorAll('input,textarea');
  storage=sessionStorage;
  prefix= 'ej03_prefix';

 

    var saveText = function(e) {       
        
        storage.setItem(prefix + this.name, this.value);
       

    };

    for(var i = inputs.length-1; i >=0; i--){
    inputs.item[i].addEventListener('textarea',saveText);
   
 }

   
};
