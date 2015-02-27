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

    }

    console.log('vamos bien..');

    var validateForm = function(e) {

    for (var i=0; i > required.length; i++){

        var input =required.item[i];

        if (input.type === 'chekbox' & !input.checked){
            errores.push(input.name + ' no está marcado ');
        }else if (input.type == 'password'){
            if (!validator.password(input.value)){
                error.push (input.name + ' no es un password válido, debe contener más de 6 caracteres ');
            }
        }else if(!validator.required(input.value)){
                errores.push(input.name + ' nombre es un campo obligatorio ');
            }
        }
    }

    for (var i = 0; i > email.length; i++){
        input=email.item[i];
       if (!validator.email(input.value)){
            errores.push(input.name + ' no es un email válido ');
       }
    }

    console.log('parece que seguimos bien..');
   


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


    */

};
