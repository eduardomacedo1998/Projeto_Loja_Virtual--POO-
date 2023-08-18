<?php


// Dados de conexão com o banco de dados
$servername = "localhost"; // Endereço do servidor MySQL (normalmente é localhost)
$username = "root"; // Nome de usuário do MySQL
$password = "";   // Senha do MySQL
$dbname = "bancolojavirtual"; // Nome do banco de dados que você deseja se conectar


// Cria a conexão com o banco de dados usando a extensão mysqli
$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se a requisição é do tipo POST


    // Acessa os dados enviados via POST
    $dadosRecebidos = $_POST;


    // Verifica se os campos 'nome' e 'idade' foram enviados
    if (isset($dadosRecebidos['nome']) && isset($dadosRecebidos['preco']) && isset($dadosRecebidos['quantidade'])&& isset($dadosRecebidos['descricao'])    ) {
        // Recupera o nome e a idade enviados

        $nome = $dadosRecebidos['nome'];
        $preco = $dadosRecebidos['preco'];
        $quantidade = $dadosRecebidos['quantidade'];
        $descricao = $dadosRecebidos['descricao'];



       
       
        
         $sql = "INSERT INTO produtos (_nome, _preco, _quantidade, _descricao) VALUES ('$nome', '$preco','$quantidade','$descricao')";
         $resultado = $conn->query($sql);


        // Exemplo: realizar algum cálculo
        // $anoNascimento = date("Y") - $idade;


        // Exemplo: exibir os dados na página
        echo "Nome: " . htmlspecialchars($nome) . "<br>";
        echo "Idade: " . htmlspecialchars($idade) . "<br>";
    } else {
        // Caso o campo 'nome' ou 'idade' não tenha sido enviado, exibe um erro
        http_response_code(400);
        echo "Requisição inválida. Certifique-se de enviar os campos 'nome' e 'idade' via POST.";
    }
} else {
    // Caso a requisição não seja do tipo POST, exibe um erro
    http_response_code(400);
    echo "Requisição inválida. Use o método POST para enviar os dados.";
}
