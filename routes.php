<?php
//rotas da aplicação
//a variável $uri já contém os dados da rota solicitada

switch ($uri) {

    case '/':
        
        $testeController->index();
        break;
    
    case '/jogar':
        
        $testeController->jogar();
        break;

    case '/batalhar':
        
        $testeController->batalhar();
        break;

    case '/pew':
        
        require './app/views/pew.php'; 
        break;

    default:
        require './app/views/error.html'; 
        break;
}
