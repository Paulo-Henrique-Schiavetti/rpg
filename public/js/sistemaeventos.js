document.addEventListener("keydown", eventosinterativos, false);

function eventosinterativos(key) {
    if (parado){
        if (key.keyCode == 90) {
            eventoi1();
            eventoi2();
            eventoi3();
            eventoi4();
            eventoi5();
        }        
    }    
}

var eventosautomaticos = setInterval(function(){
    if (parado){
        eventoa1();
        eventoa2();
        eventoa3();
        eventoa4();
        eventoa5();       
    }    
}, 1);

function colisao() {
    if (direcao == "up") {
        if (x+5 == eventoi1x && eventoi1y == y || x+5 == eventoi2x && eventoi2y == y || x+5 == eventoi3x && eventoi3y == y || x+5 == eventoi4x && eventoi4y == y || x+5 == eventoi5x && eventoi5y == y) {
            return(false);
        } else {
            return(true);
        }
    }
    if (direcao == "left") {
        if (x == eventoi1x && eventoi1y == y+5 || x == eventoi2x && eventoi2y == y+5 || x == eventoi3x && eventoi3y == y+5 || x == eventoi4x && eventoi4y == y+5 || x == eventoi5x && eventoi5y == y+5) {
            return(false);
        } else {
            return(true);
        }
    }
    if (direcao == "down") {
        if (x-5 == eventoi1x && eventoi1y == y || x-5 == eventoi2x && eventoi2y == y || x-5 == eventoi3x && eventoi3y == y || x-5 == eventoi4x && eventoi4y == y || x-5 == eventoi5x && eventoi5y == y) {
            return(false);
        } else {
            return(true);
        }
    }
    if (direcao == "right") {
        if (x == eventoi1x && eventoi1y == y-5 || x == eventoi2x && eventoi2y == y-5 || x == eventoi3x && eventoi3y == y-5 || x == eventoi4x && eventoi4y == y-5 || x == eventoi5x && eventoi5y == y-5) {
            return(false);
        } else {
            return(true);
        }
    }
    
}
