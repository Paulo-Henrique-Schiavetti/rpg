var ipv = 0;
var ipvtotal = 0;
var apv = 0;
var apvtotal = 0;

function start(i1, i2, a1, a2){
    setTimeout(function(){
        document.getElementById("ibarra").innerHTML = "<div class='barra'><i id='pv' class='pv'></i><i id='notpv'></i></div><i id='pvEscrito'></i>";
        document.getElementById("abarra").innerHTML = "<div class='barra'><i id='aliadopv' class='pv'></i><i id='aliadonotpv'></i></div><i id='aliadopvEscrito'></i>";

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

function atacar(){
    document.getElementById("mensagem").className = "hidden";
    document.getElementById("ataques").className = "caixa";
}
function mensagem(mensagem){
    document.getElementById("ataques").className = "hidden";
    document.getElementById("mensagem").className = "caixa";
    document.getElementById("mensagem").innerHTML = mensagem;
    setTimeout(function() {
        document.getElementById("mensagem").innerHTML = "<p>O que você vai fazer?</p>";
    },1400);
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