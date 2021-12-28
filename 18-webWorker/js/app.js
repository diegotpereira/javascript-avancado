let contar = 0;

document.querySelector('img').addEventListener('click', () => {
    console.log('clicou na imagem', ++contar);
})

const servico = new Worker('js/worker.js')

document.querySelector('button').addEventListener('click', function() {
    servico.postMessage('Mensagem enviado pelo worker')
})

servico.addEventListener('message', function(e) {
    console.log(e);
    console.log(e.data);
})