 (function(){
    var s1 = new App.Model.Shape();
    s1.move(5,5);
    console.log(s1.getX());
    console.log(s1.getY());


    var s2 = new App.Model.Shape(10,10);
    s2.move(5,5);

    console.log(s2);
    s2.setY(0);
    console.log(s2.getX());
    console.log(s2.getY());
   
    

    var c = new App.Model.Circle(10,10,3);
    console.log(c);
    c.setRadius(5);
    console.log(c.getX());
    console.log(c.getY());
    console.log(c.getRadius());
    console.log(c.getArea());  


    var sq = new App.Model.Square(3,10,7);
    console.log(sq);
    sq.setSide(5);
    console.log(sq.getX());
    console.log(sq.getY());
    console.log(sq.getSide());
    console.log(sq.getArea());


    var r = new App.Model.Rectangle(20,20, 3, 5);
    console.log(r);
    r.setHeight(4);
    console.log(r.getX());
    console.log(r.getY());
    console.log(r.getHeight());
    console.log(r.getArea());



})();