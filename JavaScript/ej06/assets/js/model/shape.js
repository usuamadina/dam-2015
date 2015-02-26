var App = App || { Model: {} }; // Creamos la variable App, si existe App = App y si no existe App=Model{}

App.Model.Shape = (function() {

    // De esta forma conseguimos crear variables privadas, que solo pueden accederse desde dentro 
    // y obtener o modificar sus valores a través de los métodos get y set
    function Shape(x, y) {
            //Variables privadas
            var _x,
                _y;

            _x = (typeof x === 'number') ? x : 0;
            /*
                if ternario, en caso de condición igual a true asignamos 
                this.x=x, sino (si false) this.x=0
            */
            _y = (typeof y === 'number') ? y : 0;
        }
        //Constructor

    Shape.prototype.move = function(x, y) {
        _x = (typeof x === 'number') ? x : 0;
        _y = (typeof y === 'number') ? y : 0;
    };


    Shape.prototype.getX = function() {
        return _x;
    };

    Shape.prototype.getY = function() {
        return _y;
    };

    Shape.prototype.setX = function() {
        _x += (typeof x === 'number') ? _x : 0;
    };

    Shape.prototype.setY = function() {
        _y += (typeof y === 'number') ? _y : 0;
    };

   

    return Shape;





})();
