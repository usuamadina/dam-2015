var App = App || {Model : {} };

App.Model.Rectangle = (function(){

    var _height;
   
    //Constructor
    function Rectangle(x, y, side, height){

        //Llamada al padre (Shape) para heredar sus variables
        App.Model.Square.call(this, x ,y, side, height);
        

        //Variables específicas de la clase Rectangle        
        _height = (typeof height === 'number') ? height : 0;
      

    }

        //Llamamos al constructor y heredamos los métodos del padre (Shape)
        Rectangle.prototype = Object.create (App.Model.Square.prototype);
        //Rectangle.prototype.constructor = Rectangle;

    
        

        Rectangle.prototype.getHeight = function(){
            return _height;
        };

        Rectangle.prototype.setHeight = function (){
            _height = (typeof height ==='number') ? _height : 0;
        };

       Rectangle.prototype.getArea = function (height){
        return this.getSide() * _height;
       }

  
return Rectangle;

})();