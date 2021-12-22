(function() {
    'use strict'

    const txtTitulo = document.getElementById('txtTitulo')
    const btn = document.getElementById('btn')
    const formCadastro = document.querySelector('.formCadastro')

    formCadastro.addEventListener('submit', function(e) {
        console.log(txtTitulo.value);

        if (!txtTitulo.value) {
            exibirMensagemErro('Preencha todos os campos', function() {
                txtTitulo.focus()
            })
            e.preventDefault()
        }
    })

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function exibirMensagemErro(msg, cb) {
        // alert(msg)
        feedbackMessage.classList.add('show')
        feedbackMessage.getElementsByTagName(p)[0].textContent = msg
        feedbackMessageCloseBtn.focus()

        function ocultarMensagemErro() {
            console.log('clicado close');
            feedbackMessage.classList.remove('show')

            feedbackMessageCloseBtn.removeEventListener('click', ocultarMensagemErro)
            feedbackMessageCloseBtn.removeEventListener('keyup', tecladoPressionadoBtn)

            if (typeof cb === 'function') {
                cb()
            }
        }

        function tecladoPressionadoBtn(e) {
            if (e.keyCode === 27) {
                ocultarMensagemErro()
            }
        }

        feedbackMessageCloseBtn.addEventListener('click', ocultarMensagemErro)
        feedbackMessageCloseBtn.removeEventListener('keyup', tecladoPressionadoBtn)

    }

    const txtDescricao = document.getElementById('txtDescricao')
    const contadorContainer = document.getElementById('contador')
    const resta = contadorContainer.getElementsByTagName('span')[0]
    const maxima = txtDescricao.maxLength

    mostrarNumero(maxima)

    contadorContainer.style.display = 'block'

    function verificarComprimento() {
        let numeroLetrasDigitadas = this.value.maxLength
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        mostrarNumero(caractersRestantes)
    }

    function mostrarNumero(n) {
        resta.textContent = n
    }

    txtDescricao.addEventListener('input', verificarComprimento)

    btn.disabled = true

    const chkAceito = document.getElementById('chkAceito')
    chkAceito.addEventListener('change', function() {
        btn.disabled = !this.checked
    })
})()