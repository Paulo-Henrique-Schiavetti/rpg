q1ativo = false;
q2ativo = false;
q3ativo = false;
q4ativo = false;

function gerareventos() {
    quadrantex = Math.trunc(x/200+1);
    quadrantey = Math.trunc(y/200+1);
    if (quadrantex == 1 && quadrantey == 1) { 
        if (q1ativo){
            quadrante1();
        } else {
            document.getElementById('tela').innerHTML ='<img src="/public/img/backgrounds/mapa1.png" style="z-index: 0;" id="fundo"/><img src="/public/img/characters/char.png" id="char"/><img src="/public/img/characters/Airien.png" id="evi1" class="evento" /><img src="/public/img/characters/Airien.png" id="evi2" class="evento"/><img src="/public/img/characters/buracoentrada.png" id="eva1" class="evento"/><img src="/public/img/characters/buracosaida.png" id="eva2" class="evento"/>';
            document.addEventListener("keydown", qua1evi1, false);
            document.addEventListener("keydown", qua1evi2, false);              
            var qua1eva = setInterval(function(){
                if (parado){
                    qua1eva1();
                    qua1eva2();      
                }    
            }, 1);
            q1ativo = true;
            quadrante1();
        }            
    } else if (quadrantex == 2 && quadrantey == 1) { 
        if (q2ativo){
            quadrante2();
        } else {
            document.getElementById('tela').innerHTML ='<img src="/public/img/backgrounds/mapa1.png" style="z-index: 0;" id="fundo"/><img src="/public/img/characters/char.png" id="char"/><img src="/public/img/characters/Airien.png" id="evi1" class="evento" /><img src="/public/img/characters/Airien.png" id="evi2" class="evento"/><img src="/public/img/characters/buracoentrada.png" id="eva1" class="evento"/><img src="/public/img/characters/buracosaida.png" id="eva2" class="evento"/>';
            position();
            document.addEventListener("keydown", qua1evi1, false);
            document.addEventListener("keydown", qua1evi2, false);              
            var qua1eva = setInterval(function(){
                if (parado){
                    qua1eva1();
                    qua1eva2();      
                }    
            }, 1);
            q2ativo = true;
            quadrante2();
        }            
    }
}

function colisao() {
    if (direcao == "up") {
        if (x+5 == evi1x && evi1y == y || x+5 == evi2x && evi2y == y || x+5 == evi3x && evi3y == y || x+5 == evi4x && evi4y == y || x+5 == evi5x && evi5y == y) {
            return(false);
        } else {
            return(true);
        }
    }
    if (direcao == "left") {
        if (x == evi1x && evi1y == y+5 || x == evi2x && evi2y == y+5 || x == evi3x && evi3y == y+5 || x == evi4x && evi4y == y+5 || x == evi5x && evi5y == y+5) {
            return(false);
        } else {
            return(true);
        }
    }
    if (direcao == "down") {
        if (x-5 == evi1x && evi1y == y || x-5 == evi2x && evi2y == y || x-5 == evi3x && evi3y == y || x-5 == evi4x && evi4y == y || x-5 == evi5x && evi5y == y) {
            return(false);
        } else {
            return(true);
        }
    }
    if (direcao == "right") {
        if (x == evi1x && evi1y == y-5 || x == evi2x && evi2y == y-5 || x == evi3x && evi3y == y-5 || x == evi4x && evi4y == y-5 || x == evi5x && evi5y == y-5) {
            return(false);
        } else {
            return(true);
        }
    }
    
}

function quadrante1(){    
    document.getElementById('evi1').style = 'bottom:'+(evi1x+50-x)+'%; right:'+((evi1y+62.5-y)*0.8)+'%;';
    document.getElementById('evi1').style.zIndex = 200-evi1x;
    document.getElementById('evi2').style = 'bottom:'+(evi2x+50-x)+'%; right:'+((evi2y+62.5-y)*0.8)+'%;';
    document.getElementById('evi2').style.zIndex = 200-evi2x;
    document.getElementById('eva1').style = 'bottom:'+(eva1x+50-x)+'%; right:'+((eva1y+62.5-y)*0.8)+'%;';
    document.getElementById('eva1').style.zIndex = 200-eva1x;
    document.getElementById('eva2').style = 'bottom:'+(eva2x+50-x)+'%; right:'+((eva2y+62.5-y)*0.8)+'%;';
    document.getElementById('eva2').style.zIndex = 200-eva2x;
}
function quadrante2(){    
}
