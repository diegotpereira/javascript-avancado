import { AlunosService } from '../js/Servicos/AlunosService.js'
import { AlunosView }  from '../js/Exibicao/AlunosView.js'
import { AlunosController } from '../js/Controles/AlunosController.js'
import { MateriasService } from './Servicos/MateriasService.js'



const alunosService = new AlunosService()

const alunosView = new AlunosView(
    document.querySelector('[data-table-alunos]'),
    new MateriasService().materias
)

const alunosController =  new AlunosController(alunosService, alunosView)




document.querySelector('form').addEventListener('submit', function (e){
    e.preventDefault()

    const nome = document.getElementById('primeiro_nome').value

    alunosController.add({nome})
})

document.querySelector('#buscar_nome').addEventListener('input', function () {
    const nome = this.value
    sessionStorage.setItem('buscar', nome)

    if(nome.length > 2 || nome.length === 0) {
        alunosController.buscar(nome)
    }
})

const inputEvent = new Event('input')
const inputEvent_IE = document.createEvent('Event')
inputEvent_IE.initEvent('input', true, true)

if (sessionStorage.getItem('buscar')) {
    document.querySelector('#buscar_nome').value = sessionStorage.getItem('buscar')
    document.querySelector('#buscar_nome').dispatchEvent(inputEvent_IE)
}