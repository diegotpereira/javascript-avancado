// Factories 
const cachorroProto = {

    latir() {

        console.log(this.nome, 'está latindo');
    },

    andar(distancia) {

        this.posicao += distancia
        console.log(this.nome, 'andou', distancia);
    }
}

function criarCachorro(nome) {

    let posicao = 0

    const obj = {

        nome,

        get posicao() {

            console.log(`a posição atual de ${this.nome} é ${posicao}`);

            return posicao
        },

        set posicao(novaPosicao) {

            console.log(`A nova posição de ${this.nome} é ${novaPosicao}`);
            posicao = novaPosicao
        }
    }

    Object.setPrototypeOf(obj, cachorroProto)

    return obj
}

let dog1 = criarCachorro('dog1')
let dog2 = criarCachorro('dog2')

// ES5
function Animal(tipo) {

    if (this instanceof Animal) {

        if (tipo) this.tipo = tipo
    } else {

        throw new Error('O animal deve ser criado com o novo operador')
    }
}

function Cachorro(nome) {

    this.nome = nome

    Animal.call(this, 'mamifero')

    this.comer = function() {

        console.log(`${this.nome} está comendo`);
    }
}

Cachorro.prototype = new Animal()
Cachorro.prototype.latir = function() {

    console.log(`${this.nome} está latindo`);
}


Cachorro.prototype.constructor = Cachorro

let dog = new Cachorro('Dog')

Animal.prototype.obterTipo = function() {

    return this.tipo
}

Animal.prototype.tipo = 'desconhecido'

// ES6
class AnimalC {

    constructor(tipo) {

        if (tipo) {

            this.tipo = tipo
        }
    }

    obterTipo() {

        return this.tipo
    }
}

class GatoC extends AnimalC {

    constructor(nome) {

        super('mamifero')

        this.nome = nome
        this.comer = function() {

            console.log(`${this.nome} está comendo`);
        }
    }
}

AnimalC.prototype.tipo = 'desconhecido'

let animal = new AnimalC('anfibio')
let sapo = new AnimalC()

let mingal = new GatoC('mingal')

console.log(Animal.prototype)
console.log(AnimalC.prototype)
console.log(mingal)
console.log(dog)