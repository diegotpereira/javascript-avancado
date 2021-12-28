let str = 'Hoje é 28/12/2021 e amanhã será 29/12/2021. Meu aniversário é 01/01/2022'

const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

const regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g

str = str.replace(regex, function (a, dia, mes, ano, e, f) {
    return `${dia} de ${meses[parseInt(mes) - 1]} ${(ano) ? `de ${ano}` : ``}`
})

console.log(str);