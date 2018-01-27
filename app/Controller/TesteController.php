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
        $dados = $q->chamarinimigos($area);
        $inimigo1 = $dados[rand(0,count($dados)-1)]; 
        $inimigo2 = $dados[rand(0,count($dados)-1)];
        $inimigo3 = $dados[rand(0,count($dados)-1)];
        $inimigo4 = $dados[rand(0,count($dados)-1)];
        $inimigo5 = $dados[rand(0,count($dados)-1)];
        
        if ($inimigo1['size'] + $inimigo2['size'] + $inimigo3['size'] == 12 ){
            $inimigo4 = ""; 
            $inimigo5 = "";        
        } else if ($inimigo1['size'] + $inimigo2['size'] == 8 || $inimigo2['size'] + $inimigo3['size'] == 8 || $inimigo1['size'] + $inimigo3['size'] == 8){
            $inimigo4 = ""; 
            $inimigo5 = "";        
        } else if ($inimigo1['size'] == 4 || $inimigo2['size'] == 4 || $inimigo3['size'] == 4){
            $inimigo5 = "";
            if ($inimigo4['size'] == 4){
                while ($inimigo4['size'] == 4) {
                    $inimigo4 = $dados[rand(0,count($dados)-1)];
                }
            }                          
        } else {
            if ($inimigo4['size'] == 4){
                while ($inimigo4['size'] == 4) {
                    $inimigo4 = $dados[rand(0,count($dados)-1)];
                }            
            }
            if ($inimigo5['size'] == 4){
                while ($inimigo5['size'] == 4) {
                    $inimigo5 = $dados[rand(0,count($dados)-1)];
                }
            }
        }
        
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
