var ipv = 0;
var ipvtotal = 0;
var apv = 0;
var apvtotal = 0;
var x = 0;
var y = 0;

function start(i1, i2, a1, a2){
    setTimeout(function(){
        document.getElementById("ibarra").innerHTML = "<div class='barra'><i id='pv' class='pv'></i><i class='notpv' id='notpv'></i></div><i id='pvEscrito'></i>";
        document.getElementById("abarra").innerHTML = "<div class='barra'><i id='aliadopv' class='pv'></i><i class='notpv' id='aliadonotpv'></i></div><i id='aliadopvEscrito'></i>";

        ipv = i1;    
        ipvtotal = i2;      
        var barra = Math.round((ipv/ipvtotal)*100);
        calcularvidainimigo(barra);

        apv = a1;    
        apvtotal = a2;      
        var barra = Math.round((apv/apvtotal)*100);
        calcularvidaaliado(barra);  
    },800);
}
function rolar(){
    return(Math.trunc(Math.random()*20+1));
}
function mostrarrolagem(rolagem){

    if(rolagem>=20){
        document.getElementById("rolagem").innerHTML = "rolagem: <strong class='green'>"+rolagem+"</strong>";
    } else if(rolagem>=10){
        document.getElementById("rolagem").innerHTML = "rolagem: <strong>"+rolagem+"</strong>";
    } else {
        document.getElementById("rolagem").innerHTML = "rolagem: <strong class='red'>0"+rolagem+"</strong>";
    }    
}
function atacar(){
    document.getElementById("mensagem").className = "hidden";
    document.getElementById("ataques").className = "caixa";
    document.addEventListener("keydown", mover, false);
    document.addEventListener("keydown", position, false);
    document.addEventListener("keydown", enter, false);
    position();
}
function mover(key) {
    if(key.keyCode == 87){
        x += 1;
    }
    if(key.keyCode == 65){
        y -= 1;
    }
    if(key.keyCode == 83){
        x -= 1;
    }
    if(key.keyCode == 68){
        y += 1;
    }
    if(x>1){
        x = 0;
    }
    if(x<0){
        x = 1;
    }
    if(y>1){
        y = 0;
    }
    if(y<0){
        y = 1;
    }
}
function position() {
    if (x == 0 && y == 0) {
        document.getElementById('ataque1').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
    } else if (x == 0 && y == 1) {
        document.getElementById('ataque2').style.backgroundColor = "#202020";
        document.getElementById('ataque1').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
    } else if (x == 1 && y == 0) {
        document.getElementById('ataque3').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque1').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
    } else if (x == 1 && y == 1) {
        document.getElementById('ataque4').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque1').style.background = "none";
    }
}
function enter(key){
    if (key.keyCode == 13){
        if (x == 0 && y == 0) {
            document.getElementById('ataque1').onclick();    
            remove();
        } else if (x == 0 && y == 1) {
            document.getElementById('ataque1').onclick();  
            remove();  
        } else if (x == 1 && y == 0) {
            document.getElementById('ataque1').onclick();  
            remove();  
        } else if (x == 1 && y == 1) {
            document.getElementById('ataque1').onclick(); 
            remove();   
        }
    }
}
function remove() {
    document.removeEventListener("keydown", mover, false);
    document.removeEventListener("keydown", position, false);
}
function mensagem(mensagem){
    document.getElementById("ataques").className = "hidden";
    document.getElementById("mensagem").className = "caixa";
    document.getElementById("mensagem").innerHTML = mensagem;
    setTimeout(function() {
        document.getElementById("mensagem").innerHTML = "<p>O que você vai fazer?</p>";
    },1400);
}
function ataque(tipo,sucesso,danobase,af,am,an,ad,df,dm,dn,dd){
    if (tipo<=4){
        ataquefisico(sucesso,danobase,af,df);
    } else if (tipo<=6){
        ataquemagico(sucesso,danobase,am,dm);
    } else if (tipo<=8){
        ataquenatural(sucesso,danobase,an,dn);
    } else {
        ataquedivino(sucesso,danobase,ad,dd);
    } 
}
function ataquefisico(sucesso,danobase,af,df){

    rolagem = rolar();
    mostrarrolagem(rolagem);
    if(rolagem == 20){
        var dano = Math.round((danobase*af*3)/(df*0.5));
        mensagem("<p>Crítico!</p>");
    } else if (rolagem>sucesso){
        var dano = Math.round((danobase*af*3)/df);
        mensagem("<p>O ataque acertou.</p>");
    } else {
        var dano = 0;
        mensagem("<p>O ataque falhou.</p>");
    }

    ipv -= dano;

    if(ipv>0){    
            var barra = Math.round((ipv/ipvtotal)*100);
    } else {
    ipv = 0;
    var barra = 0;
    }
    calcularvidainimigo(barra);
}
function ataquemagico(sucesso,danobase,am,dm){
    
    rolagem = rolar();
    mostrarrolagem(rolagem);
    if(rolagem == 20){
        var dano = Math.round((danobase*am*3)/(dm*0.5));
        mensagem("<p>Crítico!</p>");
    } else if (rolagem>sucesso){
        var dano = Math.round((danobase*am*3)/dm);
        mensagem("<p>A magia acertou.</p>");
    } else {
        var dano = 0;
        mensagem("<p>A magia falhou.</p>");
    }

    ipv -= dano;

    if(ipv>0){    
            var barra = Math.round((ipv/ipvtotal)*100);
    } else {
    ipv = 0;
    var barra = 0;
    }
    calcularvidainimigo(barra);
}
function ataquenatural(sucesso,danobase,an,dn){
    
    rolagem = rolar();
    mostrarrolagem(rolagem);
    if(rolagem == 20){
        var dano = Math.round((danobase*an*3)/(dn*0.5));
        mensagem("<p>Crítico!</p>");
    } else if (rolagem>sucesso){
        var dano = Math.round((danobase*an*3)/dn);
        mensagem("<p>O ataque acertou.</p>");
    } else {
        var dano = 0;
        mensagem("<p>O ataque falhou.</p>");
    }

    ipv -= dano;

    if(ipv>0){    
            var barra = Math.round((ipv/ipvtotal)*100);
    } else {
    ipv = 0;
    var barra = 0;
    }
    calcularvidainimigo(barra);
}
function ataquedivino(sucesso,danobase,ad,dd){
    
    rolagem = rolar();
    mostrarrolagem(rolagem);
    if(rolagem == 20){
        var dano = Math.round((danobase*ad*3)/(dd*0.5));
        mensagem("<p>Crítico!</p>");
    } else if (rolagem>sucesso){
        var dano = Math.round((danobase*ad*3)/dd);
        mensagem("<p>O ataque acertou.</p>");
    } else {
        var dano = 0;
        mensagem("<p>O ataque falhou.</p>");
    }

    ipv -= dano;

    if(ipv>0){    
            var barra = Math.round((ipv/ipvtotal)*100);
    } else {
    ipv = 0;
    var barra = 0;
    }
    calcularvidainimigo(barra);
}
function calcularvidainimigo(barra){
    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("pv").innerHTML = BarraCheia;
    document.getElementById("notpv").innerHTML = BarraVazia;
    document.getElementById("pvEscrito").innerHTML = ipv+"/"+ipvtotal;
}
function calcularvidaaliado(barra){
    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("aliadopv").innerHTML = BarraCheia;
    document.getElementById("aliadonotpv").innerHTML = BarraVazia;
    document.getElementById("aliadopvEscrito").innerHTML = apv+"/"+apvtotal;
}

