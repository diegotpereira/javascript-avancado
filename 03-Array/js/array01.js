const arr = [1, 5, 10, 'ola', true]

let sohNumeros = arr.some(function(elemento) {

    return typeof elemento === 'number'
})

let arr1 = arr.filter(function(elemento, i, _arr) {

    return typeof elemento === 'number'
})

arr.forEach(function(elemento, i, _arr) {

    console.log(elemento);
})

let arr2 = arr1.map(function(elemento, i, _arr) {

    return elemento * elemento
})

// console.log(arr);
// console.log(sohNumeros);
// console.log(arr1);
console.log(arr2);