x = 50;
y = 50;
window.addEventListener("keydown", up, false);
window.addEventListener("keydown", left, false);
window.addEventListener("keydown", down, false);
window.addEventListener("keydown", right, false);
window.addEventListener("keydown", limit, false);
window.addEventListener("keypress", position, false);
function up(key) {
    if(key.keyCode == 87){
        x += 2;
    }
}
function left(key) {
    if(key.keyCode == 65){
        y += 1;
    }
}
function down(key) {
    if(key.keyCode == 83){
        x -= 2;
    }
}
function right(key) {
    if(key.keyCode == 68){
        y -= 1;
    }
}
function limit() {
    if(x < 10){
        x += 2;
    }
    if(y < 5){
        y += 1;
    }
    if(x > 95){
        x -= 2;
    }
    if(y > 95){
        y -= 1;
    }
}
function position() {
    document.getElementById('char').innerHTML = '<img src="/public/img/char.png" style="position: absolute; bottom:'+(x-10)+'%; right:'+(y-5)+'%;"/>';
}
function point(a,b) {
    document.getElementById('char').innerHTML = '<img src="/public/img/char.png" style="position: absolute; bottom:'+a+'%; right:'+b+'%;"/>';
}