function sum() {

    const numbers = []

    // for (let i = 0; i < arguments.length; i++) {

    //     numbers.push(arguments[i])
    // }

    // console.log(numbers);

    // call invoca uma função com um dado valor this e argumentos 
    // passados individualmente.
    Array.prototype.forEach.call(arguments, function(argument) {

        numbers.push(argument)
    })

    return numbers.reduce(function(sum, atual) {

        return sum + atual
    }, 0)
}

console.log(sum(1, 2, 3, 4, 5));

function avarege() {

    // apply função ser quase idêntica à de
    // call, a difrença é que apply aceita 
    // um único array de argumentos.
    const soma = sum.apply(null, arguments)

    console.log(soma);

    return soma / arguments.length
}

console.log(avarege(1, 2, 3, 4, 5));

// sum.call(null, 1, 2, 3, 4, 5)
// sum.apply(null, [1, 2, 3, 4])