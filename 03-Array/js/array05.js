let arr = [1, 3, 5, 7, 9]


// Push Adiciona um ou mais elementos ao final de 
// um array e retorna o novo comprimento desse array.
let teste = arr.push(11, 13, true, 'Olá mundo')

console.log(teste);
console.log(arr);

// Pop remove o último elemento 
// de um array e retorna aquele valor.
let ultimoitem = arr.pop()
    // let ultimoitem = arr[arr.length - 1]
console.log(ultimoitem);
console.log(arr);


// Shift remove o elemento de índice zero, 
// diminui em 1 os indices dos demais valores 
// e retorna o valor removido.
let primeiroitem = arr.shift()
console.log(primeiroitem);
console.log(arr);

// Unshift insere os valores fornecidos no 
// início de um objeto do tipo array.
teste = arr.unshift(4, 5, 6)
console.log(teste);
console.log(arr);

// Slice retorna uma cópia de parte de um array 
// a partir de um subarray criado entre as posições 
// início e fim (fim não é necessário) de um array original. 
// O Array original não é modificado.
let arr2 = arr.slice(5)
console.log(arr2);
console.log(arr);

// Splice altera o conteúdo de uma lista, 
// adicionando novos elementos enquanto remove 
// elementos antigos.
let arr3 = arr.splice(2, 4, 'olá mundo', 10, 100, 1000)
console.log(arr);
console.log(arr3);