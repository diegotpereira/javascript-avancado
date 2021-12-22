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

    function definirNovosDados() {
        localStorage.setItem('tarefas', JSON.stringify(arrTarefas))
    }

    definirNovosDados()

    function gerarLiTarefa(obj) {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const verificarBotao = document.createElement("button")
        const editarBotao = document.createElement("i")
        const deletarBotao = document.createElement("i")

        li.className = 'tarefa-item'

        verificarBotao.className = 'button-check'
        verificarBotao.innerHTML = `
            <i class="fas fa-check ${obj.completada ? "" : "displayNone"}" data-action="verificarBotao"></i>`
        verificarBotao.setAttribute('data-action', 'verificarBotao')

        li.appendChild(verificarBotao)

        p.className = 'tarefa-nome'
        p.textContent = obj.nome
        li.appendChild(p)

        // Botão de Edição
        editarBotao.className = 'fas fa-edit'
        editarBotao.setAttribute('data-action', 'editarBotao')
        li.appendChild(editarBotao)

        const containerEditar = document.createElement('div')
        containerEditar.className = 'editarContainer'

        const entradaEditar = document.createElement('input')
        entradaEditar.setAttribute('type', 'text')
        entradaEditar.className = 'editarEntrada'
        entradaEditar.value = obj.nome

        containerEditar.appendChild(entradaEditar)

        const containerEditarBtn = document.createElement('button')
        containerEditarBtn.classList = 'editarBotao'
        containerEditarBtn.textContent = 'Editar'
        containerEditarBtn.setAttribute('data-action', 'containerEditarBtn')
        containerEditar.appendChild(containerEditarBtn)

        li.appendChild(containerEditar)


        return li
    }

    function renderizarTarefa() {
        ul.innerHTML = ''
        arrTarefas.forEach(tarefaObj => {
            ul.appendChild(gerarLiTarefa(tarefaObj))
        })
    }

    function addTarefa(tarefa) {
        arrTarefas.push({
            nome: tarefa,
            criadaEm: Date.now(),
            completada: false
        })

        definirNovosDados()
    }

    function clicouUI(e) {
        const acaoDados = e.target.getAttribute('data-action')
        if (!acaoDados) return
        let atualLi = e.target

        while (atualLi.nodeName !== 'LI') {
            atualLi = atualLi.parentElement
        }

        const atualLiIndex = [...lis].indexOf(atualLi)

        const acoes = {
            editarBotao: function() {
                const editarContainer = atualLi.querySelector('.editarContainer');

                [...ul.querySelectorAll('.editarContainer')].forEach(container => {
                    container.removeAttribute('style')
                })

                editarContainer.style.display = 'flex'
            },
            containerEditarBtn: function() {
                const valor = atualLi.querySelector('.editarEntrada').value
                arrTarefas[atualLiIndex].nome = valor
                renderizarTarefa()
                definirNovosDados()
            }
        }

        if (acoes[acaoDados]) {
            acoes[acaoDados]()
        }
    }

    tarefaAddForm.addEventListener('submit', function(e) {
        e.preventDefault()

        addTarefa(itemInput.value)
        renderizarTarefa()

        itemInput.value = ''
        itemInput.focus()
    })

    ul.addEventListener("click", clicouUI)

    renderizarTarefa()
})()