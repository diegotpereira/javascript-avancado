let arr = []
let i = 0;

while(arr.length <= 20) {
    i++

    let numeroAleatorio = gerarNumeroInteiroAleatorio(30)

    if (arr.indexOf(numeroAleatorio) < 0) {
        
        arr.push(numeroAleatorio)
    } else {
        console.log(numeroAleatorio, ' número aleatório existe no arr');
    }
}


console.log(arr);
console.log('O loop foi executado ', i, ' vezes');


function gerarNumeroInteiroAleatorio(maximo) {

    return parseInt(Math.random() * maximo)
}

