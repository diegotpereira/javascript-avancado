let str = 'Hoje é 28/12/2021 e amanhã será 29/12/2021. Meu aniversário é dia 01/01'
const regex = /(\d{1,2})\//g
let arr = regex.exec(str)

while (arr) {
    console.log(`Encontrei ${arr[0]} na posição ${arr.index}. Próxima busca começa em ${regex.lastIndex}`);
    arr = regex.exec(str)
}

console.log('terminou o loop');