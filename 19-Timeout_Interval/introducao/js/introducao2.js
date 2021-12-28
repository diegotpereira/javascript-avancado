const tempoInicial = Date.now()
let n = 0
let str = ''
var d = document.querySelector('div')

setTimeout(function() {
    for (let i = 0; i < 1000; i++) {
        str += `i: ${i} --`
        d.textContent += str
    }
}, 3000)

const intervalo = setInterval(function() {
    console.log('interval n: ', n++);
    if (n >= 10) {
        clearInterval(intervalo)
        const tempoFinal = Date.now()
        console.log(tempoFinal - tempoInicial);
    }
}, 1000)