var p = 1;
var mensagemativa = false;
var multmensagem = [];
var contadormensagem = 0;

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
function mensagem(mensagem){
    mensagem = "<p>"+mensagem+"</p>";
    document.getElementById("menu").className = "hidden";
    document.getElementById("mensagem").className = "caixa";
    document.getElementById("mensagem").innerHTML = mensagem;
    mensagemativa = true;
    parado = false;
    document.addEventListener("keydown", resetmensagem, false);
}
function multmensagens(mensagem, qtd) {
    mensagem = mensagem.split("|");
    multmensagem[0] = "<p>"+mensagem[0]+"</p>";
    multmensagem[1] = "<p>"+mensagem[1]+"</p>";
    if (qtd == 3) {
        multmensagem[2] = "<p>"+mensagem[2]+"</p>";
    }
    if (qtd == 4) {
        multmensagem[2] = "<p>"+mensagem[2]+"</p>";
        multmensagem[3] = "<p>"+mensagem[3]+"</p>";
    }
    if (qtd == 5) {
        multmensagem[2] = "<p>"+mensagem[2]+"</p>";
        multmensagem[3] = "<p>"+mensagem[3]+"</p>";
        multmensagem[4] = "<p>"+mensagem[4]+"</p>";                          
    }
    document.getElementById("menu").className = "hidden";
    document.getElementById("mensagem").className = "caixa";
    document.getElementById("mensagem").innerHTML = multmensagem[0];
    mensagemativa = true;
    parado = false;
    document.addEventListener("keydown", continuarmensagem, false);
}
function continuarmensagem(key) {
    if (key.keyCode == 13) {
        contadormensagem += 1;
        document.getElementById("mensagem").innerHTML = multmensagem[contadormensagem];
        multmensagem[contadormensagem-1] = "";
        if (contadormensagem == 4) {
            multmensagem[contadormensagem] = "";
            contadormensagem = 0;
            document.addEventListener("keydown", resetmensagem, false);
            document.removeEventListener("keydown", continuarmensagem, false);
        }
    }
}
function resetmensagem(key){
    if (key.keyCode == 13) {
        document.getElementById("menu").className = "caixa";
        document.getElementById("mensagem").className = "hidden";
        mensagemativa = false;
        parado = true;
        document.removeEventListener("keydown", resetmensagem, false);
    }
}