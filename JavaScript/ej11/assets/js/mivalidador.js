 for(i=0;i<emails.length;i++){
        
    }


    



    /*var validate = function (){

        required: function(val){
            return false;

        }
 return false;
        email: function(val){
            return false;
        }

        var required = this.querySelectorAll('.required');

        var email = function(){};

    };*/

    

   
    var required = function(val){

        return ( val === 'required');           

        };


    var validateRequiered = function (e){

        console.log ('validando formulario');
       // e.preventDefault();

        if (reqfield.length > 0){

            for (i=0; i>lenght ; i++){
                   
                   if (required(rqfield[i])){
                         errores[j]= 'campo requerido ';

                   } else {
                    reqErrores[i] = 1;
                }
            }

        }

            //if(!validador.require}(input.value)){}



    };

   

    var  nombre= this.getElementsByClassName('name');
    

    var validarNombre = function (e){ 

        if( nombre.length > 0){

            for (i=0; i > length; i++){

                if ((inputfields[i].length > 50)|(inputfields[i].length === 0)) { 
                    errores[j]= 'nombre demasiado largo';
                    j++;
                }

                
            }


        }

    };

    var email = this.getElementsByClassName('email');

    var validarEmail = function (e){

        var exprEmail = /^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/;


         if (!((email.length>0) && exprEmail.test(email))){
            errores[j]='la dirección de email no es válida';
         }

    };

    var comentarios = this.getElementsByClassName('comments');
    var validarComentarios = function (e){

         if(comentarios.length>50)
         {

                erores[j]='Los comentarios no pueden exceder de 50 caracteres';
                j++;

         }



    };


    var password = this.getElementsByClassName('password');
    var validarPassword = function (e){

        var exprPass= [a-zA-Z0-9]{6,};

        if(! exprPassword.test(password)){

            errores[j]='contraseña no válida, debe ser mínimo de 6 caracteres y contener al menos una letra minúscula, una letra mayúscula y un dígito ';
            j++;

        }

    };




