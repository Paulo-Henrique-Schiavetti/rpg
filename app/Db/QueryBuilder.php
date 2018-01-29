<?php

namespace Project\Db;

use Project\Db\Connection;

class QueryBuilder
{
    
    private $pdo;

    public function __construct()
    {
        $this->pdo = Connection::getConnection();
    }

    public function select($table, $parameters = [], $first = false, $condition = 'and',  $fetch = \PDO::FETCH_ASSOC)
    {

        $params = array_map(function($p){
            return "$p = :$p";
        }, array_keys($parameters));

        $where = !empty($parameters) ? 'where ' . implode(" {$condition} ", $params) : '';
 
        $s = $this->pdo->prepare("select * from {$table} {$where}");
        try{
            $s->execute($parameters);

            return $first ? $s->fetch($fetch) : $s->fetchAll($fetch);

        }  catch(\PDOException $e){
             die($e->getMessage());
        }
        
    }
    
    public function insert($table, $data)
    {
        $columns = implode(',', array_keys($data));
        $values = ':' . implode(', :', array_keys($data));

        $sql = "INSERT INTO {$table} ({$columns}) VALUES ({$values})";
        $stmt = $this->pdo->prepare($sql);

        try {
            return $stmt->execute($data);
        } catch (\PDOException $ex) {
            die($ex->getMessage());
        }
    }

    public function delete($table, $data)
    {   
        $where = key($data) . ' = :' . key($data);
        //die($where);
        $sql = "DELETE FROM {$table} WHERE {$where}";
        $stmt = $this->pdo->prepare($sql);

        try {
           return $stmt->execute($data);
        } catch (\PDOException $ex) {
            die($ex->getMessage());
        }
    }

    public function update($table, $data, $condition)
    {   
        $columns = implode(' =?, ', array_keys($data)) . ' =? ';
        $where = key($condition) . ' = ?';

        $sql = "UPDATE {$table} SET {$columns} WHERE {$where}";
        $stmt = $this->pdo->prepare($sql);

        $dados = array_values($data);
        $dados[] = $condition[key($condition)];
        
        try {
            return $stmt->execute($dados);
        } catch (\PDOException $ex) {
            die($ex->getMessage());
        }
    }
    public function chamarinimigos($area, $fetch = \PDO::FETCH_ASSOC)
    {

        $sql = "SELECT inimigos.id, inimigos.nome, inimigos.tipo, inimigos.PVbase, inimigos.nivelbase,
                inimigos.DF, inimigos.DM, inimigos.DN, inimigos.DD,
                inimigos.AF, inimigos.AM, inimigos.AN, inimigos.AD,
                inimigos.size, inimigos.drop
                FROM rpgdb.inimigos
                inner join `inimigos-areas`
                on inimigos.id = `inimigos-areas`.inimigos_id
                inner join areas
                on areas.id = `inimigos-areas`.areas_id
                where areas.nome = :area";

        $s = $this->pdo->prepare($sql);

        $s->bindParam(':area', $area);

        try{
            $s->execute();

            return $s->fetchAll($fetch);

        }  catch(\PDOException $e){
            die($e->getMessage());
        }
    }
    public function usuario($email,$fetch = \PDO::FETCH_ASSOC){

        $sql = "SELECT * from rpgdb.usuario where email = :email";

        $s = $this->pdo->prepare($sql);

        $s->bindParam(':email', $email);

        try{
            $s->execute();

            return $s->fetch($fetch);

        }  catch(\PDOException $e){
            die($e->getMessage());
        }
    }
    public function aliados($id,$id2,$id3,$id4,$id5, $fetch = \PDO::FETCH_ASSOC)
    {

        $sql = "SELECT aliados.id, aliados.apelido, aliados.tipo, aliados.PV,
                aliados.DF, aliados.DM, aliados.DN, aliados.DD,
                aliados.AF, aliados.AM, aliados.AN, aliados.AD,
                ataques1.nome as ataque1nome, ataques1.tipo as ataque1tipo, ataques1.sucesso as ataque1sucesso, ataques1.danobase as ataque1danobase,
                ataques2.nome as ataque2nome, ataques2.tipo as ataque2tipo, ataques2.sucesso as ataque2sucesso, ataques2.danobase as ataque2danobase,
                ataques3.nome as ataque3nome, ataques3.tipo as ataque3tipo, ataques3.sucesso as ataque3sucesso, ataques3.danobase as ataque3danobase,
                ataques4.nome as ataque4nome, ataques4.tipo as ataque4tipo, ataques4.sucesso as ataque4sucesso, ataques4.danobase as ataque4danobase,
                ataques5.nome as ataque5nome, ataques5.tipo as ataque5tipo, ataques5.sucesso as ataque5sucesso, ataques5.danobase as ataque5danobase,
                ataques6.nome as ataque6nome, ataques6.tipo as ataque6tipo, ataques6.sucesso as ataque6sucesso, ataques6.danobase as ataque6danobase
                FROM rpgdb.aliados
                inner join rpgdb.ataques as ataques1
                on ataques1.id = aliados.ataque1
                inner join rpgdb.ataques as ataques2
                on ataques2.id = aliados.ataque2                
                inner join rpgdb.ataques as ataques3
                on ataques3.id = aliados.ataque3
                inner join rpgdb.ataques as ataques4
                on ataques4.id = aliados.ataque4
                inner join rpgdb.ataques as ataques5
                on ataques5.id = aliados.ataque5
                inner join rpgdb.ataques as ataques6
                on ataques6.id = aliados.ataque6
                where aliados.id in (:id,:id2,:id3,:id4,:id5)";

        $s = $this->pdo->prepare($sql);

        $s->bindParam(':id', $id);
        $s->bindParam(':id2', $id2);
        $s->bindParam(':id3', $id3);
        $s->bindParam(':id4', $id4);
        $s->bindParam(':id5', $id5);

        try{
            $s->execute();

            return $s->fetchAll($fetch);

        }  catch(\PDOException $e){
            die($e->getMessage());
        }
    }
}

