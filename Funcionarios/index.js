import {cliente} from "./Cliene.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000,123456789);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 123456780);
gerente.cadastrarSenha("654321");

const estaLogado = SistemaAutenticacao.login(gerente, 654321);
console.log(estaLogado);