var nome = "";
var tipo = 0;
var sucesso = 0;
var danobase = 0;
var af = 0;
var am = 0;
var an = 0;
var ad = 0;

function ataque(n,t,s,db,a1,a2,a3,a4){
    nome = n;
    sucesso = s;
    tipo = t;
    danobase = db;
    af = a1;
    am = a2;
    an = a3;
    ad = a4;
    menu5();
}
function ataque2(inimigo){
    if (inimigo==1){
        df = i1[9];
        dm = i1[10];
        dn = i1[11];
        dd = i1[12];
    } else if (inimigo==2){
        df = i2[9];
        dm = i2[10];
        dn = i2[11];
        dd = i2[12];
    } else if (inimigo==3){
        df = i3[9];
        dm = i3[10];
        dn = i3[11];
        dd = i3[12];
    } else if (inimigo==4){
        df = i4[9];
        dm = i4[10];
        dn = i4[11];
        dd = i4[12];
    } else {
        df = i5[9];
        dm = i5[10];
        dn = i5[11];
        dd = i5[12];
    }
    if (tipo<=4){
        calcularataque(inimigo,af,df);
    } else if (tipo<=6){
        calcularataque(inimigo,am,dm);
    } else if (tipo<=8){
        calcularataque(inimigo,an,dn);
    } else {
        calcularataque(inimigo,ad,dd);
    } 
}
function calcularataque(inimigo,a,d){

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
        if (inimigo == 1){
            calcularvidainimigo1(dano);
        } else if (inimigo == 2){
            calcularvidainimigo2(dano);
        } else if (inimigo == 3){
            calcularvidainimigo3(dano);  
        } else if (inimigo == 4){
            calcularvidainimigo4(dano);   
        } else if (inimigo == 5){
            calcularvidainimigo5(dano);  
        }        
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
    document.getElementById("inimigopv").innerHTML = BarraCheia;
    document.getElementById("inimigonotpv").innerHTML = BarraVazia;
    document.getElementById("inimigopvEscrito").innerHTML = i1pv+"/"+i1pvtotal;
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
    document.getElementById("inimigopv2").innerHTML = BarraCheia;
    document.getElementById("inimigonotpv2").innerHTML = BarraVazia;
    document.getElementById("inimigopvEscrito2").innerHTML = i2pv+"/"+i2pvtotal;
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
    document.getElementById("inimigopv3").innerHTML = BarraCheia;
    document.getElementById("inimigonotpv3").innerHTML = BarraVazia;
    document.getElementById("inimigopvEscrito3").innerHTML = i3pv+"/"+i3pvtotal;
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
    document.getElementById("inimigopv4").innerHTML = BarraCheia;
    document.getElementById("inimigonotpv4").innerHTML = BarraVazia;
    document.getElementById("inimigopvEscrito4").innerHTML = i4pv+"/"+i4pvtotal;
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
    document.getElementById("inimigopv5").innerHTML = BarraCheia;
    document.getElementById("inimigonotpv5").innerHTML = BarraVazia;
    document.getElementById("inimigopvEscrito5").innerHTML = i5pv+"/"+i5pvtotal;
}