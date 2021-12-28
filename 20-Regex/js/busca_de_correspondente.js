let str = 'hoje é 28/12/2021 e amanha será 29/12/21. Meu aniversario é 1/01';

const regex = /(\d{1,2})\//
const regexGlobal = /(\d{1,2})\//g

console.log(str.search(regexGlobal))

console.log(str.match(regexGlobal))