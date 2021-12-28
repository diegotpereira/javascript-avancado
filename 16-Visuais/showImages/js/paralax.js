(function() {

    const dataParalaxContainer = [...document.querySelectorAll('[data-paralax]')]

    function estaSaindo(elemento) {
        let delimitador = elemento.getBoundingClientRect()

        return (
            delimitador.top * -1 < delimitador.height && delimitador.top <= 0
        );
    }

    function buscarNovaPosicaoY(elemento) {
        const velocidade = parseFloat(elemento.getAttribute('data-p-velocidade')) || .5

        return elemento.getBoundingClientRect().top * velocidade * -1
    }

    function posicaoImagem(e) {
        dataParalaxContainer.forEach(c => {
            let originalYPosicaoY = getComputedStyle(c).backgroundPositionY
            let originalYPosicaoX = getComputedStyle(c).backgroundPositionX

            let novaPosY = parseInt(originalYPosicaoY)

            if (estaSaindo(c)) {
                c.style.backgroundPosition = `${originalYPosicaoX} ${buscarNovaPosicaoY(c)}px`
            }
        })
    }

    window.addEventListener('scroll', posicaoImagem)

    posicaoImagem()
})()