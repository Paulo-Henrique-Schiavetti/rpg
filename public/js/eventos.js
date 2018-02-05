eva1ativo = false;
eva2ativo = false;
eva3ativo = false;
eva4ativo = false;
eva5ativo = false;
eva1x = 40;
eva1y = 50;
eva2x = 50;
eva2y = 70;
eva3x = 0;
eva3y = 0;
eva4x = 0;
eva4y = 0;
eva5x = 0;
eva5y = 0;

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
        if (key.keyCode == 13) {
            if(evi1ativo==false){
                if (mirax == evi1x && miray == evi1y) {
                    multmensagens('Garota:<br/>oi! Você é um aventureiro?|Garota:<br/>Meu nome é Irian.|Irian:<br/>Minha irmã Airien está presa na floresta... Se por um acaso você a encontrar...|Irian:<br/>a floresta fica naquela direção <br/> <--|Irian:<br/>estou contando com você!', 5);
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
        if (key.keyCode == 13) {
            if(evi2ativo==false){
                if (mirax == evi2x && miray == evi2y) {
                    mensagem('Airien:<br/>Ah, graças a Jojo! você veio me salvar?');
                    evi2ativo = true;          
                }        
                setTimeout(function(){
                    evi2ativo = false;
                },1000);                  
            }
        }
    }    
}

function qua1eva1() {
    if(eva1ativo==false){
        if (x == eva1x && y == eva1y) {
            teletransporte(eva2x,eva2y);
            eva2ativo = true; 
        }
    } else if (x != eva1x || y != eva1y) {
        eva1ativo = false;
        eva2ativo = false;          
    }
}
function qua1eva2() {
    if(eva2ativo==false){
        if (x == eva2x && y == eva2y) {
            teletransporte(eva1x,eva1y);
            eva1ativo = true; 
        }
    } else if (x != eva2x || y != eva2y) {
        eva1ativo = false;
        eva2ativo = false;          
    }
}