var App = App || {Model : {} }; 
App.Model.Circle =(function(){
    //Propiedades privadas
    var _radius;

    //Constructor

    function Circle (x, y, radius){
         App.Model.Shape.call(this, x, y);
        //App.Shape.bind(this)(x,y);
        //App.Shape.apply(this,[x,y]);
       
        _radius = (typeof radius === 'number') ? radius : 0;        
         // Este es el extends de Java

         Circle.prototype = Object.create (App.Model.Shape.prototype);

    }

    Circle.prototype.constructor = Circle;

    Circle.prototype.getRadius = function (){
        return _radius;
    };

    Circle.prototype.setRadius = function (){
        radius = (typeof radius ==='number') ? radius : 0;

    };
    
    Circle.prototype.getArea = function (){
        return Math.PI * Math.pow(radius,2);
    };

    // Indicamos el "padre"


    
    

    return Circle;

})();

// MUY IMPORTANTE!! Pregunta de entrevista de curro
// El método call sirven para inyectar o cambiar el contexto del this, this hace referencia a la función
// con esto conseguimos crear funciones generalistas

