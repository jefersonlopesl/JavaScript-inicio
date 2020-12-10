export class conta {
    constructor(tipo, saldoInicial, cliente, agencia) {
        this>_saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo = tipo;
  
      }
  }
  
    sacar(valor) {
      let = taxa = 1;
      if (this._tipo == "corrente"){
        taxa = 1.1;
      }
      taxa = 1.1 * valor;
      if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
      }
  }
  }
    depositar(valor) {
      if(valor <= 100) {
      return;
    }
       this._saldo += valor;
      }
  
    transferir(valor, conta) {
            const valorSacado = this.sacar(valor);
            conta.depositar(salorSacado);
      }
  }
}