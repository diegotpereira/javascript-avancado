'use strict'

const pessoa = {
    nome: 'João'
}

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'));

Object.defineProperty(pessoa, 'sobrenome', {

    value: 'Chico Anysio',
    enumerable: true,
    configurable: true,
    writable: true
})

Object.defineProperty(pessoa, 'sobrenome', {
    configurable: false
})

Object.defineProperty(pessoa, 'sobrenome', {
    writable: false
})

Object.defineProperties(pessoa, {
    prop1: {
        value: 'prop 1',
        writable: true
    },

    prop2: {
        writable: false,
        value: 10
    }
})

console.log(Object.getOwnPropertyDescriptor(pessoa, 'sobrenome'));