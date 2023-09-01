<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../CSS/styleAdiconar56.css">
</head>
<body>

    <?php include_once "../PHP/editprod.php" ?>

    <h1>Cadastro de produtos</h1>

    <div id="botao-adicionar-prod" class="botao_adicionar_prod">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDPz_JPRf1z2MgyB_ftQPQZaA1rAlVs5N0w&usqp=CAU" alt="">
        <h3>Novo Produto</h3>
    </div>

    <div id="divform" class="divform">

        <form action="" id="formCad">

              <h2>Novo produto</h2>

            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="seu nome aqui " required>

            <label for="preco">Preço do produto:</label>
            <input type="text" id="preco" name="preco" placeholder="valor de venda" required>

            <label for="quantidade">quantidade</label>
            <input type="text" id="quantidade" name="quantidade" placeholder="quantidade do estoque" required>

            <label for="descricao">descrição</label>
            <input type="text" id="descricao" name="descricao" placeholder="descrição do produto" required>


            <button type="button" id="btn-cad">Cadastrar</button>
            


        </form>

    </div>


    <h2>produtos</h2>

    <div id="div">

    

        <form action="" id="formEditProd" class="formEditProd">
        <h3>editar produtos</h3>
            <label for="nomeEdit">Nome</label>
            <input type="text" id="nomeEdit" name="nome" placeholder="seu nome aqui " required>

            <label for="precoEdit">descrição:</label>
            <input type="text" id="precoEdit" name="preco" placeholder="valor de venda" required>

            <label for="quantidadeEdit">preco</label>
            <input type="text" id="quantidadeEdit" name="quantidade" placeholder="quantidade do estoque" required>

            <label for="descricaoEdite">estoque</label>
            <input type="text" id="descricaoEdit" name="descricao" placeholder="descrição do produto" required>

            

        </form>

    </div>



    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script type="module"  src="../JS/script_pagina_cadprod.js"></script>

    
</body>
</html>