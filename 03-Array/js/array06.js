let arr = [1, 2, 3, 4]

let j = 0

// Reduce executa uma função reducer (fornecida por você) para cada 
// elemento do array, resultando num único valor de retorno.
let soma = arr.reduce(function(acumulador, atual, i, _arr) {

    console.log('i: ', i);
    console.log('j: ', j);
    console.log('acumulador: ', acumulador, ' ---atual: ', atual);

    return acumulador + atual
}, ' -- ')

console.log(soma);
console.log(arr);

const nomes = ['José', 'Maria', 'Joana', 'Joao']
let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual) {

    let primeiraLetra = nomeAtual[0]

    if (nomes[primeiraLetra]) {

        nomes[primeiraLetra]++

    } else {

        nomes[primeiraLetra] = 1
    }

    return nomes
}, {})

console.log(nomesPorOrdem);

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
const numerosUnicos = [1, 3, 4, 5, 8, 9]