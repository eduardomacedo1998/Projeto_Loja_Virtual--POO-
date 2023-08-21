import {Produtos} from './produtos.js'
import { Header } from './header.js';


const produtos = new Produtos();
const header = new Header("home","categorias","contato" ,"https://static.vecteezy.com/ti/vetor-gratis/p3/5076592-hacker-mascot-for-sports-and-esports-logo-gratis-vetor.jpg")

header.metodoheader();

produtos.exibirprodutos("div","div-prod");










