const atraso = (ms) => {
    const tempoInicial = new Date().getTime()

    while (new Date().getTime() - tempoInicial <= ms) {

    }
}

this.addEventListener('message', function(e) {
    console.log(e);
    console.log(e.data);
    atraso(3000)
    this.self.postMessage('Por causa do tempo de demora o processo foi finalizado')
})