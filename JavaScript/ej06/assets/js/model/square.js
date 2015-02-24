var App = App || {Model : {} };

App.model.Square = (function(){

    var _side;
    Square = App.Model.Square;
    
    //Constructor
    function Square(x, y, side){
        Square.call(this,x ,y);

        _side = (typeof side === 'number') ? side : 0;

        Square.prototype = object.create (App.Model.Shape.prototype);

    }
   
    
        Square.prototype.getSide = function(){
            return _side;
        };

        Square.prototype.setSide = function (){
            side = (typeof side ==='number') ? side : 0;
        };

        Square.prototype.getArea= function(){
            return Math.pw(side,2);
        };



        Square.prototype = Object.create (App.Model.Shape.prototype);
        
      




return Square;

})();