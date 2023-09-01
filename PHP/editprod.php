<?php 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se a requisição é do tipo POST

    include_once './class.php';


    // Acessa os dados enviados via POST
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    $descricao = $_POST['descricao'];
    $quantidade = $_POST['quantidade'];


       
    if($id){
        echo("os dados chegaram");
    }

    
        
        

    }






