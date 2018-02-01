document.addEventListener("keydown", eventosinterativos, false);

function eventosinterativos(key) {
    if (parado){
        if (key.keyCode == 90) {
            eventoi1();
            eventoi2();
        }        
    }    
}

var eventosautomaticos = setInterval(function(){
    if (parado){
        eventoa1();
        eventoa2();        
    }    
}, 1);

var colisao = setInterval(function(){
    if (parado){
        if (x == eventoi1x && eventoi1y == y || x == eventoi2x && eventoi2y == y) {
            parado = false;
            if (direcao == "right") {
                direcao = "left";
            } else if (direcao == "left") {
                direcao = "right";
            } else if (direcao == "up") {
                direcao = "down";
            } else if (direcao == "down") {
                direcao = "up";
            }
            animar();
        }
    }        
}, 1);
