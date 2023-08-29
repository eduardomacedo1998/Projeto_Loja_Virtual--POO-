<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se a requisição é do tipo POST

    include_once './class.php';


    // Acessa os dados enviados via POST
    $id= $_POST;

       
       $delete = new Database("localhost","root","","bancoprincipal");

       $delete -> delete("produtos",$id);
       
        
        

    } else {
        // Caso o campo 'nome' ou 'idade' não tenha sido enviado, exibe um erro
        http_response_code(400);
        echo "Requisição inválida. Certifique-se de enviar os campos 'nome' e 'idade' via POST.";
    }