export class Header{

    _nav1
    _nav2
    _nav3
    _logosrc

    constructor(nav1,nav2,nav3,logosrc){
        this._nav1 = nav1
        this._nav2 = nav2
        this._nav3 = nav3
        this._logosrc = logosrc
    }

    metodoheader(){
        const navegador = document.getElementById("nav1")
        const header = document.getElementById("header")

        const nav1 = document.createElement("a")
        nav1.textContent = this._nav1

        const nav2 = document.createElement("a")
        nav2.textContent = this._nav2

        const nav3 = document.createElement("a")
        nav3.textContent = this._nav3

        const imagem = document.createElement("img")
        imagem.setAttribute("src", this._logosrc)

        header.appendChild(imagem)
        navegador.appendChild(nav1)
        navegador.appendChild(nav2)
        navegador.appendChild(nav3)
        
    }


}