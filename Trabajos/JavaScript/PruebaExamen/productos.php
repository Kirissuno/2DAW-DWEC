<?php
    $conn = NULL;
        try{

            $con = new PDO("mysql:host=localhost; dbname=examenjs; charset=utf8", 'root', 'root');

            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $sql = "SELECT * FROM productos WHERE id=$id";
            }else if(isset($_GET['nombre'])){
                $nombre = $_GET['nombre'];
                $sql = "SELECT * FROM productos WHERE nombre='$nombre'";
            }else{
                $sql = "SELECT * FROM productos";
            }

            $stm=$con->prepare($sql);

            $stm->execute();

            $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($resultSet);
            
        }catch (PDOException $e){
            echo "Error ".$e->getMessage();
        }