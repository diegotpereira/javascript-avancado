// 2. Criar duas classes que herdam de ContaBancaria
// - ContaCorrente
//     - limite
// - ContaPoupanca
// - aniversario

class ContaBancaria {

    constructor(cliente, numero) {

        if (this.constructor === ContaBancaria) {

            throw new Error('ContaBancaria é uma classe abstrata')
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    depositar(valor) {

        this.saldo += valor
    }

    sacar() {

        throw new Error('Metodo sacar() precisa ser implementado')
    }
}

class ContaPoupanca extends ContaBancaria {

    constructor(cliente, numero) {
        super(cliente, numero)
        this.aniversario = Date.now()
    }

    sacar(valor) {

        if (valor > this.saldo) {

            throw new Error('Saldo insuficiente')
        }

        this.saldo -= valor
    }
}

class ContaCorrente extends ContaBancaria {

    constructor(cliente, numero) {

        super(cliente, numero)
        this.limite = 0
    }

    sacar(valor) {

        let disponivel = this.saldo + this.limite

        if (valor > disponivel) {

            throw new Error('Saldo insuficiente')
        }

        this.saldo -= valor
    }
}


// const cp1 = new ContaPoupanca('José', 1)
// cp1.depositar(1000)
// cp1.sacar(999)
// console.log(cp1);

// const cp2 = new ContaPoupanca('Maria', 2)
// cp2.depositar(200)
// cp2.sacar(150)
// console.log(cp2);

const cc1 = new ContaCorrente('João', 3)
cc1.limite = 1000
console.log(cc1);
cc1.sacar(950)
console.log(cc1);