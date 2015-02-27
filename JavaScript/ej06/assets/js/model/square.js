var App = App || {Model : {} };

App.Model.Square = (function(){

    var _side;
   
    
    //Constructor
    function Square(x, y, side){

        //LLamamos al padre        
        App.Model.Shape.call(this,x ,y, side);

        _side = (typeof side === 'number') ? side : 0;
     

    }

     //Heredamos métodos de la clase principal

    Square.prototype = Object.create (App.Model.Shape.prototype);
     //Square.prototype.constructor = Square;

   
        //Definimos los métodos en el prototipo, de esta forma lo heredarán
        //las instacias que hagamos de la clase

        Square.prototype.setSide = function (){
            _side = (typeof side ==='number') ? _side : 0;
        };

    
        Square.prototype.getSide = function(){
            return _side;
        };

        
        Square.prototype.getArea= function(){
            return Math.pw(_side,2);
        };   
      


return Square;

})();