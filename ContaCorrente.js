import {Cliente} from "./Cliente.js";

export class contaCorrente {
        static  numeroDeContas = 0;
        
        constructor(agencia, cliente) {
            this.agencia = agencia;
            this.cliente = cliente;
            ContaCorrente.numeroDeContas += 1;
            this.saldo = 0;
        }

    sacar(valor) {
        if(this._saldo >= valor){
        this._saldo -= valor;
        return valor;
        }
    }
  }
    depositar(valor) {
        if(valor <= 100)
        {
          return
        }

        transferir(valor, conta) {

              const valorSacado = this.sacar(valor);
              conta.depositar(salorSacado);
        }
}
