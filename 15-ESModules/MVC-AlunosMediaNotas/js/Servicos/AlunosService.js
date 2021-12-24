import { AlunoModel } from "../Modelos/AlunoModel.js";

export class AlunosService {
    constructor() {
        this.alunos = []
        this.atualizarAlunoNoLocalStorage()
    }

    add(aluno) {
        if (!aluno instanceof AlunoModel) {

            throw TypeError('aluno deve ser uma instância de AlunoModel')
        }

        this.alunos.push(aluno)
        console.log(aluno);
        this.atualizarLocalStorage()
    }

    atualizarLocalStorage() {
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem('alunos', alunos)
        console.log(alunos);
    }

    atualizarAlunoNoLocalStorage() {
        const local = localStorage.getItem('alunos')

        if (local) {
            
            const alunos = JSON.parse(local)
            console.log(alunos);
            alunos.forEach(aluno => {
                this.add(new AlunoModel(aluno))
            })
        }
    }
}