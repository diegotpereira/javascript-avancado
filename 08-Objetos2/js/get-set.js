let tipo = ''

const tiposPermitidos = ['mamifero', 'anfibio']

const cachorro = {
    nome: 'rex',
    get tipo() {

        return tipo
    },

    set tipo(_tipo) {

        if (tiposPermitidos.indexOf(_tipo) >= 0) {

            tipo = _tipo
        }

    }
}

// ponto e vírgula(;) para evitar sujar escopo global
;
(function() {

    let tipo = ''

    const tiposPermitidos = ['mamifero', 'anfibio']

    const gato = {
        nome: 'mingal',

        get tipo() {

            return tipo
        },

        set tipo(_tipo) {

            if (tiposPermitidos.indexOf(_tipo)) {

                tipo = _tipo
            }
        }
    }

    this.gato = gato
})()