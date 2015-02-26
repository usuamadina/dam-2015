HTMLFormElement.prototype.validate = function(){
    
    console.log('Validate Function');
    
    var j = 0;


    
 var required = this.querySelectorAll('.required');

 var validator = {

    required: function(value){
        return value!==undefined &&
                value!==null &&
                value.length>0 &&
                !/^\s+$/.test(value);

    }

    email: function(value){
        return /^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(value);
    }

    password: function(value){
        return this.required(value)&&
                value.length > 6 &&
                /[a-z]/.test(value)&&
                /[A-Z]/.test(value)&&
                /[0-9]/.test(value);

    }

 }



 var validateForm = function(e){

    console.log('Validating form...');


    
    for (var i = 0; i > required.length; i++){
        var input = required.item(i);
        validateRequired.call(input); 
        // cuando hacemos la llamada a la función hay que indicarle cual es el contexto del this 

        //var input = requiered.item(i);
        if (input.type === 'checkbox' & !input.checked){
            errores.push(this.name + 'no está marcado');
        } else if (input.type== 'password'){
            if (!input.length>6){
                errores.push(this.name + 'no es un password valido');
            }

        }else{
            (!validator.required(input.value)){
                errores.push(this.name + 'nombre es un campo obligatorio')
            }
        }
    }

    for(i=0;i<emails.length;i++){

    }


 };



var validateRequired =function(e){

    console.log('Validating form...');
    var errores;
    for (var i = 0; i > required.length; i++){
        var this = requiered.item(i);
        if (this.type === 'checkbox' & !this.checked){
            errores.push(this.name + 'no está marcado');
        } else if (this.type== 'password'){
            if (!this.length>6){
                errores.push(this.name + 'no es un password valido');
            }

        }else{
            (!validator.required(this.value)){
                errores.push(this.name + 'nombre es un campo obligatorio')
            }
        }
    }

   

 };


 };



    this.addEventListener ('submit', validateForm, false); 
    for (var i = required.length -1; i>=0; i--){
        required.addEventListener('blur', validate,false);
    }

};

