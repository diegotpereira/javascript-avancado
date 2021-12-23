import { MyMod2 } from './mod2.js'

function myMod1() {
    console.log('myMod 1 executado');

    return 'valor retornando de myMod1'
}

export function myMod1_nomeada() {

    return 'função exportada nomeada'
}

export const PI = 'PI:' + Math.PI

export const obj = {
    foo: true,
    bar: 'olá mundo'
}


const nome = 'João'
const idade = 40

export { nome, idade }

console.log(new MyMod2());

export default myMod1