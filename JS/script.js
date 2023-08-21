import {Produtos} from './produtos.js'
import { Header } from './header.js';


const produtos = new Produtos();
const header = new Header("home","categorias","contato" ,"https://upload.wikimedia.org/wikipedia/commons/e/e9/LOGO_COM_FUNDO_BRANCO.png")

header.metodoheader();

produtos.exibirprodutos("div","div-prod",'./PHP/selectprodutos.php');










