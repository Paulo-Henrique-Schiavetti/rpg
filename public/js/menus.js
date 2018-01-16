var p = 1;
function menu3(){
        document.addEventListener("keydown", menu3mover, false);
        document.addEventListener("keydown", menu3position, false);
        document.addEventListener("keydown", menu3enter, false);
        menu3position();
}
function menu3mover(key) {
    if(key.keyCode == 87){
        p -= 1;
    }
    if(key.keyCode == 65){
        p -= 1;
    }
    if(key.keyCode == 83){
        p += 1;
    }
    if(key.keyCode == 68){
        p += 1;
    }
    if (p>3){
        p=1;
    }
    if (p<1){
        p=3;
    }
}
function menu3position() {
    if (p == 1) {
        document.getElementById('item1').style.backgroundColor = "#202020";
        document.getElementById('item2').style.background = "none";
        document.getElementById('item3').style.background = "none";
    } else if (p == 2) {
        document.getElementById('item2').style.backgroundColor = "#202020";
        document.getElementById('item1').style.background = "none";
        document.getElementById('item3').style.background = "none";
    } else if (p == 3) {
        document.getElementById('item3').style.backgroundColor = "#202020";
        document.getElementById('item2').style.background = "none";
        document.getElementById('item1').style.background = "none";
    }
}
function menu3enter(key){
    if (key.keyCode == 13){
        if (p == 1) {
            document.getElementById('item1').click();    
            remove3();
        } else if (p == 2) {
            document.getElementById('item2').click();  
            remove3();  
        } else if (p == 3) {
            document.getElementById('item3').click();  
            remove3();  
        }
    }
}
function remove3() {
    document.removeEventListener("keydown", menu3mover, false);
    document.removeEventListener("keydown", menu3position, false);
    document.removeEventListener("keydown", menu3enter, false);
}