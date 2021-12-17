let arr = [4, 5, 10, 20, 35, 4, 5]

// Retorna o primeiro índice 
// em que o elemento pode ser encontrado no array
console.log(arr.indexOf(555));
console.log(arr.indexOf(555) > -1);

// Determina se um array contém um determinado elemento, 
// retornando true ou false apropriadamente.
console.log(arr.includes(555));

// Executa a função callback uma vez para cada elemento 
// presente no array até que encontre um onde callback 
// retorne o valor true.
console.log(arr.find(function(elemento) {

    return elemento > 100
}));

// Executa a função callback uma vez para cada elemento 
// presente no array até encontrar um onde o callback 
// retorna um valor verdadeiro.
console.log(arr.findIndex(function(elemento) {

    return elemento < 1000
}));

// Função Callback É um tipo de função que só é executada após o 
// processamento de outra função.