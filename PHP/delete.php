<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se a requisição é do tipo POST

    include './class.php';


    // Acessa os dados enviados via POST
    $id= $_POST['id'];

    if($id){

         
       $delete = new Database("localhost", "root", " ", "bancoprincipal");

       $delete ->delete("produtos",$id);

    }


      
       
       
        

    }