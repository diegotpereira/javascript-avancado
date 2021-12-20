function alterarNome(nome) {
    this.nome = nome
    this.atualizarEm = new Date()
}

const tarefa1 = {
    nome: 'tarefa 1',
    criadaEm: new Date(),
    atualizaEm: null,
    completada: false,

    alterarNome
}

const tarefa2 = {
    nome: 'tarefa 2',
    criadaEm: new Date(),
    atualizaEm: null,
    completada: false,

    alterarNome
}

tarefa1.nome = 'tarefa 1 atualizada'
tarefa1.atualizaEm = new Date()

tarefa1.alterarNome('nome atualizado')

tarefa2.alterarNome('novo nome')

console.log(tarefa1);

console.log(tarefa2);