obj1x = 40;
obj1y = 60;
obj1ativo = false;
obj2x = 60;
obj2y = 45;
obj2ativo = false;
obj3x = 40;
obj3y = 30;
obj3ativo = false;

var obj1 = setInterval(function(){
    if (parado){
        if(obj1ativo==false){
            if (x == obj1x && y == obj1y) {
                teletransporte(60,45);
                obj2ativo = true; 
            }
        } else if (x != obj1x || y != obj1y) {
            obj1ativo = false;
            obj2ativo = false;          
        }  
    }    
}, 1);

var obj2 = setInterval(function(){
    if (parado){
        if(obj2ativo==false){
            if (x == obj2x && y == obj2y) {
                teletransporte(40,60);
                obj1ativo = true; 
            }
        } else if (x != obj2x || y != obj2y) {
            obj1ativo = false;
            obj2ativo = false;          
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