(function() {

    function pegaIndice(indice) {
        const trHeader = document.querySelector('thead tr')
        const thsHeader = trHeader.querySelectorAll('th')

        const th = trHeader.querySelector(`[aluno-nota = "${indice}"]`)
        console.log(th);

        // thsHeader.indexOf(th)

        // const i = Array.prototype.indexOf.call(thsHeader, th)
        // const i = Array.from(thsHeader).indexOf(th)
        const i = [...thsHeader].indexOf(th)

        return i
    }

    const INDICES_NOTAS = {

        n1: pegaIndice('n1'),
        n2: pegaIndice('n2'),
        n3: pegaIndice('n3'),
        n4: pegaIndice('n4'),

        media: pegaIndice('media')

    }

    console.log(INDICES_NOTAS)

    const trs = document.querySelectorAll('tbody tr')

    let x = 0
    let media = 0

    while (trs[x]) {

        console.log(trs[x]);

        const tds = trs[x].querySelectorAll('td')
        console.log(tds);

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