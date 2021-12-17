let str1 = 'Minha String Bacanuda'
console.log(str1.replace(/i/g, 'o'));
console.log(str1);

console.log('---------------');

console.log(str1.slice(2));
console.log(str1.substring(2));

console.log('----------------');

console.log(str1.slice(-5, -2))
console.log(str1.substring(-5, -2))

console.log('----------------');

console.log(str1.slice(8, 1))
console.log(str1.substring(8, 1))

console.log('----------------');

console.log(str1.toUpperCase())
console.log(str1.toLowerCase())

console.log('----------------');

let strAsObj = new String('minha string como objeto')
console.log(strAsObj);
console.log(strAsObj.valueOf());
console.log(strAsObj.toString());

console.log('----------------');

console.log(str1);
console.log(str1.trim());
console.log(str1.trimEnd());
console.log(str1.trimStart());
console.log(str1);

console.log('----------------');

str1 = '0123456789'
console.log(str1.padEnd(20));
console.log(str1.padEnd(20, '*'));
console.log(str1.padEnd(20, '*').length);
console.log(str1);

let telefone1 = '91234-2345'
let telefone2 = '1234-2345'

function mascararTelefone(numero) {

    let hifemPosicao = numero.indexOf('-')
    let numeroInicio = numero.slice(0, hifemPosicao)
    let numeroFinal = numero.slice(hifemPosicao + 1)
    let doisUltimosNumeros = numeroFinal.slice(-2)


    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosNumeros.padStart(numeroFinal.length, "*")}`
}

console.log(mascararTelefone(telefone1));
console.log(mascararTelefone(telefone2));


console.log('----------------');

let str2 = 'Hoje é Sábado'

// startsWith() determina se uma string 
// começa com os caracteres especificados, 
// retornando true ou false.
console.log(str2.startsWith('oje', 1));

// endsWith() indica se uma string termina 
// com determinados caracteres, retornando 
// true ou false .
console.log(str2.endsWith('é', 6));


console.log('----------------');

let str3 = 'abcdefgh'

// charAt() retorna o caractere 
// especificado a partir de uma 
// string. ... do intervalo de 
// índices da string, 
// JavaScript retornará uma string vazia
console.log(str3.charAt(1));
console.log(str3[1]);

// charCodeAt() retorna um número inteiro 
// entre 0 e 65535 que representa a unidade 
// de código UTF-16 no índice fornecido.
console.log(str3.charCodeAt(0));
console.log(str3.charCodeAt(1));