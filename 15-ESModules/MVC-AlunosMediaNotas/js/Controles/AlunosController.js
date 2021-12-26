import { AlunoModel } from "../Modelos/AlunoModel.js";

export class AlunosController {
    constructor(service, view ) {
        view.render(service.alunos)
        this.view = view 
        this.service = service
    }

    add(aluno) {
        this.service.add(new AlunoModel(aluno))
        console.log(aluno);
        this.view.render(this.service.alunos)
        console.log(this.service.alunos);
    }

    buscar(nome) {
        const dado = this.service.buscar(nome)
        this.view.render(dado)
    }
}