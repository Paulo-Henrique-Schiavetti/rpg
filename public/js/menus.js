var p = 1;
var p2 = 1;
var mensagemativa = false;

function rolar(){
    return(Math.trunc(Math.random()*20+1));
}
function mostrarrolagem(rolagem,sucesso){

    if(rolagem>=20){
        document.getElementById("rolagem").innerHTML = "rolagem: <strong class='green'>"+rolagem+"</strong>";
    } else if(rolagem>sucesso){
        if(rolagem<10){
            document.getElementById("rolagem").innerHTML = "rolagem: <strong>0"+rolagem+"</strong>";
        } else {
            document.getElementById("rolagem").innerHTML = "rolagem: <strong>"+rolagem+"</strong>";
        }
    } else {
        if(rolagem<10){
            document.getElementById("rolagem").innerHTML = "rolagem: <strong class='red'>0"+rolagem+"</strong>";
        } else {
            document.getElementById("rolagem").innerHTML = "rolagem: <strong class='red'>"+rolagem+"</strong>";
        }        
    }    
}
function menuatacar(){
    if (mensagemativa == false){
        document.getElementById("mensagem").className = "hidden";
        document.getElementById("ataques").className = "caixa";
        document.addEventListener("keydown", mover, false);
        document.addEventListener("keydown", position, false);
        document.addEventListener("keydown", enter, false);
        position();
    } 
}
function mover(key) {
    if(key.keyCode == 87){
        p2 -= 1;
    }
    if(key.keyCode == 65){
        p2 -= 3;
    }
    if(key.keyCode == 83){
        p2 += 1;
    }
    if(key.keyCode == 68){
        p2 += 3;
    }
    if(p2==7){
        p2 = 1;
    }
    if(p2==0){
        p2 = 6;
    }
    if(p2==8){
        p2 = 2;
    }
    if(p2==-1){
        p2 = 5;
    }
    if(p2==9){
        p2 = 3;
    }
    if(p2==-2){
        p2 = 4;
    }
}
function position() {
    if (p2 == 1) {
        document.getElementById('ataque1').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
        document.getElementById('ataque5').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
    } else if (p2 == 2) {
        document.getElementById('ataque2').style.backgroundColor = "#202020";
        document.getElementById('ataque1').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
        document.getElementById('ataque5').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
    } else if (p2 == 3) {
        document.getElementById('ataque3').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque1').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
        document.getElementById('ataque5').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
    } else if (p2 == 4) {
        document.getElementById('ataque4').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque5').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
        document.getElementById('ataque1').style.background = "none";
    } else if (p2 == 5) {
        document.getElementById('ataque5').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
        document.getElementById('ataque1').style.background = "none";
    } else if (p2 == 6) {
        document.getElementById('ataque6').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
        document.getElementById('ataque5').style.background = "none";
        document.getElementById('ataque1').style.background = "none";
    }
}
function enter(key){
    if (key.keyCode == 13){
        if (p2 == 1) {
            document.getElementById('ataque1').click();    
            remove();
        } else if (p2 == 2) {
            document.getElementById('ataque2').click();  
            remove();  
        } else if (p2 == 3) {
            document.getElementById('ataque3').click();  
            remove();  
        } else if (p2 == 4) {
            document.getElementById('ataque4').click(); 
            remove();   
        } else if (p2 == 5) {
            document.getElementById('ataque5').click(); 
            remove();   
        } else if (p2 == 6) {
            document.getElementById('ataque6').click(); 
            remove();   
        }
    }
}
function remove() {
    document.removeEventListener("keydown", mover, false);
    document.removeEventListener("keydown", position, false);
    document.removeEventListener("keydown", enter, false);
}
function mensagem(mensagem){
    document.getElementById("ataques").className = "hidden";
    document.getElementById("mensagem").className = "caixa";
    document.getElementById("mensagem").innerHTML = mensagem;
    mensagemativa = true;
}
function mensagem2(mensagem){
    setTimeout(function() {
        if (mensagem==1){        
            document.getElementById("mensagem").innerHTML = "<p>Crítico!</p>";
        } else if (mensagem==2){
            document.getElementById("mensagem").innerHTML = "<p>O ataque acertou!</p>";        
        } else if (mensagem==3){
            document.getElementById("mensagem").innerHTML = "<p>O ataque falhou!</p>";
        }
        mensagemativa = true;   
        resetmensagem();
    },800);
}
function resetmensagem(){
    setTimeout(function() {
        document.getElementById("mensagem").innerHTML = "<p>O que você vai fazer?</p>";
        mensagemativa = false;
        menu3();
    },1000);
}
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