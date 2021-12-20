class Animal {
    constructor(tipo) {

        if (this.constructor === Animal) {

            throw new Error('Animal é uma classe abstrata.')
        }

        if (tipo) {

            this.tipo = tipo
        }
    }

    comer() {

        throw new Error("Método 'comer()' deve ser implementado")
    }
}

class Gato extends Animal {

    constructor(nome) {

        super('mamifero')
        this.nome = nome
    }

    comer() {

        console.log(`${this.nome} está comendo`);
    }
}

// const animal = new Animal("mamifero")
const mingal = new Gato('mingal')