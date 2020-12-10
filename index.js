import {cliente} from "./Cliene.js";
import {contaCorrente} from "./ContaCorrente.js";
import {ContaPoupança} from "./ContaPoupança.js";
import {Conta} from "./Conta.js";

const cliente1 = new cliente("Ricardo", 1222333444555);

const contaCorrenteRicardo = new contaCorrente(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const ContaPoupança = new Conta(50, cliente1, 1001);

console.log(ContaPoupança);
console.log(ContaCorrenteta.numeroDeContas);
