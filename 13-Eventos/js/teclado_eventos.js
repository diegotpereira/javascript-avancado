const msg = document.getElementById('msg')

msg.addEventListener('keypress', pressionandoTeclado)
msg.addEventListener('keyup', teclaParaCima)
msg.addEventListener('keydown', teclaParaBaixo)

function pressionandoTeclado(e) {
    console.log('pressionando os botões do Teclado');
    console.log(this.value);
}

function teclaParaCima(e) {
    console.log('Pressionando a tecla para cima');
    console.log(this.value);
}

function teclaParaBaixo(e) {
    console.log('Pressionando a tecla para baixo');
    console.log(this.value);
}