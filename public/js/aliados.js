var a1pv = 0;
var a1pvtotal = 0;
var a2pv = 0;
var a2pvtotal = 0;
var a3pv = 0;
var a3pvtotal = 0;
var a4pv = 0;
var a4pvtotal = 0;
var a5pv = 0;
var a5pvtotal = 0;

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

