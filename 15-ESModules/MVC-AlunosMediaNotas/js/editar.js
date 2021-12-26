import { AlunosService } from '../js/Servicos/AlunosService.js'
import { EditarAlunoView } from '../js/Exibicao/EditarAlunoView.js'
import { MateriasService } from '../js/Servicos/MateriasService.js'
import { EditarAlunoController } from '../js/Controles/EditarAlunoController.js'

const alunosService = new AlunosService()

const parametrosString =  window.location.search
const URLparametros = new URLSearchParams(parametrosString)
const id = parseInt(URLparametros.get('id'))

const aluno = alunosService.buscarPorId(id)

document.getElementById('primeiro_nome').value = aluno.nome 

const editarAlunoView = new EditarAlunoView(
    document.querySelector('[data-editar-aluno-form]'),
    new MateriasService().materias
)

const editarAlunoController = new EditarAlunoController(aluno, editarAlunoView, alunosService)

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()

    const nome = document.querySelector('#primeiro_nome').value
    editarAlunoController.editar(aluno, nome)
    window.location.assign('index.html')
})