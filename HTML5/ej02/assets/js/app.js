window.onload = function() {

var loaded=false;
var player = document.getElementById('player');
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');
var forward = document.getElementById('forward');
var backward = document.getElementById('backward');
var startFn = document.getElementById('startFn');
var end = document.getElementById('end');
var fullscreen = document.getElementById('fullscreen');
var volume = document.getElementById('volume');
var progress = document.getElementById('progress');
var playlist= document.getElementById('playlist');





var canPlayfn = function (e){
    console.log('video loaded');
    loaded=true;
    volume.value=player.volume*100;
    progress.value=0;
};


var playFn = function (e){
    if(loaded){
        player.play();
        volume.value = player.volume*100;
    }
};

var pauseFn = function(e){

    if (loaded){
        player.pause();
        player.currentTime = 0;
    }

};
var stopFn = function(e){
    e.preventDefault();
    if (loaded){
        player.pause();
        play.currentTime = 0;
    }
};

var startFn = function (e){

};

var backwardFn = function(e){
    e.preventDefault();
    if (loaded){
       
        play.currentTime =-10;
    }
};

var forwardFn = function(e){
    e.preventDefault();
    if (loaded){
       
        play.currentTime =+10;
    }
};

var endFn = function(e){
    e.preventDefault();
    if (loaded){
       
        play.currentTime = player.duration;
    }

};

var updateFn = function (e){
    progress.value = player.curretnTime/player.duration*100;
};

var volumeFn = function (e){
    if(loaded){
        player.volume= this.value/100;
    }
};

var changeVideo = function (e){
    var src = target.dataset.src;

   if (Modernizr.video.h264){
    player.src = src + '.mp4';
   }
};



    player.addEventListener('click', playFn, false);
    play.addEventListener('click', playFn, false);
    pause.addEventListener('click', PauseFn, false);
    stop.addEventListener('click', StopFn, false);

    document.addEventListener('canplay',canplayFn,false);
    player.addEventListener('update', updateFn, false);
    volume.addEventListener('input', volumeFn, false);







    /*botones = document.querySelectorAll('boton');

    for (var i = 0; i < botones.length; i++) {

        if (botones[i].value === "Iniciar") {

            iniciar(botones[i]);

        } else if (botones[i].value === "Pausar"){

            pausar(botones[i]);
        }  else if (botones[i].value === "Avanzar"){

            avanzar(botones[i]);
        } else if (botones[i].value === "Pausar"){

            pausar(botones[i]);

        } else if (botones[i].value === "Retroceder"){

            retroceder(botones[i]);

        } else if (botones[i].value === "Fin"){

            inicio(botones[i]);

        } else if (botones[i].value === "Pantalla Completa"){

            pausar(botones[i]);

        }

    }





    var iniciar = function(e) {

        this.play();
    };

    var pausa = function(e) {

        this.pause();

    };

    /*var parar = function(e) {
        this.

    };

    var avanzar = function(e) {

    };

    var retroceder = function(e) {

    };

    var fin = function(e) {

    };

    var completa = function(e) {

    };*/





    



};