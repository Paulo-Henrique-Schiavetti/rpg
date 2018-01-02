x = 50;
y = 50;
window.addEventListener("keydown", mover, false);
window.addEventListener("keypress", position, false);
function mover(key) {
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
    if(x < 20){
        x += 2;
    }
    if(y < 10){
        y += 1;
    }
    if(x > 80){
        x -= 2;
    }
    if(y > 90){
        y -= 1;
    }
}
function position() {
    document.getElementById('char').innerHTML = '<img src="/public/img/aliado1.png" style="position: absolute; bottom:'+(x-10)+'%; right:'+(y-5)+'%;"/>';
}