var ipv = 0;
var ipvtotal = 0;
var apv = 0;
var apvtotal = 0;
var x = 1;

function start(i1, i2, a1, a2){
    resetmensagem();
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
        x -= 1;
    }
    if(key.keyCode == 65){
        x -= 3;
    }
    if(key.keyCode == 83){
        x += 1;
    }
    if(key.keyCode == 68){
        x += 3;
    }
    if(x>6){
        x = 1;
    }
    if(x<1){
        x = 6;
    }
}
function position() {
    if (x == 1) {
        document.getElementById('ataque1').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
        document.getElementById('ataque5').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
    } else if (x == 2) {
        document.getElementById('ataque2').style.backgroundColor = "#202020";
        document.getElementById('ataque1').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
        document.getElementById('ataque5').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
    } else if (x == 3) {
        document.getElementById('ataque3').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque1').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
        document.getElementById('ataque5').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
    } else if (x == 4) {
        document.getElementById('ataque4').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque5').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
        document.getElementById('ataque1').style.background = "none";
    } else if (x == 5) {
        document.getElementById('ataque5').style.backgroundColor = "#202020";
        document.getElementById('ataque2').style.background = "none";
        document.getElementById('ataque3').style.background = "none";
        document.getElementById('ataque4').style.background = "none";
        document.getElementById('ataque6').style.background = "none";
        document.getElementById('ataque1').style.background = "none";
    } else if (x == 6) {
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
        if (x == 1) {
            document.getElementById('ataque1').click();    
            remove();
        } else if (x == 2) {
            document.getElementById('ataque2').click();  
            remove();  
        } else if (x == 3) {
            document.getElementById('ataque3').click();  
            remove();  
        } else if (x == 4) {
            document.getElementById('ataque4').click(); 
            remove();   
        } else if (x == 5) {
            document.getElementById('ataque5').click(); 
            remove();   
        } else if (x == 6) {
            document.getElementById('ataque6').click(); 
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
        resetmensagem();
    },1400);
}
function resetmensagem(){
    setTimeout(function() {
        document.getElementById("mensagem").innerHTML = "<p>O que você vai fazer?</p>";
    },1400);
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
    mostrarrolagem(rolagem);
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
        ipv -= dano;
        if(ipv>0){    
                var barra = Math.round((ipv/ipvtotal)*100);
        } else {
            ipv = 0;
            var barra = 0;
        }
        calcularvidainimigo(barra);
    },1400);
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

