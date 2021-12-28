const paragrafoOrigens = Array.from(document.querySelectorAll('p')).map(p => p.innerHTML)

document.querySelector('input').addEventListener('input', e => {
    const valor = e.target.value 

    Array.from(document.querySelectorAll('p')).map((paragrafo, i) => {
        const paragrafoHTML = paragrafoOrigens[i]
        if (valor) {
            const regex = new RegExp(valor, 'gi')
            const htmlReplaced = paragrafoHTML.replace(regex, result => {

                return `<span class="hgt">${result}</span>`
            })
            console.log(htmlReplaced);
            paragrafo.innerHTML = htmlReplaced
        } else {
            paragrafo.innerHTML = paragrafoHTML
        }
    })
})