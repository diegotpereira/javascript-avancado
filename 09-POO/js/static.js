// ES5
function Animal() {}

Animal.prototype.whoAmI = function() {

    return this
}

Animal.categoria = 'ser vivo'

const dog = new Animal()

// ES6
class Cachorro {
    constructor(nome) {
        this.nome = nome
        console.log('"chamando metodo estático de dentro do constructor');
        Cachorro.beber()
    }

    static comer() {
        console.log('comendo');
        this.beber()
    }

    static beber() {

        console.log('bebendo');
    }
}

const dog2 = new Cachorro('rex')
    // dog2.comer()
    // dog2.beber()
    // console.log(dog2);