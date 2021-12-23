export function soma() {

    const numeros = [...arguments]

    return numeros.reduce(function(soma, atual) {

        return soma + atual
    }, 0)
}

export function avarege() {

    return soma(...arguments) / arguments.length
}