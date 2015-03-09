var APP = APP || {};
APP.DB = (function() {

    var db,
        cfg = {
            name: 'Twitter.db',
            version: 2,
            description: 'Twitter database',
            size: 1 * 1024 * 1024
        };

    // creamos la petición    


    var init = function(success) {

        if (!db) {

            var request = indexedDB.open(cfg.name, cfg.version);

            // asociamos un evento a request para saber cuando tenemos la base de datos abierta, hacemos la petición de apertura
            // si la versión coincide se lanza el evento del success, si necesita actualizarse salta el "upgradeneeded", recogemos el objeto 
            //y si da error  salta el evento "error"

            request.addEventListener('success', function(e) {
                console.log('Database' + cfg.name + ' Ok');
                db = e.target.result; // guardamos el resultado de la base de datos, a partir de aquí db = indexedDB
                console.log(db);
                success();
            });

            //si necesita actualizarse...
            request.addEventListener('upgradeneeded', function(e) {
                console.log('Updating database...');
                db = e.target.result;
                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });

                console.log(tweets);


            });


            request.addEventListener('error', function(e) {
                console.log('Error opening' + cfg.name + ' database');
            });


            //pedimos la transacción, como primer parámetro ponemos el almacén que de objetos que queremos bloquear, 
            //pueden uno o varios, en este caso es uno. En el segundo parámetro se indica si la transacción es de 
            //solo de lectura o lectura escritura, se indica mediante "readwrite"


        } else {
            success();
        }
    };



//cada vez que hagamos una función para hacer una operación con la BD


    var insert = function(tweet) {
        init(function() {
            var transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');
            var request = store.add(tweet);
        });

    };

    var get = function (id, success) {
        init(function(){
            var transaction = db.transaction(['tweets'], "readonly");
            var store = transaction.objectStore('tweets');
            var getRequest = store.get(id);
            // tenemos que esperar a que nos devuelva el dato de la BD, así que le asociamos un evento 
            // a success para ello
            getRequest.addEventListener('success', function (e){

                //utilizamos un callback para devolver al main
                success(e.target.result);

               
            });

        });
    };


       





    //hacemos pública esta parte
    return {
        //insert: insert, //nombre propiedad : nombre variable (función declarada arriba) 
        get : get
    };

})();
