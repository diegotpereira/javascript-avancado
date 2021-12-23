import { AlunoModel } from "../Modelos/Aluno.model";

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
        this.atualizarAlunoNoLocalStorage()
    }

    atualizarAlunoNoLocalStorage() {
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem('alunos', alunos)
    }

    atualizarAlunoNoLocalStorage() {

    }
}