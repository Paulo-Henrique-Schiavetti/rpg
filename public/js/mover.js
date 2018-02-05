x = 60;
y = 20;
parado = true;
direcao = "down";
mirax = x-5;
miray = y;


var startmapa = setTimeout(function(){
    position();
}, 10);
window.addEventListener("keydown", wasd, false);

function wasd(key) {
    if (parado == true){
        parado = false;
        if(key.keyCode == 87){
            if (direcao == "up"){
                movimento();
            } else {
                direcao = "up";             
                mirax = x+5;
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
                mirax = x-5;
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
                x += 1;             
                mirax = x+5;
                miray = y;       
            }
            if(direcao == "left"){
                y += 1;
                mirax = x;
                miray = y+5;   
            }
            if(direcao == "down"){
                x -= 1;
                mirax = x-5;
                miray = y;   
            }
            if(direcao == "right"){
                y -= 1;
                mirax = x;
                miray = y-5;   
            }
            if(x < 0){
                x += 1;
            }
            if(y < 0){
                y += 1;
            }
            if(x > 200){
                x -= 1;
            }
            if(y > 200){
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
    gerareventos();
    document.getElementById('fundo').style.right = ((-y+62.5)*0.8)+"%";
    document.getElementById('fundo').style.bottom = (-x+50)+"%";
    document.getElementById('char').style.zIndex = 200-x;
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