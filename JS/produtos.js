export class Produtos{

    _nome
    _preco
    _quantidade
    _descricao

    constructor(nome,preco,quantidade,descricao){
         
        this._nome = nome
        this._quantidade = quantidade
        this._preco= preco
        this._descricao = descricao
    }


    cadastrarprod(){ // prepara os dados e envia ao PHP

        const dados = {
            nome: this._nome,
            preco: this._preco,
            quantidade: this._quantidade,
            descricao: this._descricao
        }

        $.ajax({
            url: './PHP/insertpedidos.php', // Substitua pelo nome do arquivo PHP que irá receber os dados
            type: 'POST', // Ou 'GET' se preferir uma solicitação GET
            data: dados, // Os dados a serem enviados para o servidor
            dataType: 'json',
            success: function(data) {
                // Manipule a resposta JSON recebida do servidor aqui.
                console.log('Resposta do servidor:', data);
            },
            error: function(xhr, status, error) {
                console.log('Erro na requisição AJAX:', error);
            }
        });
        

    }

}