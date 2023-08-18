import {Dados} from './dados.js'
import {Header} from './header.js'
import {Produtos} from './produtos.js'

const header = new Header("COMPRAS","PEDIDOS","ENTREGAS","https://static.vecteezy.com/ti/vetor-gratis/p3/5076592-hacker-mascot-for-sports-and-esports-logo-gratis-vetor.jpg")
const dados = new Dados()
const produtos = new Produtos ("nescal", "12,99", "20", "legal")



produtos.mostrar()

header.metodoheader()

dados.receberDados()

dados.renderizaprod()










