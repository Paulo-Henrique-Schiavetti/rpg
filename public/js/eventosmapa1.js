eventoa1ativo = false;
eventoa2ativo = false;
eventoi1ativo = false;
eventoi1x = 40;
eventoi1y = 30;
eventoi2ativo = false;
eventoi2x = 20;
eventoi2y = 45;

function eventoi1() {
    if(eventoi1ativo==false){
        if (mirax == 40 && miray == 30) {
            multmensagens('Airien:<br/>oi!|Airien:<br/>Meu nome é Airien.|Airien:<br/>e o seu?|Airien:<br/>prazer em te conhecer!|Airien:<br/>tchau!', 5);
            eventoi1ativo = true;          
        }
        setTimeout(function(){
            eventoi1ativo = false;
        },2000);                  
    }
}
function eventoi2() {
    if(eventoi2ativo==false){
        if (mirax == 20 && miray == 45) {
            mensagem('Airien:<br/>oi!');
            eventoi2ativo = true;          
        }        
        setTimeout(function(){
            eventoi2ativo = false;
        },1000);                  
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