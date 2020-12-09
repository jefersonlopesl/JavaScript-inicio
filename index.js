import {cliente} from "./Cliene.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new cliente("Ricardo", 1222333444555);
const cliente2 = new cliente("Alice", 1233344434345);

let numeroDeContas = 0;

const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
numeroDeContas++;

contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);
numeroDeContas++;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrenteta.numeroDeContas)
