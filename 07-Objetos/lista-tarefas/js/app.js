;
(function() {

    'use strict'

    function Tarefa(nome, completada, criadaEm, atualizaEm) {

        // crie uma funcao construtora chamada Task. 
        // essa funcao recebe por parametro obrigatório o nome da tarefa
        // também recebe tres parametros opcionais (completed, createdAt, updatedAt)
        // o objeto retornado por essa funcao deve ter quatro propriedades:
        //  - name - string - obrigatório, 
        //  - completed - boolean - opcional, false é o default, 
        //  - createdAt - timestamp - opcional, timestamp atual é o valor default)  Date.now()
        //  - updatedAt - timestamp - opcional, null é o valor default
        // o objeto retornado por essa funcao deve ter um método chamado toggleDone, que deve inverter o boolean completed

        if (!nome) {

            throw new Error('A tarefa precisa de um parâmetro obrigatório: nome')
        }

        let _nome = nome
        this.completada = completada || false
        this.criadaEm = criadaEm || Date.now()
        this.atualizaEm = atualizaEm || null

        this.toggleDone = function() {

            this.completada = !this.completada
        }

        this.getNome = () => _nome
        this.setNome = function(novoNome) {

            _nome = novoNome
            this.atualizaEm = Date.now()

            console.log('------------');
            console.log(this);
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

    // a partir de um array de objetos literais, crie um array contendo instancias de Tasks. 
    // Essa array deve chamar arrInstancesTasks
    const arrInstanciaTarefas = arrTarefas.map(tarefa => {

        const { nome, completada, criadaEm, atualizaEm } = tarefa

        return new Tarefa(nome, completada, criadaEm, atualizaEm)
    })

    // ARMAZENAR O DOM EM VARIAVEIS
    const itemInput = document.getElementById('item-input')
    const tarefaAddForm = document.getElementById('tarefa-add')
    const ul = document.getElementById('tarefa-lista')
    const lis = document.getElementsByTagName('li')

    function gerarLiTarefa(obj) {

        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = 'tarefa-item'

        checkButton.className = 'button-check'
        checkButton.innerHTML = `
           <i class="fas fa-check ${obj.completada ? '' : 'displayNone'} data-action="checkButton"><i>`
        checkButton.setAttribute('data-action', 'checkButton')

        li.appendChild(checkButton)

        p.className = 'tarefa-nome'
        p.textContent = obj.getNome()
        li.appendChild(p)

        editButton.className = 'fas fa-edit'
        editButton.setAttribute('data-action', 'editButton')
        li.appendChild(editButton)

        const containerEdit = document.createElement('div')

        return li
    }

    function renderTarefa() {

        ul.innerHTML = ''
        arrInstanciaTarefas.forEach(tarefaObj => {

            ul.appendChild(gerarLiTarefa(tarefaObj))
        })
    }

    function addTarefa(tarefaNome) {

        // adicione uma nova instancia de tarefa
        arrInstanciaTarefas.push(new Tarefa(tarefaNome))

        renderTarefa()
    }

    tarefaAddForm.addEventListener('submit', function(e) {
        e.preventDefault()
        console.log(itemInput.value);
        addTarefa(itemInput.value)
        renderTarefa()

        itemInput.value = ''
        itemInput.focus()
    })

    // ul.addEventListener('click', clickedUl)

    renderTarefa()
})()