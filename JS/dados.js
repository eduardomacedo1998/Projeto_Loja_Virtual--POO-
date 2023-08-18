export  class  Dados {

   

    constructor() {

        
       
    }

    receberDados() {
        $.ajax({
            url: './PHP/conexao.php', // Substitua pelo nome do arquivo PHP que contém o código acima
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Manipule os dados JSON recebidos do servidor aqui.
              this.renderizaprod(data)
                 // Chama o método exibirDados da classe.
            }.bind(this), // Mantém o escopo da classe na função de sucesso
            error: function(xhr, status, error) {
                console.log('Erro na requisição AJAX:', error);
            }
        });
    }

    divproduto(){ // DIV  DE CADA PRODUTO

        let divproduto = document.createElement("div")
        divproduto.setAttribute("class", "div-prod")
        return divproduto
    }


    h1nomeprod(nome){ // NOME DO PRODUTO

        const h1 = document.createElement("h1")
        h1.textContent = `nomde produto ${nome}`
       
        return h1
    }

    imgprod(img){ // IMAGEM PRODUTO
        const imagem = document.createElement("img")
        imagem.setAttribute("src", "https://www.quitandadelivery.com/images/geral/sem_foto_big.jpg")

        return imagem
    }

    h2preco(preco){ // PREÇO DO PRODUTO
        const h2 = document.createElement("h2")
        h2.textContent = `O valor é R$: ${preco}`
       
        return h2
    }


    descricaoP(descricao){  // DESCRIÇÃO PRODUTOS
        const p =document.createElement("p")
        p.textContent = `Descrição: ${descricao}`

        return p
    }


    renderizaprod(data){

        let divconteiner = document.getElementById("conteiner")
        

        data.forEach(item => {


            const divproduto = this.divproduto() // div individual de cada produto

            const h1nomeprod = this.h1nomeprod(item.nome) // nome do produto
            const imgprod = this.imgprod(item.enderecoImagem) // imagem do produto
            const h2preco = this.h2preco(item.preco) // valor do produto
            const descricao = this.descricaoP(item.descricao) // descrição dos produtos



            // ORGANIZAÇÃO DE FAMILIA


            divproduto.appendChild(h1nomeprod)
            divproduto.appendChild(imgprod)
            divproduto.appendChild(h2preco)
            divproduto.appendChild(descricao)

            // acoplando a div pricipal do html

            divconteiner.appendChild(divproduto)

            
        });
    }


    
}


