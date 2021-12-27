(function() {
    let elementos = [...document.querySelectorAll('[data-addClasse-on-scroll]')]

    window.addEventListener('scroll', addClasseComScroll)

    function eElementoNaView(el) {
        let rect = el.getBoundingClientRect()

        return (
            (rect.top <= 0 && rect.bottom >= 0) ||
            (rect.top >= 0 && rect.bottom <= innerHeight)
        )
    }

    function addClasseComScroll() {

        if (elementos.length === 0) {

            window.removeEventListener('scroll', addClasseComScroll)

            console.log("evento removido com sucesso")
        }

        elementos.forEach(el => {

            if (eElementoNaView) {
                let atraso = parseInt(el.getAttribute('data-addClasse-on-scroll-atraso')) || 0

                setTimeout(function() {
                    let _classe = el.getAttribute('data-addClasse-on-scroll')
                    el.classList.add(_classe)
                    el.removeAttribute('data-addClasse-on-scroll')
                    el.removeAttribute('data-addClasse-on-scroll-atraso')
                    elementos = [...document.querySelectorAll('[data-addClasse-on-scroll]')]
                }, atraso)
            }
        })
    }
    addClasseComScroll()
})()