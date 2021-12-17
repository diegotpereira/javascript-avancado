function teste(str, n) {

    console.log(this.name);
    console.log(str, n);
}

teste.call({ name: 'Maria' }, 'string', 20)
teste.apply({ name: 'João' }, [' da Silva', 28])
teste.call({ name: 'José' }, ...[' da Silva', 28])

// bind() cria uma nova função que, quando chamada, 
// tem sua palavra-chave this definida com o valor 
// fornecido, com uma sequência determinada de argumentos 
// precedendo quaisquer outros que sejam fornecidos quando 
// a nova função é chamada
const teste2 = teste.bind({ name: 'Joana' })

teste2('Joaquina', 30)
teste('Manuela', 40)

document.addEventListener('click', teste2)