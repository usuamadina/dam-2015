var App = App || {Model : {} };

App.model.Rectangle = (function(){

    var _height;
    Rectangle = App.Model.Square.Rectangle;
    
    //Constructor
    function Rectangle(x, y, side, height){
        Square.call(this, x ,y, side, height);

        _height = (typeof height === 'number') ? height : 0;

        Rectangle.prototype = object.create (App.Model.Shape.prototype);

    }


        Rectangle.prototype.constructor = Rectangle;
    
        Shape.prototype.getX = function() {
        return this.getX;
    };

        Shape.prototype.getY = function() {
        return this.getY;
    };


        Rectangle.prototype.getHeight = function(){
            return _height;
        };

        Rectangle.prototype.setHeight = function (){
            height = (typeof height ==='number') ? height : 0;
        };

        Rectangle.prototype.getWidth = function(){
            width = this.getSide;
        };



        



        Rectangle.prototype = Object.create (App.Model.Shape.prototype);
      




return Square;

})();