eva1ativo = false;
eva2ativo = false;
eva3ativo = false;
eva4ativo = false;
eva5ativo = false;

evi1ativo = false;
evi2ativo = false;
evi3ativo = false;
evi4ativo = false;
evi5ativo = false;

evi1x = 40;
evi1y = 20;
evi2x = 10;
evi2y = 70;
evi3x = 0;
evi3y = 0;
evi4x = 0;
evi4y = 0;
evi5x = 0;
evi5y = 0;

function qua1evi1(key) {
    if (parado){
        if (key.keyCode == 90) {
            if(evi1ativo==false){
                if (mirax == evi1x && miray == evi1y) {
                    multmensagens('Garota:<br/>oi! Você é um aventureiro?|Garota:<br/>Minha irmã gêmea está presa na floresta, se você pudesse encontrá-la...|Garota:<br/>a propósito, meu nome é Airien.|Airien:<br/>a floresta fica naquela direção <br/> <--|Airien:<br/>estou contando com você!', 5);
                    evi1ativo = true;          
                }
                setTimeout(function(){
                    evi1ativo = false;
                },2000);                  
            }
        }
    }    
}
function qua1evi2(key) {
    if (parado){
        if (key.keyCode == 90) {
            if(evi2ativo==false){
                if (mirax == evi2x && miray == evi2y) {
                    mensagem('Irmã da Airien:<br/>Ah, graças a Jojo! você veio me salvar?');
                    evi2ativo = true;          
                }        
                setTimeout(function(){
                    evi2ativo = false;
                },1000);                  
            }
        }
    }    
}

function eva1() {
    if(eva1ativo==false){
        if (x == 35 && y == 55) {
            teletransporte(50,70);
            eva2ativo = true; 
        }
    } else if (x != 35 || y != 55) {
        eva1ativo = false;
        eva2ativo = false;          
    }
}
function eva2() {
    if(eva2ativo==false){
        if (x == 50 && y == 70) {
            teletransporte(35,55);
            eva1ativo = true; 
        }
    } else if (x != 50 || y != 70) {
        eva1ativo = false;
        eva2ativo = false;          
    }
}