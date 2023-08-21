export class Produtos {
    constructor() {
        // Construtor da classe Produtos
    }

    // Função para cadastrar um produto no servidor
    cadastrarprod(nome, preco, quantidade, descricao) {
        const dados = {
            nome: nome,
            preco: preco,
            quantidade: quantidade,
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
    exibirprodutos(iddiv, nomeclassdivprod) {

        
        // Função interna para renderizar todos os produtos
        function renderizaprod(data) {
            
            const divprincipal = document.getElementById(iddiv);


            //  dados necessarios para editar um produto, tudo que estiver aqui serve para editar id = formeditprod
            const nome = document.getElementById("nomeEdit")
            const preco = document.getElementById("precoEdit")
            const quantidadeEdit= document.getElementById("quantidadeEdit")
            const descricaoEdit = document.getElementById("descricaoEdit")
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
                quantidade.setAttribute('src', 'https://multilit.com.br/wp-content/uploads/2020/03/Produto-sem-foto.png');

                // Criação do elemento para o preço
                const h2preco = document.createElement('h2');
                h2preco.textContent = 'Preço R$: ' + item.preco;

                const btn_editar = document.createElement('button');
                btn_editar.textContent = 'Editar';
                btn_editar.addEventListener('click', () => {
                    // Aqui você pode implementar a lógica para capturar as informações do usuário para edição
                    


                    const dadosedit = {
                        id: item.id,
                        nome : nome.value,
                        preco : preco.value,
                        descricao : quantidadeEdit.value,
                        quantidade : descricaoEdit.value
                    }

                    console.log(dadosedit)
            
                    // Agora você tem as informações que o usuário deseja editar (novadescricao e novopreco)
                    // e também o ID do produto (item.id)
                    // Faça o que for necessário com esses dados, como atualizar os valores no servidor, etc.
                });
            
                // Botão de Excluir
                const btn_excluir = document.createElement('button');
                btn_excluir.textContent = 'Excluir';
                btn_excluir.addEventListener('click', () => {
                    // Aqui você pode implementar a lógica para excluir o produto com o ID correspondente (item.id)
                });

                // Adicionando os elementos criados à div do produto
                divprod.appendChild(nomeprod);
                divprod.appendChild(id);
                divprod.appendChild(btn_editar);
                divprod.appendChild(btn_excluir);
                divprod.appendChild(descricao);
                divprod.appendChild(h2preco);
                divprod.appendChild(quantidade);

                // Adicionando a div do produto à div principal
                divprincipal.appendChild(divprod);
            });
        }

        // Fazendo uma requisição AJAX para buscar os produtos no servidor
        $.ajax({
            url: '../PHP/selectprodutos.php',
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
