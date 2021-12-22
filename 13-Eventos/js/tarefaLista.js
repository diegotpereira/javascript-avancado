;
(function() {
    'use strict'

    // Armazenando no DOM as Variaveis
    const itemInput = document.getElementById('item-input')
    const tarefaAddForm = document.getElementById('tarefa-add')
    const ul = document.getElementById('tarefa-lista')
    const lis = ul.getElementsByTagName('li')

    let arrTarefas = obterDadosSalvos()

    function obterDadosSalvos() {
        let tarefasDados = localStorage.getItem('tarefas')
        tarefasDados = JSON.parse(tarefasDados)
        console.log(tarefasDados);

        return tarefasDados &&
            tarefasDados.length ? tarefasDados : [{
                    nome: 'tarefa 1',
                    criadaEm: Date.now(),
                    completada: true
                },
                {
                    nome: 'Tarefa 2',
                    criadaEm: Date.now(),
                    completada: false
                }
            ]
    }

    function definirNovaDados() {
        localStorage.setItem('tarefas', JSON.stringify(arrTarefas))
    }

    definirNovaDados()

    function gerarLiTarefa(obj) {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const verificarBotao = document.createElement("button")
            // const editarBotao = document.createElement("i")
            // const deletarBotao = document.createElement("i")

        li.className = 'tarefa-item'

        verificarBotao.className = 'button-check'
        verificarBotao.innerHTML = `
            <i class="fas fa-check ${obj.completado ? "" : "displayNone"}" data-action="verificarBotao"></i>`
        verificarBotao.setAttribute('data-action', 'verificarBotao')

        li.appendChild(verificarBotao)

        p.className = 'tarefa-nome'
        p.textContent = obj.nome
        li.appendChild(p)

        return li
    }

    function renderizarTarefa() {
        ul.innerHTML = ''
        arrTarefas.forEach(tarefaObj => {
            ul.appendChild(gerarLiTarefa(tarefaObj))
        })
    }

    function clicouUI(e) {
        let atualLi = e.target

        while (atualLi.nodeName !== 'LI') {
            atualLi = atualLi.parentElement
        }

        const atualLiIndex = [...lis].indexOf(atualLi)
    }

    ul.addEventListener("click", clicouUI)

    renderizarTarefa()
})()