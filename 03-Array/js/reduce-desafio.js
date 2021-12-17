const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]

const numerosUnicos = numeros.reduce(function(numerosUnicos, numeroAtual) {

    // indexOf() retorna o primeiro índice em que 
    // o elemento pode ser encontrado no array, 
    // retorna -1 caso o mesmo não esteja presente.
    if (numerosUnicos.indexOf(numeroAtual) < 0) {

        numerosUnicos.push(numeroAtual)
    }

    return numerosUnicos
}, [])

console.log(numerosUnicos);