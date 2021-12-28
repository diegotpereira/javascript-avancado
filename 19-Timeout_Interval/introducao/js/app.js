const tempoInicial = Date.now()
let n = 0

setTimeout(function() {
    console.log('timeout depois de 2000ms');

    const tempoFinal = Date.now()

    console.log(tempoFinal - tempoInicial);
}, 2000)

let str = ''
var d = document.querySelector('div')

for (let i = 0; i < 1000; i++) {
    str += `i: ${i}`
    d.textContent += str
}

const intervalo = setInterval(function() {
    console.log('interval n: ', n++);
    if (n >= 10) {
        clearInterval(intervalo)
    }
}, 1000)