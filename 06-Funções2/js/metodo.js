function latir() {

    console.log(this.name, ' Fala: au au');
}

function miar() {

    console.log(this.name, ' Fala: miau');
}

const cachorro = {
    name: 'Rex',
    falar() {

        console.log(this.name, ' Fala: au au');
    },

    falar2() {
        console.log('falar2');
    }
}

const gato = {
    name: 'Mingal',
    falar() {
        console.log(this);
        miar.call(this)
    }
}

cachorro.falar()
cachorro.falar2()
gato.falar()