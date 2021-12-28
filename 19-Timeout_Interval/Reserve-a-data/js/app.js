(function() {
    const dataEventoDOM = document.querySelector('.hero-content h1 span').innerText
    console.log(dataEventoDOM);

    const dataEvento = buscarData(dataEventoDOM)
    console.log(dataEvento);

    const UM_MINUTO = 60 * 1000
    const UMA_HORA = 60 * UM_MINUTO
    const UM_DIA = 24 * UMA_HORA

    const p = document.createElement('p')
    document.querySelector('.hero-content').appendChild(p)

    function atualizarData() {
        const hoje = new Date()
        let restante = dataEvento.getTime() - hoje.getTime()

        const diasRestante = parseInt(restante / UM_DIA)
        restante = restante - diasRestante * UM_DIA

        const horasRestante = parseInt(restante / UMA_HORA)
        restante = restante - horasRestante * UMA_HORA

        const minutosRestante = parseInt(restante / UM_MINUTO)
        restante = restante - minutosRestante * UM_MINUTO

        const segundosRestante = parseInt(restante / 1000)

        addTempoRestante(diasRestante, horasRestante, minutosRestante, segundosRestante)
    }

    atualizarData()

    function addTempoRestante(d, h, m, s) {
        p.textContent = `Contagem regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos`
    }

    setInterval(atualizarData, 1000)

    function buscarData(str) {
        const [data, hora] = str.split(' ')
        const [dia, mes, ano] = data.split('/')
        const [h, m] = hora.split('H')


        return new Date(ano, mes - 1, dia, h, m)
    }
})()