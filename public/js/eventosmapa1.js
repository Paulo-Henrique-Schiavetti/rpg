eventoa1ativo = false;
eventoa2ativo = false;
eventoi1ativo = false;
eventoi2ativo = false;

function eventoi1() {
    if(eventoi1ativo==false){
        if (x == 40 && y == 30) {
            mensagem('_oi!');
            resetmensagem(1500);
            eventoi1ativo = true;          
        }
        setTimeout(function(){
            eventoi1ativo = false;
        },1500);                  
    }
}
function eventoi2() {
    if(eventoi2ativo==false){
        if (x == 20 && y == 45) {
            mensagem('_oi!');
            resetmensagem(1500);
            eventoi2ativo = true;          
        }
        setTimeout(function(){
            eventoi2ativo = false;
        },1500);                  
    }
}

function eventoa1() {
    if(eventoa1ativo==false){
        if (x == 40 && y == 60) {
            teletransporte(70,45);
            eventoa2ativo = true; 
        }
    } else if (x != 40 || y != 60) {
        eventoa1ativo = false;
        eventoa2ativo = false;          
    }
}

function eventoa2() {
    if(eventoa2ativo==false){
        if (x == 70 && y == 45) {
            teletransporte(40,60);
            eventoa1ativo = true; 
        }
    } else if (x != 70 || y != 45) {
        eventoa1ativo = false;
        eventoa2ativo = false;          
    }
}