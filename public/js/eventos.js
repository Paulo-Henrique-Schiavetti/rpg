obj1x = 40;
obj1y = 60;
obj2x = 60;
obj2y = 45;
obj3x = 40;
obj3y = 30;
obj3ativo = false;

var obj1 = setInterval(function(){
    if (parado){
        if (x == obj1x && y == obj1y) {
            teletransporte(x,45);
        }
    }    
}, 1);

var obj2 = setInterval(function(){
    if (parado){
        if (x == obj2x && y == obj2y) {
            teletransporte(40,y);
        }
    }    
}, 1);

var obj3 = setInterval(function(){
    if (parado){        
        if(obj3ativo==false){
            if (x == obj3x && y == obj3y) {
                mensagem('_oi!');
                resetmensagem(1000);
                obj3ativo = true;          
            }
        } else if (x != obj3x || y != obj3y) {
            obj3ativo = false;          
        }    
    }    
}, 1);