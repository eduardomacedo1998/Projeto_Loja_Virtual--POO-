
function botaocadastro(){
    const btn_cadastro =  document.getElementById("botao-adicionar-prod")
    const divcadastro =  document.getElementById("divform")



    btn_cadastro.addEventListener("click", function(){


        const dados = divcadastro.style.display = "none"

      
        if(dados == "none"){
          
            divcadastro.style.display = "block"
            divcadastro.style.transition ="0.4s"
          
        }else{

            btn_cadastro.addEventListener("click", function(){
            divcadastro.style.display = "none"
            })
            
        }

    })
}


botaocadastro()

