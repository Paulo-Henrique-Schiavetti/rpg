x = 40;
y = 45;
parado = true;
direcao = "down";
mirax = x-10;
miray = y;

window.addEventListener("keydown", wasd, false);

function wasd(key) {
    if (parado == true){
        parado = false;
        if(key.keyCode == 87){
            if (direcao == "up"){
                movimento();
            } else {
                direcao = "up";             
                mirax = x+10;
                miray = y;  
                parado = true;
            }
                        
        } else if(key.keyCode == 65){
            if (direcao == "left"){
                movimento();
            } else {
                direcao = "left";             
                mirax = x;
                miray = y+5;  
                parado = true;
            }
        } else if(key.keyCode == 83){
            if (direcao == "down"){
                movimento();
            } else {
                direcao = "down";             
                mirax = x-10;
                miray = y;  
                parado = true;
            }
        } else if(key.keyCode == 68){
            if (direcao == "right"){
                movimento();
            }else {
                direcao = "right";             
                mirax = x;
                miray = y-5;  
                parado = true;
            }
        } else {
            parado = true;
        } 
    animacao();       
    }
}
function movimento(){
        if (colisao()){
        var movimentacao = setInterval(function(){ 
            if(direcao == "up"){
                x += 2;             
                mirax = x+10;
                miray = y;       
            }
            if(direcao == "left"){
                y += 1;
                mirax = x;
                miray = y+5;   
            }
            if(direcao == "down"){
                x -= 2;
                mirax = x-10;
                miray = y;   
            }
            if(direcao == "right"){
                y -= 1;
                mirax = x;
                miray = y-5;   
            }
            if(x < 0){
                x += 2;
            }
            if(y < 0){
                y += 1;
            }
            if(x > 90){
                x -= 2;
            }
            if(y > 90){
                y -= 1;
            }
            position();
        },100);
        setTimeout(function(){
            clearInterval(movimentacao);
            parado = true;
        }, 500);
    } else {
        parado = true;
    }
}
function position() {
    document.getElementById('char').style = 'bottom:'+x+'%; right:'+y+'%;';
    document.getElementById('char').style.zIndex = 10-(x/10);
}
function teletransporte(a,b) {
    x = a;
    y = b;
    position();
}

function animacao () {
    if (direcao == "up") {
        document.getElementById('char').src = "/public/img/characters/charUp.png"
    } else if (direcao == "left") {
        document.getElementById('char').src = "/public/img/characters/charLeft.png"
    } else if (direcao == "down") {
        document.getElementById('char').src = "/public/img/characters/char.png"
    } else {
        document.getElementById('char').src = "/public/img/characters/charRight.png"
    }
    
}