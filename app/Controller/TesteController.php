<?php

namespace Project\Controller;

use Project\Db\QueryBuilder;

class TesteController
{

    public function index()
    {
         require './app/views/login.php';
    }
    public function jogar()
    {
        $q = new QueryBuilder;
        $dados = $q->select('areas');
        $_SESSION['usuario'] = $q->usuario($_POST['email']);
        require './app/views/jogo-mapa.php';
    }
    public function batalhar()
    {
        $area = $_GET['area'];
        $q = new QueryBuilder();
        $inimigos = $q->chamarinimigos($area);
        
        $usuario = $_SESSION['usuario'];
        $aliados = $q->aliados($usuario['aliado1'],$usuario['aliado2'],$usuario['aliado3'],$usuario['aliado4'],$usuario['aliado5']);
        $aliado1 = $aliados[0];
        $aliado2 = $aliados[1];
        $aliado3 = $aliados[2];
        $aliado4 = $aliados[3];
        $aliado5 = $aliados[4];

        require './app/views/jogo-batalha.php';
    }
}
