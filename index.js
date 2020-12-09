class cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    saldo; 

    sacar(valor) {
        if(this.#saldo >= valor){
        this.#saldo -= valor;
        }
    }
    depositar(valor) {
        if(valor > 0) {
        this.#saldo += valor;
        }
    }
}


const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1222333444555;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 1233344434345;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo =10000;
contaCorrente.agencia = 1001;

contaCorrenteRicardo.depositar += (100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);

