HTMLFormElement.prototype.validate = function() {

    console.log('Validate Function');

    //Definimos las variables que usaremos para guardar los diferentes elementos
    //del formulario


    var required = this.querySelectorAll('.required');
    var email = this.querySelectorAll('.mail');
    errores = [];


    var validator = {

        required: function(value) {
            return value !== undefined &&
                value !== null &&
                value.length > 0 &&
                !/^\s+$/.test(value);

        },

        email: function(value) {
            return /^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(value);
        },

        password: function(value) {
            return this.required(value) &&
                value.length > 6 &&
                /[a-z]/.test(value) &&
                /[A-Z]/.test(value) &&
                /[0-9]/.test(value);

        }

    };


     console.log('vamos bien..');

    var validateForm = function(e) {

    for (var i = 0; i < required.length; i++){

        //validateRequired.element = required[i];
        //validateRequired.validator = validator.required;
        //validateRequired.msg = 'Error';
        //validateRequired.call(input);

       validateRequired.call(required[i]);
          
    }

    for (var i = 0; i < email.length; i++){
        email = email.item[i];
       if (!validator.email(email.value)){
            errores.push(input.name + ' no es un email válido ');
       }
    }

    if (errores.length){
        e.preventDefault();
    }

};

console.log('parece que seguimos bien..');
   

 var validateRequired = function(e) {
        
        errores = [];


        if(this.type === 'password') {
              
            if(!validator.password(this.value)) {
                    
                    errores.push(this.name + ' no es una contraseña válida. Debe contener mayúsculas, minúsculas y dígitos');
               } else if(!validator.required(this.value)){
                        errores.push(this.name + ' es obligatorio');
                
               } else if(this.type === 'textarea') {
               
                if(!this.value || this.textLength > 50) {
                   
                    errores.push('Introduzca ' + this.name + ' que no superen los 50 caracteres');

               }} else if(this.type === 'checkbox' && !this.checked) {             
               
                 
                    errores.push(this.name + ' no está marcado');
               }
            }
            else {
                if(!validator.required(this.value)) {
                 
                    errores.push(this.name + ' es obligatorio');
               }
             }  

            if (errores.length) {
                showError.call(this, errores.join('\n'));
            }
    }



     var showError = function(msgError) {

        var span = document.createElement('span');
        span.classList.add('help-block');
        span.innerText = msgError;

        this.parentNode.classList.add('has-error');
        this.parentNode.appendChild(span);
    };

    
   


        this.addEventListener ('submit', validateForm, false); 
        for (var k = required.length -1; k >= 0; k--){
            required[k].addEventListener('blur', validateRequired,false);
        }


  

};
