(function() {
    const nomeUsuario = 'Diego Pereira'

    if (nomeUsuario) {

        const topBarElemento = document.createElement('div')
        topBarElemento.className = 'top-bar'
        topBarElemento.innerHTML = `<p> Olá, <br> ${nomeUsuario} <br></p>`

        // elementoPai.insertBefore(novoElemento, elementoReferencia)

        const elementoPai = document.querySelector('.hero')
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
    }
})()