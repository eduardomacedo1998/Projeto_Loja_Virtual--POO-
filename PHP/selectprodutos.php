<?php 

// Dados de conexão com o banco de dados
$servername = "localhost"; // Endereço do servidor MySQL (normalmente é localhost)
$username = "root"; // Nome de usuário do MySQL
$password = "";   // Senha do MySQL
$dbname = "bancolojavirtual"; // Nome do banco de dados que você deseja se conectar


// Cria a conexão com o banco de dados usando a extensão mysqli
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM produtos";
$result = $conn->query($sql);


if ($result->num_rows > 0){


    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
     
}else{


}
