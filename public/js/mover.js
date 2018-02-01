x = 40;
y = 45;
parado = true;
direcao = "down";
mirax = x-10;
miray = y;

window.addEventListener("keydown", movimento, false);

function movimento(key) {
    if (parado == true){
        parado = false;
        if(key.keyCode == 87){
            direcao = "up";
        }
        if(key.keyCode == 65){            
            direcao = "left";  
        }
        if(key.keyCode == 83){
            direcao = "down"; 
        }
        if(key.keyCode == 68){
            direcao = "right"; 
        }
        animar()
    }
}
function animar(){
    var animacao = setInterval(function(){ 
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
        if(x > 85){
            x -= 2;
        }
        if(y > 90){
            y -= 1;
        }
        position();
    },100);
    setTimeout(function(){
        clearInterval(animacao);
        parado = true;
    }, 500);
}
function position() {
    document.getElementById('char').style = 'bottom:'+x+'%; right:'+y+'%;';
}
function teletransporte(a,b) {
    x = a;
    y = b;
    position();
}