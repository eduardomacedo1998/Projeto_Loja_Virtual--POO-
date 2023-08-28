<?php 


include_once "../php/class.php";


$selectdados = new Database("localhost", "root", "", "bancoprincipal");



$dados= $selectdados->select("produtos");


echo json_encode($dados);
