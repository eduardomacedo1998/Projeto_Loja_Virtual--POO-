export class Produtos{

    

    constructor(){
         
        
    }


    cadastrarprod(nome,preco,quantidade,descricao){ // prepara os dados e envia ao PHP

        const dados = {
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            descricao: descricao
        }



        $.ajax({
            url: '../PHP/insertpedidos.php', // Substitua pelo nome do arquivo PHP que irá receber os dados
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
        

    } // fim da função cadastrarprod()


    exibirprodutos(iddiv,nomeclassdivprod){


        function renderizaprod(data){

            const divprincipal = document.getElementById(iddiv) // div que recebera todos os childs 

            data.forEach(item => {

            const divprod = document.createElement("div") // div que recebe preço, nome, descrição, id
            divprod.setAttribute("class", nomeclassdivprod )

           

            const descricao = document.createElement("p")
            descricao.textContent = `${item.descricao}`

            const nomeprod = document.createElement("h1")
            nomeprod.textContent = `${item.nome}`

            const quantidade = document.createElement("img")
            quantidade.setAttribute("src", "https://multilit.com.br/wp-content/uploads/2020/03/Produto-sem-foto.png")

            const h2preco = document.createElement("h2")
            h2preco.textContent = `Preco R$: ${item.preco}`

            
            divprod.appendChild(nomeprod)
            divprod.appendChild(descricao)
            divprod.appendChild(h2preco)
            divprod.appendChild(quantidade)

            
            divprincipal.appendChild(divprod)

                
            });

           }/* fim função renderizaprod()*/

        $.ajax({
            url: '../PHP/selectprodutos.php', // Substitua pelo nome do arquivo PHP que irá receber os dados
            type: 'GET', // Ou 'GET' se preferir uma solicitação GET
            dataType: 'json',
            success: function(data) {
                // Manipule a resposta JSON recebida do servidor aqui.
                console.log(data)
                renderizaprod(data)
            },
            error: function(xhr, status, error) {
                console.log('Erro na requisição AJAX:', error);
            }
        });


        
    } 



}/*fim da função exibirprodutos()*/