var i1 = [];
var i2 = [];
var i3 = [];
var i4 = [];
var i5 = [];

var i1pv = 0;
var i1pvtotal = 0;
var i2pv = 0;
var i2pvtotal = 0;
var i3pv = 0;
var i3pvtotal = 0;
var i4pv = 0;
var i4pvtotal = 0;
var i5pv = 0;
var i5pvtotal = 0;

function start(a1p, a1t, a2p, a2t, a3p, a3t, a4p, a4t, a5p, a5t){

    i0 = inimigos[0].split("|");;
    bosschance = i0[15];
    boss = Math.random()*100;
    if (boss < bosschance){
        do {
            i1 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
        } while (i1[13] != 5);
        i2[1] = "vazio"; i2[3] = 1;
        i3[1] = "vazio"; i3[3] = 1;
        i4[1] = "vazio"; i4[3] = 1; 
        i5[1] = "vazio"; i5[3] = 1;
    } else {
        qtdi = Math.trunc((Math.random()*5)+1);
        if (qtdi == 5){
            do {
                i1 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                i2 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                i3 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                i4 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                i5 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
            } while (i1[13] > 3 || i2[13] > 3 || i3[13] > 3 || i4[13] > 3 || i5[13] > 3);
        } else if (qtdi == 4) {
            do {
                do {
                    i1 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                } while (i1[13] == 5);
                do {
                    i2 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                } while (i2[13] == 5);
                do {
                    i3 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                } while (i3[13] == 5);
                do {
                    i4 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                } while (i4[13] == 5);
                i5[1] = "vazio"; i5[3] = 1;
                size = parseInt(i1['13']) + parseInt(i2['13']) + parseInt(i3['13']) + parseInt(i4['13']);
            } while (size > 13 );
        } else if (qtdi == 3) {
            do {
                do {
                    i1 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                } while (i1[13] == 5);
                do {
                    i2 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                } while (i2[13] == 5);
                do {
                    i3 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                } while (i3[13] == 5);
                i4[1] = "vazio"; i4[3] = 1;
                i5[1] = "vazio"; i5[3] = 1;
                size = parseInt(i1['13']) + parseInt(i2['13']) + parseInt(i3['13']);
            } while (size > 13 || parseInt(i1['13']) == 4 && parseInt(i2['13']) == 4 && parseInt(i3['13']) == 4);
        } else if (qtdi == 2) {
            do {
                i1 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                i2 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                i3[1] = "vazio"; i3[3] = 1;
                i4[1] = "vazio"; i4[3] = 1;
                i5[1] = "vazio"; i5[3] = 1;
            } while (i1[13] == 5 || i2[13] == 5);
        } else if (qtdi == 1) {
            do {
                i1 = inimigos[Math.trunc(Math.random()*inimigos.length)].split("|");
                i2[1] = "vazio"; i2[3] = 1;
                i3[1] = "vazio"; i3[3] = 1;
                i4[1] = "vazio"; i4[3] = 1;
                i5[1] = "vazio"; i5[3] = 1;
            } while (i1[13] == 5);
        }
    }

    i1p = i1[3];
    i2p = i2[3];
    i3p = i3[3];
    i4p = i4[3];
    i5p = i5[3];

    inimigotext = "<div class='char size"+i1[13]+"' id='inimigo1' onclick='ataque2(1);'><div class='caixa pequena'><p class='small'>"+i1[1]+"</p><div id='i1barra'><p class='seta'>↼-------⇀</p></div></div><div class='size"+i1[13]+"'><img src='/public/img/inimigos/inimigo_"+i1[0]+".png'></div></div>";
    if (i2[1] != "vazio"){
        inimigotext += "<div class='char size"+i2[13]+"' id='inimigo2' onclick='ataque2(2);'><div class='caixa pequena'><p class='small'>"+i2[1]+"</p><div id='i2barra'><p class='seta'>↼-------⇀</p></div></div><div class='size"+i2[13]+"'><img src='/public/img/inimigos/inimigo_"+i2[0]+".png'></div></div>";
        if (i3[1] != "vazio"){
            inimigotext += "<div class='char size"+i3[13]+"' id='inimigo3' onclick='ataque2(3);'><div class='caixa pequena'><p class='small'>"+i3[1]+"</p><div id='i3barra'><p class='seta'>↼-------⇀</p></div></div><div class='size"+i3[13]+"'><img src='/public/img/inimigos/inimigo_"+i3[0]+".png'></div></div>";
            if (i4[1] != "vazio"){
                inimigotext += "<div class='char size"+i4[13]+"' id='inimigo4' onclick='ataque2(4);'><div class='caixa pequena'><p class='small'>"+i4[1]+"</p><div id='i4barra'><p class='seta'>↼-------⇀</p></div></div><div class='size"+i4[13]+"'><img src='/public/img/inimigos/inimigo_"+i4[0]+".png'></div></div>";
                if (i5[1] != "vazio"){
                    inimigotext += "<div class='char size"+i5[13]+"' id='inimigo5' onclick='ataque2(5);'><div class='caixa pequena'><p class='small'>"+i5[1]+"</p><div id='i5barra'><p class='seta'>↼-------⇀</p></div></div><div class='size"+i5[13]+"'><img src='/public/img/inimigos/inimigo_"+i5[0]+".png'></div></div>";
                } else {
                    inimigotext += "<div class='hidden' id='i5barra'></div>";
                }
            } else {
                inimigotext += "<div class='hidden' id='i4barra'></div>";
                inimigotext += "<div class='hidden' id='i5barra'></div>";
            }
        } else {
            inimigotext += "<div class='hidden' id='i3barra'></div>";
            inimigotext += "<div class='hidden' id='i4barra'></div>";
            inimigotext += "<div class='hidden' id='i5barra'></div>";
        }
    } else {
        inimigotext += "<div class='hidden' id='i2barra'></div>";
        inimigotext += "<div class='hidden' id='i3barra'></div>";
        inimigotext += "<div class='hidden' id='i4barra'></div>";
        inimigotext += "<div class='hidden' id='i5barra'></div>";
    }

    document.getElementById("campoinimigo").innerHTML = inimigotext;

    resetmensagem();           
          
    istart(i1p,i2p,i3p,i4p,i5p);   
    setTimeout(function(){        
        astart(a1p, a1t, a2p, a2t, a3p, a3t, a4p, a4t, a5p, a5t);        
    },800);
}
function istart(i1p,i2p,i3p,i4p,i5p){        
        document.getElementById("i1barra").innerHTML = "<div class='barra'><i id='inimigopv' class='pv'></i><i class='notpv' id='inimigonotpv'></i></div><i id='inimigopvEscrito'></i>";
        document.getElementById("i2barra").innerHTML = "<div class='barra'><i id='inimigopv2' class='pv'></i><i class='notpv' id='inimigonotpv2'></i></div><i id='inimigopvEscrito2'></i>";
        document.getElementById("i3barra").innerHTML = "<div class='barra'><i id='inimigopv3' class='pv'></i><i class='notpv' id='inimigonotpv3'></i></div><i id='inimigopvEscrito3'></i>";
        document.getElementById("i4barra").innerHTML = "<div class='barra'><i id='inimigopv4' class='pv'></i><i class='notpv' id='inimigonotpv4'></i></div><i id='inimigopvEscrito4'></i>";
        document.getElementById("i5barra").innerHTML = "<div class='barra'><i id='inimigopv5' class='pv'></i><i class='notpv' id='inimigonotpv5'></i></div><i id='inimigopvEscrito5'></i>";

        dano = 0;

        i1pv = i1p;    
        i1pvtotal = i1p;
        calcularvidainimigo1(dano);
        i2pv = i2p;    
        i2pvtotal = i2p;
        calcularvidainimigo2(dano);
        i3pv = i3p;    
        i3pvtotal = i3p;
        calcularvidainimigo3(dano);
        i4pv = i4p;    
        i4pvtotal = i4p;
        calcularvidainimigo4(dano);
        i5pv = i5p;    
        i5pvtotal = i5p;                
        calcularvidainimigo5(dano);
}
function astart(a1p, a1t, a2p, a2t, a3p, a3t, a4p, a4t, a5p, a5t){
    document.getElementById("abarra").innerHTML = "<div class='barra'><i id='aliadopv' class='pv'></i><i class='notpv' id='aliadonotpv'></i></div><i id='aliadopvEscrito'></i>";
    document.getElementById("a2barra").innerHTML = "<div class='barra'><i id='aliadopv2' class='pv'></i><i class='notpv' id='aliadonotpv2'></i></div><i id='aliadopvEscrito2'></i>";
    document.getElementById("a3barra").innerHTML = "<div class='barra'><i id='aliadopv3' class='pv'></i><i class='notpv' id='aliadonotpv3'></i></div><i id='aliadopvEscrito3'></i>";        
    document.getElementById("a4barra").innerHTML = "<div class='barra'><i id='aliadopv4' class='pv'></i><i class='notpv' id='aliadonotpv4'></i></div><i id='aliadopvEscrito4'></i>";        
    document.getElementById("a5barra").innerHTML = "<div class='barra'><i id='aliadopv5' class='pv'></i><i class='notpv' id='aliadonotpv5'></i></div><i id='aliadopvEscrito5'></i>";
    
    dano = 0;

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
}
