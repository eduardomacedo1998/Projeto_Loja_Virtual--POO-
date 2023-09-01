<?php  


class Database {
    private $host;
    private $username;
    private $password;
    private $dbname;
    private $conn;

    public function __construct($host, $username, $password, $dbname) {
        // Inicializa os valores das propriedades da classe com os valores passados ao construtor.
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;

        // Cria uma nova conexão mysqli usando os valores de conexão fornecidos.
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->dbname);

        // Verifica se a conexão foi bem-sucedida. Se não, encerra o script com uma mensagem de erro.
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function select($table) {
        // Monta uma consulta SELECT para obter todos os registros da tabela especificada.
        $query = "SELECT * FROM $table";
        // Executa a consulta no banco de dados.
        $result = $this->conn->query($query);
        $rows = array();

        // Verifica se a consulta retornou algum resultado.
        if ($result->num_rows > 0) {
            // Itera sobre os resultados e os armazena em um array.
            while ($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }
        }

        // Retorna o array de resultados.
        return $rows;
    }

    public function insert($table, $data) {
        // Monta uma consulta de inserção usando as chaves e valores do array $data.
        $keys = implode(", ", array_keys($data));
        $values = "'" . implode("', '", $data) . "'";
        $query = "INSERT INTO $table ($keys) VALUES ($values)";

        // Executa a consulta de inserção e retorna true se for bem-sucedida, senão retorna false.
        if ($this->conn->query($query) === TRUE) {
            return true;
        } else {
            return false;
        }
    }

    // Métodos semelhantes para delete e update, fazendo operações de DELETE e UPDATE no banco de dados.


    public function updateprod($table, $prodId, $newnome,$newpreco,$newdescricao,$newestoque) {
        $query = "UPDATE $table 
        
        SET 
        nome = '$newnome',
        descricao = '$newdescricao', 
        preco = '$newpreco',
        estoque = '$newestoque'
        WHERE id = $prodId";
       
        if ($this->conn->query($query) === TRUE) {
            return true;
        } else {
            return false;
        }
    }


    public function delete($table, $id) { // função de update
        $query = "DELETE FROM $table WHERE id = $id";
       
        if ($this->conn->query($query) === TRUE) {
            return true;
        } else {
            return false;
        }
    }



    public function __destruct() {
        // Fecha a conexão com o banco de dados quando a instância da classe é destruída.
        $this->conn->close();
    }
}

