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
}

Cachorro.prototype = new Animal()
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
    }
}

AnimalC.prototype.tipo = 'desconhecido'

let animal = new AnimalC('anfibio')
let sapo = new AnimalC()

let mingal = new GatoC('mingal')

console.log(Animal.prototype);
console.log(AnimalC.prototype);
console.log(mingal);
console.log(dog);