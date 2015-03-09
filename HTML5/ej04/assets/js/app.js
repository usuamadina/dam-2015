(function(){
    var tweet = {
        id : "1234567890",
        text: "Holaholaa",
        author: "Yo", 
        created_at: "18:41"
    };

       
    var success= function (datos){
        console.log(datos);
    };


APP.DB.insert(tweet);
APP.DB.getAll(success);

})();





