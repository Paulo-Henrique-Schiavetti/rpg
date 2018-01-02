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
        require './app/views/jogo-mapa.php';
    }
    public function batalhar()
    {
        $area = $_GET['area'];
        $q = new QueryBuilder();
        $dados = $q->chamarinimigos($area);
        $inimigo = [];
        while(empty($inimigo)){
            foreach($dados as $d){
                if($d['id']==rand(1,50)){
                    $inimigo = $d;
                }
            }
        }
        $aliados = $q->aliados();
        $aliado1 = $aliados[0];
        $aliado2 = $aliados[1];
        $aliado3 = $aliados[2];
        $aliado4 = $aliados[3];
        $aliado5 = $aliados[4];
        $aliado6 = $aliados[5];

        require './app/views/jogo-batalha.php';
    }
}
