export class Produtos {
    constructor() {
        // Construtor da classe Produtos
    }

    // Função para cadastrar um produto no servidor
    cadastrarprod(nome, preco, quantidade, descricao) {
        const dados = {
            nome: nome,
            preco: preco,
            estoque: quantidade,
            descricao: descricao,
        };

        $.ajax({
            url: '../PHP/insertpedidos.php',
            type: 'POST',
            data: dados,
            dataType: 'json',
            success: function (data) {
                console.log('Resposta do servidor:', data);
            },
            error: function (xhr, status, error) {
                console.log('Erro na requisição AJAX:', error);
            },
        });
    }




    // Função para exibir os produtos na página
    exibirprodutos(iddiv, nomeclassdivprod, endereco) {

        
        // Função interna para renderizar todos os produtos
        function renderizaprod(data) {

            const divprincipal = document.getElementById(iddiv);


            //  dados necessarios para editar um produto, tudo que estiver aqui serve para editar id = formeditprod
            const nome = document.getElementById("nomeEdit")
            const preco = document.getElementById("precoEdit")
            const quantidadeEdit= document.getElementById("quantidadeEdit")
            const descricaoEdit = document.getElementById("descricaoEdit")
            const formeditprod = document.getElementById("formEditProd") // buscando o formulario
            //  dados necessarios para editar um produto, tudo que estiver aqui serve para editar id = formeditprod


            data.forEach(item => {
                const divprod = document.createElement('div');
                divprod.setAttribute('class', nomeclassdivprod);
                divprod.setAttribute("data", item.id)

                // Criação do elemento para a descrição
                const descricao = document.createElement('p');
                descricao.textContent = item.descricao;

                const id = document.createElement('p');
                id.setAttribute("id", "id")
                id.textContent = item.id;

                // Criação do elemento para o nome do produto
                const nomeprod = document.createElement('h1');
                nomeprod.textContent = item.nome;

                // Criação do elemento para a imagem da quantidade
                const quantidade = document.createElement('img');
                quantidade.setAttribute('src', item.enderecoImagem);

                // Criação do elemento para o preço
                const h2preco = document.createElement('h2');
                h2preco.textContent = 'Preço R$: ' + item.preco;

                const btn_editar = document.createElement('button');
                btn_editar.setAttribute("class", "button");
                btn_editar.setAttribute("id", "btneditarprod");
                btn_editar.textContent = 'Editar';
                btn_editar.addEventListener('click', () => {   // Aqui você pode implementar a lógica para capturar as informações do usuário para edição
                  
                    

                    formeditprod.style.display = "flex"


                    

                    formeditprod.appendChild(btn_editar_finalizar);

                    
            
                    // Agora você tem as informações que o usuário deseja editar (novadescricao e novopreco)
                    // e também o ID do produto (item.id)
                    // Faça o que for necessário com esses dados, como atualizar os valores no servidor, etc.
                });

                const btn_editar_finalizar = document.createElement('button');
                btn_editar_finalizar.textContent = "finalizar edição"
                btn_editar_finalizar.type = "button"
                btn_editar_finalizar.addEventListener("click", ()=>{


                    

                    const dadosedit = {
                        id: item.id,
                        nome : nome.value,
                        preco : preco.value,
                        descricao : quantidadeEdit.value,
                        quantidade : descricaoEdit.value
                    }

                    console.log(dadosedit)

                    $.ajax({
                        url: '../PHP/editprod.php',
                        type: 'POST',
                        data: dadosedit,
                        dataType: 'json',
                        success: function (data) {
                            console.log('Resposta do servidor:', data);
                        },
                        error: function (xhr, status, error) {
                            console.log('Erro na requisição AJAX:', error);
                        },
                    });

                })
            
                // Botão de Excluir
                const btn_excluir = document.createElement('button');
                btn_excluir.setAttribute("class", "button");
                btn_excluir.textContent = 'Excluir';

                btn_excluir.addEventListener('click', () => {


                    
                   const id = {

                      id : item.id

                   } 

                   alert("produto excluido com Sucesso !" + item.nome)

                    $.ajax({
                        url: '../PHP/delete.php',
                        type: 'POST',
                        data: id,
                        dataType: 'json',
                        success: function (data) {
                            console.log('Resposta do servidor:', data);
                        },
                        error: function (xhr, status, error) {
                            console.log('Erro na requisição AJAX:', error);
                        },
                    });
                    
                   



                });

                // Adicionando os elementos criados à div do produto
                divprod.appendChild(nomeprod);
                divprod.appendChild(quantidade);
                divprod.appendChild(id);
                divprod.appendChild(btn_editar);
                divprod.appendChild(btn_excluir);
                divprod.appendChild(descricao);
                divprod.appendChild(h2preco);
                

                // Adicionando a div do produto à div principal
                divprincipal.appendChild(divprod);
                
            });
        }

        // Fazendo uma requisição AJAX para buscar os produtos no servidor
        $.ajax({
            url: `${endereco}`,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                renderizaprod(data);
            },
            error: function (xhr, status, error) {
                console.log('Erro na requisição AJAX:', error);
            },
        });
    }
}
