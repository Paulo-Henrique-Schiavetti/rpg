x = 40;
y = 45;
parado = true;
objx = 60;
objy = 60;

window.addEventListener("keydown", movimento, false);

function movimento(key) {
    if (parado == true){
        parado = false;
        var animacao = setInterval(function(){ 
            if(key.keyCode == 87){
                x += 2;        
            }
            if(key.keyCode == 65){
                y += 1;
            }
            if(key.keyCode == 83){
                x -= 2;
            }
            if(key.keyCode == 68){
                y -= 1;
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
}
function position() {
    document.getElementById('char').style = 'bottom:'+x+'%; right:'+y+'%;';
}
function point(a,b) {
    x = a;
    y = b;
    position();
}

var obj = setInterval(function(){
    if (parado){
        if (x == objx && y == objy) {
            point(10,10);
        }
    }    
}, 10);