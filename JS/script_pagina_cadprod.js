import { Produtos } from "./produtos.js"




function botaocadastro(){ /*Função: exibir o form de cadastro ao clique do usuario */
    const btn_cadastro =  document.getElementById("botao-adicionar-prod")
    const divcadastro =  document.getElementById("divform")



    btn_cadastro.addEventListener("click", function(){


        const dados = divcadastro.style.display = "block"

    })
}


 const btn = document.getElementById("btn-cad")

 btn.addEventListener("click", function(){

    const nome = document.getElementById("nome").value
    const preco = document.getElementById("preco").value
    const quantidade= document.getElementById("quantidade").value
    const descricao = document.getElementById("descricao").value

    const metodocadastro = new Produtos()


    metodocadastro.cadastrarprod(nome,preco,quantidade,descricao)
    



 })


 const exibiritem = new Produtos()

 exibiritem.exibirprodutos("div","divprod")


 

 

 


    







botaocadastro()

