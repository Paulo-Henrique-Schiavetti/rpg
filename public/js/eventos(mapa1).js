eventoa1ativo = false;
eventoa2ativo = false;
eventoa3ativo = false;
eventoa4ativo = false;
eventoa5ativo = false;

eventoi1ativo = false;
eventoi2ativo = false;
eventoi3ativo = false;
eventoi4ativo = false;
eventoi5ativo = false;

eventoi1x = 40;
eventoi1y = 30;
eventoi2x = 20;
eventoi2y = 70;
eventoi3x = 0;
eventoi3y = 0;
eventoi4x = 0;
eventoi4y = 0;
eventoi5x = 0;
eventoi5y = 0;

var posicionareventos = setTimeout(function(){
    document.getElementById('char').style = 'bottom:'+(x*1.2)+'%; right:'+y+'%;';
    document.getElementById('char').style.zIndex = 99-x;
    document.getElementById('eventoi1').style = 'bottom:'+(eventoi1x*1.2)+'%; right:'+eventoi1y+'%;';
    document.getElementById('eventoi1').style.zIndex = 99-eventoi1x;
    document.getElementById('eventoi2').style = 'bottom:'+(eventoi2x*1.2)+'%; right:'+eventoi2y+'%;';
    document.getElementById('eventoi2').style.zIndex = 99-eventoi2x;
    /*
    document.getElementById('eventoi3').style = 'bottom:'+(eventoi3x*1.2)+'%; right:'+eventoi3y+'%;';
    document.getElementById('eventoi3').style.zIndex = 99-eventoi3x;
    document.getElementById('eventoi4').style = 'bottom:'+(eventoi4x*1.2)+'%; right:'+eventoi4y+'%;';
    document.getElementById('eventoi4').style.zIndex = 99-eventoi4x;
    document.getElementById('eventoi5').style = 'bottom:'+(eventoi5x*1.2)+'%; right:'+eventoi5y+'%;';
    document.getElementById('eventoi5').style.zIndex = 99-eventoi5x;
    */
}, 1);

function eventoi1() {
    if(eventoi1ativo==false){
        if (mirax == 40 && miray == 30) {
            multmensagens('Garota:<br/>oi! Você é um aventureiro?|Garota:<br/>Minha irmã gêmea está presa na floresta, se você pudesse encontrá-la...|Garota:<br/>a propósito, meu nome é Airien.|Airien:<br/>a floresta fica naquela direção <br/> <--|Airien:<br/>estou contando com você!', 5);
            eventoi1ativo = true;          
        }
        setTimeout(function(){
            eventoi1ativo = false;
        },2000);                  
    }
}
function eventoi2() {
    if(eventoi2ativo==false){
        if (mirax == 20 && miray == 70) {
            mensagem('Irmã da Airien:<br/>Ah, grassas a Jojo! você veio me salvar?');
            eventoi2ativo = true;          
        }        
        setTimeout(function(){
            eventoi2ativo = false;
        },1000);                  
    }
}
function eventoi3() {
}
function eventoi4() {
}
function eventoi5() {
}

function eventoa1() {
    if(eventoa1ativo==false){
        if (x == 40 && y == 55) {
            teletransporte(70,70);
            eventoa2ativo = true; 
        }
    } else if (x != 40 || y != 55) {
        eventoa1ativo = false;
        eventoa2ativo = false;          
    }
}
function eventoa2() {
    if(eventoa2ativo==false){
        if (x == 70 && y == 70) {
            teletransporte(40,55);
            eventoa1ativo = true; 
        }
    } else if (x != 70 || y != 70) {
        eventoa1ativo = false;
        eventoa2ativo = false;          
    }
}
function eventoa3() {
}
function eventoa4() {
}
function eventoa5() {
}