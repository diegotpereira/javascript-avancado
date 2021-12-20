const NOME = Symbol()

console.log(typeof NOME);

let n = 0

const usuario = {

    ['teste' + (++n)]: 'teste' + n,
    ['teste' + (++n)]: 'teste' + n,
    ['teste' + (++n)]: 'teste' + n,
    [NOME]: 'com symbol',
    'nome': 'com string',
    3: 'com número'
}

usuario.nome = 'nome alterado'
console.log(usuario);
console.log(usuario[NOME]);


let teste = Object.getOwnPropertySymbols(usuario)

console.log(teste[0]);
console.log(usuario[teste[0]]);
console.log(typeof usuario[teste[0]]);

usuario[teste[0]] = 'nome alterado'
console.log(usuario);