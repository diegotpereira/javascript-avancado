let str = 'hoje é meu dia preferido 31/12/2021. Meu dia é 1 de Janeiro'
let strRegex = 'meu'
const regex = new RegExp("\\w", "gi")

console.log(regex.lastIndex);
console.log(regex.exec(str));
console.log(regex.lastIndex);
console.log(regex.exec(str));