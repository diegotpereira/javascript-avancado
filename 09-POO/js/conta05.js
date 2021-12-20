// 5. Polimorfismo
//    criar uma classe especializada em transferir. 
//    Essa classe tera um único método execute(contaOrigem, contaDestino, valor). 
//    Tanto contaOrigem quanto contaDestino precisam ser instancias de ContaBancaria. 
//    Tanto CC quanto CP tem o metodo sacar(), que têm implementações diferentes. 
//    Mas como sabemos que contaOrigem e contaDestino possuem o metodo sacar, 
//    independente se for CC ou CP podemos chamar esse método.

class Transferir {
    static execute(contaOrigem, contaDestino, valor) {

        if (!contaOrigem instanceof ContaBancaria ||
            !contaDestino instanceof ContaBancaria) {

            throw new Error('Contas precisa, herdar ContaBancaria')
        }

        try {

            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)

        } catch (e) {

            console.log('Deu ruim', e.message);
        }
    }
}

class Cliente {
    constructor(nome, documento, tipoDocumento) {

        if (this.construtor === Cliente) {

            throw new Error('Cliente é uma classe abstrata')
        }

        this.nome = nome
        this.documento = documento
        this.tipoDocumento = tipoDocumento
    }
}

class PessoaFisica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, 'CPF')
    }
}

class PessoaJuridica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, 'CNPJ')
    }
}

const cliente1 = new PessoaFisica('João', '12.133.144-30')
const cliente2 = new PessoaJuridica('joao sem braço', '122.133.144/0001-01')

console.log(cliente1);
console.log(cliente2);

class ContaBancaria {

    constructor(cliente, numero) {

        if (this.constructor === ContaBancaria) {

            throw new Error('ContaBancaria é uma classe abstrata')
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    get dadosCliente() {

        return `${this.cliente.nome}, ${this.cliente.tipoDocumento} : ${this.cliente.documento}`
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


const joao = new PessoaFisica('joao', '12.133.144-10')
const maria = new PessoaJuridica('maria', '123.123.123/0001-01')

const cp1 = new ContaPoupanca(joao, 1)
cp1.depositar(1000)
cp1.sacar(500)
console.log(cp1.dadosCliente);

// const cp2 = new ContaPoupanca(maria, 2)
// console.log(cp2);
// console.log(cp2.dadosCliente);