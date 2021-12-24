import { AlunosService } from '../js/Servicos/AlunosService.js'
import { AlunosView }  from '../js/Exibicao/AlunosView.js'
import { AlunosController } from '../js/Controles/AlunosController.js'
import { MateriasService } from './Servicos/MateriasService.js'



const alunosView = new AlunosView(
    document.querySelector('[data-table-alunos]'),
    new MateriasService().materias
)
const alunosService = new AlunosService()
const alunosController =  new AlunosController(alunosService, alunosView)




document.querySelector('form').addEventListener('submit', function (e){
    e.preventDefault()

    const nome = document.getElementById('primeiro_nome').value

    alunosController.add({nome})

    console.log(nome);
})