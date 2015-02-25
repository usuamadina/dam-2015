HTMLFormElement.prototype.validate= function(){

    var validate = function (){

        required: function(val){
            return false;

        }

        email: function(val){
            return false;
        }

        var required = this.querySelectorAll('.required');

        var email = function(){};

    };

    this.addEventListener ('submit', validar,false); 

};

