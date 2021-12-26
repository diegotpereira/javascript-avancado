(function () {
    window.addEventListener('scroll', destacaMenu)

    const menu = document.querySelector('.nav')
    const links = menu.querySelectorAll('li a')

    function destacaMenu() {
        let posicoes = [...links].map(link => {

            let href = link.getAttribute('href')
            let h2 = document.querySelector(href)

            return h2.getBoundingClientRect().top
        })

        let linkAtivo = pegaUltimoElementoVisto(posicoes)
        let menuAtivado = menu.querySelector('.ativado')

        if (menuAtivado) {
            menuAtivado.classList.remove('ativado')
        }

        if (linkAtivo) {
            
            return linkAtivo.classList.add('ativado')
        }

        return links[0].classList.add('ativado')

        console.log(posicoes);
    }

    function pegaUltimoElementoVisto(_posicoes) {
        let posicoes = _posicoes.filter(n => n < innerHeight / 2)

        return links[posicoes.length - 1]
    }

    destacaMenu()
})()