'use strict'
let y = 10
let a = 0

function foo() {

    'use strict'
    let x = 20
}

foo()

console.log(y);


function dobrar(n1, n2) {
    "use strict"
    console.log(n1, n2)
    return n1 * n2
}
console.log(dobrar(5))

// function Teste() {
//     "use strict"
//     console.log(this)
//     this.a = "a"
// }
// Teste()


let msg = "uma string"
msg.count = 0
console.log(msg)