;
(function() {

    'use strict'

    function Tarefa(nome, completada, criadaEm, atualizaEm) {

        if (!nome) {

            throw new Error('A tarefa precisa de um parâmetro obrigatório: nome')
        }

        let _nome = nome
        this.completada = completada || false
        this.criadaEm = criadaEm || Date.now()
        this.atualizaEm = atualizaEm || null

        this.toggleDone = function() {
            this.completada = !this.completada;
        }

        this.getNome = () => _nome
        this.setNome = function(novoNome) {

            _nome = novoNome
            this.atualizaEm = Date.now()

        }
    }

    let arrTarefas = [

        {
            nome: 'Tarefa 1',
            completada: true,
            criadaEm: 1592667375012,
            atualizaEm: null
        },

        {
            nome: 'Tarefa 2',
            criadaEm: 1581667345723,
            atualizaEm: 1592667325018
        },
        {
            nome: 'Tarefa 3',
            completada: true,
            criadaEm: 1592667355018,
            atualizaEm: 1593677457010
        }
    ]

    // a partir de um array de objetos literais, crie um array contendo instancias de Tarefas. 
    // Essa array deve chamar arrInstancesTarefas
    const arrInstanciaTarefas = arrTarefas.map(tarefa => {

        const { nome, completada, criadaEm, atualizaEm } = tarefa

        return new Tarefa(nome, completada, criadaEm, atualizaEm)
    })

    // ARMAZENAR O DOM EM VARIAVEIS
    const ul = document.getElementById('tarefa-lista')
    const lis = document.getElementsByTagName('li')
    const tarefaAddForm = document.getElementById('tarefa-add')
    const itemInput = document.getElementById('item-input')

    function gerarLiTarefa(obj) {

        const li = document.createElement('li')
        const p = document.createElement('p')
        const checkButton = document.createElement('button')
        const editButton = document.createElement('i')
        const deleteButton = document.createElement('i')

        li.className = 'tarefa-item'

        checkButton.className = 'button-check'


        // Botão CheckBox 
        checkButton.innerHTML = `
            <i class='fas fa-check ${obj.completada ? ' ' : 'displayNone'}' data-action='checkButton'></i>`
        checkButton.setAttribute('data-action', 'checkButton')

        li.appendChild(checkButton)

        p.className = 'tarefa-nome'
        p.textContent = obj.getNome()

        li.appendChild(p)

        // Botão Editar
        editButton.className = 'fas fa-edit'
        editButton.setAttribute('data-action', 'editButton')
        li.appendChild(editButton)


        const containerEdit = document.createElement('div')
        containerEdit.className = 'editContainer'

        const entradaEditar = document.createElement('input')
        entradaEditar.setAttribute('type', 'text')
        entradaEditar.className = 'editInput'
        entradaEditar.value = obj.getNome()

        containerEdit.appendChild(entradaEditar)

        const containerEditButton = document.createElement('button')
        containerEditButton.className = 'editButton'
        containerEditButton.textContent = 'Editar'
        containerEditButton.setAttribute('data-action', 'containerEditButton')
        containerEdit.appendChild(containerEditButton)

        li.appendChild(containerEdit)

        // Botão Cancelar
        deleteButton.className = 'fas fa-trash-alt'
        deleteButton.setAttribute('data-action', 'deleteButton')
        li.appendChild(deleteButton)

        return li
    }


    // Renderizar tarefa
    function renderizarTarefa() {

        ul.innerHTML = ''
        arrInstanciaTarefas.forEach(tarefaObj => {

            ul.appendChild(gerarLiTarefa(tarefaObj))
        })
    }

    // Evento enviar tarefa
    tarefaAddForm.addEventListener('submit', function(e) {
        e.preventDefault()

        adicionarTarefa(itemInput.value)
        renderizarTarefa()

        itemInput.value = ''
        itemInput.focus()
    })

    // Função adicionar tarefa
    function adicionarTarefa(tarefaNome) {

        // adicione uma nova instancia de tarefa
        arrInstanciaTarefas.push(new Tarefa(tarefaNome))

        renderizarTarefa()

    }


    function clicarInterface(e) {

        const dataAction = e.target.getAttribute('data-action')

        if (!dataAction) return

        let atualLi = e.target

        while (atualLi.nodeName !== 'LI') {

            atualLi = atualLi.parentElement
        }

        const atualLiIndice = [...lis].indexOf(atualLi)

        const acao = {

            editButton: function() {

                const editContainer = atualLi.querySelector('.editContainer');

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                editContainer.style.display = 'flex';
            },

            containerEditButton: function() {

                const valor = atualLi.querySelector('.editInput').value
                arrInstanciaTarefas[atualLiIndice].setNome(valor)

                renderizarTarefa()
            },

            checkButton: function() {

                arrInstanciaTarefas[atualLiIndice].toggleDone()

                renderizarTarefa()
            }
        }

        if (acao[dataAction]) {
            acao[dataAction]()
        }
    }

    ul.addEventListener('click', clicarInterface)

    renderizarTarefa()
})()