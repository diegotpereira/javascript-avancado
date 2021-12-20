const obj1 = {

    nome: 'João'
}

const obj2 = {

    nome: 'Maria'
}

// Object.defineProperty() define uma 
// nova propriedade diretamente em um 
// objeto, ou modifica uma propriedade 
// já existente em um objeto, e retorna 
// o objeto.
Object.defineProperty(obj2, 'nome', {

    writable: false,
    configurable: false
})

// Object.preventExtensions() impede que 
// novas propriedades sejam adicionadas a 
// um objeto (isto é, impede futuras 
// extensões ao objeto).
Object.preventExtensions(obj2)

// Object.freeze() congela um objeto: isto é, 
// impede que novas propriedades sejam 
// adicionadas a ele; impede que as 
// propriedades existentes sejam removidas; 
// e impede que propriedades existentes, 
// ou sua inumerabilidade, configurabilidade, 
// ou capacidade de escrita sejam alteradas. 
// Em essência o objeto é efetivamente imutável. 
// O método retorna o objeto congelado.
Object.freeze(obj1)

// Object.isFrozen() determina se 
// um objeto está frozen.
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj2));