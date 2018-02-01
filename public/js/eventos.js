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

function colisao() {
    if (direcao == "up") {
        if (x+10 == eventoi1x && eventoi1y == y || x+10 == eventoi2x && eventoi2y == y) {
            return(false);
        } else {
            return(true);
        }
    }
    if (direcao == "left") {
        if (x == eventoi1x && eventoi1y == y+5 || x == eventoi2x && eventoi2y == y+5) {
            return(false);
        } else {
            return(true);
        }
    }
    if (direcao == "down") {
        if (x-10 == eventoi1x && eventoi1y == y || x-10 == eventoi2x && eventoi2y == y) {
            return(false);
        } else {
            return(true);
        }
    }
    if (direcao == "right") {
        if (x == eventoi1x && eventoi1y == y-5 || x == eventoi2x && eventoi2y == y-5) {
            return(false);
        } else {
            return(true);
        }
    }
    
}
