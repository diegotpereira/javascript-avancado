(function() {
    window.addEventListener('scroll', posicaoImagem)

    const dataParalaxContainer = [...document.querySelectorAll('[data-paralax')]

    function estaSaindo(container) {

        return container.getBoundingClientRect().top <= 0
    }

    function buscarNovaPosicao(c) {

        const v = parseFloat(c.getAttribute('data-p-velocidade')) || .5

        return c.getBoundingClientRect().top * v * -1
    }

    function posicaoImagem() {
        dataParalaxContainer.forEach(c => {

            let originalPosicaoY = getComputedStyle(c).backgroundPositionY
            let originalPosicaoX = getComputedStyle(c).backgroundPositionX

            console.log(originalPosicaoX, originalPosicaoY);

            if (estaSaindo(c)) {
                c.style.backgroundPosition = `${originalPosicaoX} ${buscarNovaPosicao(c)}px`
            } else {
                c.style.backgroundPosition = `${originalPosicaoX} 0px`
            }
        })
    }
    posicaoImagem()
})()