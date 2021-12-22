(function() {

    const trHeader = document.querySelector('thead tr')
    const thsHeader = trHeader.querySelectorAll('th')
    const thsAlunoNotas = trHeader.querySelectorAll('[aluno-nota]')
    const INDICES_NOTAS = {}

    Array.from(thsAlunoNotas).forEach(function(th) {
        let prop = th.getAttribute('aluno-nota')
        INDICES_NOTAS[prop] = pegaIndice(prop)
    })

    function pegaIndice(indice) {
        const th = trHeader.querySelector(`[aluno-nota = "${indice}"]`)
        const i = [...thsHeader].indexOf(th)

        return i
    }

    console.log(INDICES_NOTAS);

    const trs = document.querySelectorAll('tbody tr')

    let x = 0
    let media = 0

    while (trs[x]) {
        const tds = trs[x].querySelectorAll('td')

        media = avarege(
            parseFloat(tds[INDICES_NOTAS.n1].textContent),
            parseFloat(tds[INDICES_NOTAS.n2].textContent),
            parseFloat(tds[INDICES_NOTAS.n3].textContent),
            parseFloat(tds[INDICES_NOTAS.n4].textContent)
        )

        x++

        tds[INDICES_NOTAS.media].textContent = media
    }
})()