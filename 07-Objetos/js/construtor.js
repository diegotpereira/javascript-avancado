function Tarefa(nome) {

    'use strict'

    if (this === undefined) return

    let _nome = nome

    this.criadaEm = new Date()
    this.atualizadaEm = null

    this.alterarNome = function(novoNome) {

        if (novoNome) {

            _nome = novoNome
            this.atualizadaEm = new Date()
        }

        this.getNome = function() {

            return _nome
        }
    }

    const tarefa1 = new Tarefa('minha tarefa')
    tarefa1.alterarNome('minha tarefa atualizada')

    console.log(tarefa1.getNome());
}