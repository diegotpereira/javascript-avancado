const arr1 = new Array(3)
    // console.log(arr1);
    // console.log(arr1.length);


// of percorre objetos iterativos 
// (incluindo Array, Map, Set, o 
// objeto arguments e assim por diante), 
// chamando uma função personalizada com 
// instruções a serem executadas para o 
// valor de cada
const arr3 = Array.of(3)
    // console.log(arr3)
    // console.log(arr3.length)


// cria uma nova instância 
// de um Array quando for 
// passado um array-like ou 
// um iterable object como argumento.
const arr2 = Array.from(arr1)
arr2.push(4, 5)
    // console.log(arr2);

let paragrafos = document.querySelectorAll('p')
console.log(paragrafos);

// forEach é um tipo de estrutura de repetição, 
// só que ele é disponível para a manipulação 
// dos elementos de um array.
paragrafos.forEach(function(p, i) {

    p.textContent = `${++i} - ${p.textContent}`
})

paragrafos = Array.from(paragrafos)

// map invoca a função callback passada 
// por argumento para cada elemento do Array 
// e devolve um novo Array como resultado.
paragrafos.map(function(p, i) {

    p.textContent = `${++i} - ${p.textContent}`
})