let idade = 27
let paisPresentes = false
let comprouBilhete = true

const podeViajar = (idade >= 18 || paisPresentes) &&
                comprouBilhete
console.log(`Pode viajar: ${podeViajar}`)