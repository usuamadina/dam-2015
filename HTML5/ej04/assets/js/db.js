(function(){
    var tweet = {
        id : "1234567890",
        text: "Holaholaa",
        author: "Yo", 
        createdAt: "18:41"
    };

    //APP.DB.insert(tweet);
    
    var success= function (datos){
        console.log(datos);
    };

    APP.DB.getAll(function(datos){
        console.log(datos);
    });

    

})();