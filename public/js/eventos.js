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