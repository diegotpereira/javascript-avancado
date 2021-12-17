// Muito abaixo do peso - 16 a 16,9 kg/m2
// Abaixo do peso - 17 a 18,4 kg/m2
// Peso normal - 18,5 a 24,9 kg/m2
// Acima do peso - 25 a 29,9 kg/m2
// Obesidade Grau I - 30 a 34,9 kg/m2
// Obesidade Grau II - 35 a 40 kg/m2
// Obesidade Grau III - maior que 40 kg/m2

function calcularIMC(peso, altura, callback) {

    if (peso === undefined || altura === undefined) {

        throw Error('Precisamos de dois parâmetros: seu peso e altura')
    }

    let imc = peso / (altura * altura)

    if (typeof callback === 'function') {

        return callback(imc)
    }

    return imc
}

function classificarIMC(imc) {

    if (imc <= 16.9) {

        return 'Você está muito abaixo do peso.'
    } else if (imc <= 18.4) {

        return 'Você está abaixo do peso.'
    } else if (imc <= 24.9) {

        return 'Você está com o peso normal.'
    } else if (imc <= 29.9) {

        return 'Você está acima do peso.'
    } else if (imc <= 34.9) {

        return 'Você está com obesidade nível 1, atenção'
    } else if (imc <= 40) {

        return 'Você está com obesidade nível 1, procure ajuda'
    } else {

        return 'Você está com obesidade nível 3, procure ajuda médica urgente'
    }
}

let imc = calcularIMC(80, 1.65)
let imc2 = calcularIMC(80, 1.65, classificarIMC)

console.log(imc);
console.log(imc2);