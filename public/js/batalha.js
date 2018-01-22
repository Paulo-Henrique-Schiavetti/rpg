var i1pv = 0;
var i1pvtotal = 0;
var a1pv = 0;
var a1pvtotal = 0;
var i3pv = 0;
var i3pvtotal = 0;
var a2pv = 0;
var a2pvtotal = 0;
var i3pv = 0;
var i3pvtotal = 0;
var a3pv = 0;
var ap3vtotal = 0;
var i4pv = 0;
var i4pvtotal = 0;
var a4pv = 0;
var a4pvtotal = 0;
var i5pv = 0;
var i5pvtotal = 0;
var a5pv = 0;
var a5pvtotal = 0;

function start(i1p, i1t, i2p, i2t, i3p, i3t, i4p, i4t, i5p, i5t, a1p, a1t, a2p, a2t, a3p, a3t, a4p, a4t, a5p, a5t){
    resetmensagem();
    setTimeout(function(){
        document.getElementById("ibarra").innerHTML = "<div class='barra'><i id='pv' class='pv'></i><i class='notpv' id='notpv'></i></div><i id='pvEscrito'></i>";
        document.getElementById("abarra").innerHTML = "<div class='barra'><i id='aliadopv' class='pv'></i><i class='notpv' id='aliadonotpv'></i></div><i id='aliadopvEscrito'></i>";
        document.getElementById("i2barra").innerHTML = "<div class='barra'><i id='pv2' class='pv'></i><i class='notpv' id='notpv2'></i></div><i id='pvEscrito2'></i>";
        document.getElementById("a2barra").innerHTML = "<div class='barra'><i id='aliadopv2' class='pv'></i><i class='notpv' id='aliadonotpv2'></i></div><i id='aliadopvEscrito2'></i>";
        document.getElementById("i3barra").innerHTML = "<div class='barra'><i id='pv3' class='pv'></i><i class='notpv' id='notpv3'></i></div><i id='pvEscrito3'></i>";
        document.getElementById("a3barra").innerHTML = "<div class='barra'><i id='aliadopv3' class='pv'></i><i class='notpv' id='aliadonotpv3'></i></div><i id='aliadopvEscrito3'></i>";
        document.getElementById("i4barra").innerHTML = "<div class='barra'><i id='pv4' class='pv'></i><i class='notpv' id='notpv4'></i></div><i id='pvEscrito4'></i>";
        document.getElementById("a4barra").innerHTML = "<div class='barra'><i id='aliadopv4' class='pv'></i><i class='notpv' id='aliadonotpv4'></i></div><i id='aliadopvEscrito4'></i>";
        document.getElementById("i5barra").innerHTML = "<div class='barra'><i id='pv5' class='pv'></i><i class='notpv' id='notpv5'></i></div><i id='pvEscrito5'></i>";
        document.getElementById("a5barra").innerHTML = "<div class='barra'><i id='aliadopv5' class='pv'></i><i class='notpv' id='aliadonotpv5'></i></div><i id='aliadopvEscrito5'></i>";
        
        dano = 0;

        i1pv = i1p;    
        i1pvtotal = i1t;
        calcularvidainimigo1(dano);
        i2pv = i2p;    
        i2pvtotal = i2t;
        calcularvidainimigo2(dano);
        i3pv = i3p;    
        i3pvtotal = i3t;
        calcularvidainimigo3(dano);
        i4pv = i4p;    
        i4pvtotal = i4t;
        calcularvidainimigo4(dano);
        i5pv = i5p;    
        i5pvtotal = i5t;
        calcularvidainimigo5(dano);

        a1pv = a1p;    
        a1pvtotal = a1t;
        calcularvidaaliado1(dano);
        a2pv = a2p;    
        a2pvtotal = a2t;
        calcularvidaaliado2(dano); 
        a3pv = a3p;    
        a3pvtotal = a3t;
        calcularvidaaliado3(dano); 
        a4pv = a4p;    
        a4pvtotal = a4t;
        calcularvidaaliado4(dano); 
        a5pv = a5p;    
        a5pvtotal = a5t;
        calcularvidaaliado5(dano); 
    },800);
}
function ataque(nome,tipo,sucesso,danobase,af,am,an,ad,df,dm,dn,dd){
    if (tipo<=4){
        calcularataque(nome,sucesso,danobase,af,df);
    } else if (tipo<=6){
        calcularataque(nome,sucesso,danobase,am,dm);
    } else if (tipo<=8){
        calcularataque(nome,sucesso,danobase,an,dn);
    } else {
        calcularataque(nome,sucesso,danobase,ad,dd);
    } 
}
function calcularataque(nome,sucesso,danobase,a,d){

    rolagem = rolar();
    mostrarrolagem(rolagem,sucesso);
    if(rolagem == 20){
        var dano = Math.round((danobase*a*3)/(d*0.5));
        mensagem("<p>Aliado usou "+nome+":</p>");
        mensagem2(1);
    } else if (rolagem>sucesso){
        var dano = Math.round((danobase*a*3)/d);
        mensagem("<p>Aliado usou "+nome+":</p>");
        mensagem2(2);
    } else {
        var dano = 0;
        mensagem("<p>Aliado usou "+nome+":</p>");
        mensagem2(3);
    }
    setTimeout(function() {
        calcularvidainimigo1(dano);
    },1400);
}
function calcularvidainimigo1(dano){

    i1pv -= dano;
    if(i1pv>0){    
            var barra = Math.round((i1pv/i1pvtotal)*100);
    } else {
        i1pv = 0;
        var barra = 0;
    }
    
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
    document.getElementById("pvEscrito").innerHTML = i1pv+"/"+i1pvtotal;
}
function calcularvidainimigo2(dano){

    i2pv -= dano;
    if(i2pv>0){    
            var barra = Math.round((i2pv/i2pvtotal)*100);
    } else {
        i2pv = 0;
        var barra = 0;
    }
    
    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("pv2").innerHTML = BarraCheia;
    document.getElementById("notpv2").innerHTML = BarraVazia;
    document.getElementById("pvEscrito2").innerHTML = i2pv+"/"+i2pvtotal;
}
function calcularvidainimigo3(dano){

    i3pv -= dano;
    if(i3pv>0){    
            var barra = Math.round((i3pv/i3pvtotal)*100);
    } else {
        i3pv = 0;
        var barra = 0;
    }
    
    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("pv3").innerHTML = BarraCheia;
    document.getElementById("notpv3").innerHTML = BarraVazia;
    document.getElementById("pvEscrito3").innerHTML = i3pv+"/"+i3pvtotal;
}
function calcularvidainimigo4(dano){

    i4pv -= dano;
    if(i4pv>0){    
            var barra = Math.round((i4pv/i4pvtotal)*100);
    } else {
        i4pv = 0;
        var barra = 0;
    }
    
    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("pv4").innerHTML = BarraCheia;
    document.getElementById("notpv4").innerHTML = BarraVazia;
    document.getElementById("pvEscrito4").innerHTML = i4pv+"/"+i4pvtotal;
}
function calcularvidainimigo5(dano){

    i5pv -= dano;
    if(i5pv>0){    
            var barra = Math.round((i5pv/i5pvtotal)*100);
    } else {
        i5pv = 0;
        var barra = 0;
    }
    
    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("pv5").innerHTML = BarraCheia;
    document.getElementById("notpv5").innerHTML = BarraVazia;
    document.getElementById("pvEscrito5").innerHTML = i5pv+"/"+i5pvtotal;
}
function calcularvidaaliado1(dano){
    
    a1pv -= dano;
    if(a1pv>0){    
            var barra = Math.round((i1pv/i1pvtotal)*100);
    } else {
        a1pv = 0;
        var barra = 0;
    }

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
    document.getElementById("aliadopvEscrito").innerHTML = a1pv+"/"+a1pvtotal;
}
function calcularvidaaliado2(dano){
    
    a2pv -= dano;
    if(a2pv>0){    
            var barra = Math.round((i2pv/i2pvtotal)*100);
    } else {
        a2pv = 0;
        var barra = 0;
    }

    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("aliadopv2").innerHTML = BarraCheia;
    document.getElementById("aliadonotpv2").innerHTML = BarraVazia;
    document.getElementById("aliadopvEscrito2").innerHTML = a2pv+"/"+a2pvtotal;
}
function calcularvidaaliado3(dano){
    
    a3pv -= dano;
    if(a3pv>0){    
            var barra = Math.round((i3pv/i3pvtotal)*100);
    } else {
        a3pv = 0;
        var barra = 0;
    }

    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("aliadopv3").innerHTML = BarraCheia;
    document.getElementById("aliadonotpv3").innerHTML = BarraVazia;
    document.getElementById("aliadopvEscrito3").innerHTML = a3pv+"/"+a3pvtotal;
}
function calcularvidaaliado4(dano){
    
    a4pv -= dano;
    if(a4pv>0){    
            var barra = Math.round((i4pv/i4pvtotal)*100);
    } else {
        a4pv = 0;
        var barra = 0;
    }

    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("aliadopv4").innerHTML = BarraCheia;
    document.getElementById("aliadonotpv4").innerHTML = BarraVazia;
    document.getElementById("aliadopvEscrito4").innerHTML = a4pv+"/"+a4pvtotal;
}
function calcularvidaaliado5(dano){
    
    a5pv -= dano;
    if(a5pv>0){    
            var barra = Math.round((i5pv/i5pvtotal)*100);
    } else {
        a5pv = 0;
        var barra = 0;
    }

    var BarraCheia = "";
    var BarraVazia = "";

    for(i = 1 ; i <= barra; i++){
        BarraCheia += "&nbsp";
    }
    for(i = 1 ;i <= 100-barra;i++){ 
       BarraVazia += "&nbsp";
    }
    document.getElementById("aliadopv5").innerHTML = BarraCheia;
    document.getElementById("aliadonotpv5").innerHTML = BarraVazia;
    document.getElementById("aliadopvEscrito5").innerHTML = a5pv+"/"+a5pvtotal;
}

