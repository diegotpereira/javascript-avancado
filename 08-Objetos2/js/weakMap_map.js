const myMap = new Map()
const myObj = new Object()

myObj.prop1 = 'prop 1'

const arr = []

myMap.set(arr, myObj)
console.log(myMap.get(arr));

const myMap2 = new Map([
    [0, 'zero'],
    [1, 'um'],
    [2, 'dois']
])

console.log(myMap2.get(0));
console.log(myMap2.get(2));
console.log(myMap2.keys());
console.log(myMap2.values());
console.log(myMap2.entries());

let keys = myMap2.keys()

for (let k of keys) {

    console.log(k);
}

let _contador = new WeakMap()

class Contador {

    constructor() {

        _contador.set(this, 0)
    }

    incrementar() {

        _contador.set(this, _contador.get(this) + 1)
        console.log(_contador.get(this));
    }

    get contador() {

        return _contador.get(this)
    }
}

console.log('--------------------');

const c1 = new Contador()
c1.incrementar()
console.log(c1.contador);
c1.incrementar()
c1.incrementar()
console.log(c1.contador);