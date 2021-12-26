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

    buscarPorId(id) {

        return this.alunos.find(aluno => aluno._id === id)
    }

    atualizarLocalStorage() {
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem('alunos', alunos)
    }

    atualizarAlunoNoLocalStorage() {
        const local = localStorage.getItem('alunos')

        if (local) {
            
            const alunos = JSON.parse(local)

            alunos.forEach(aluno => {
                this.add(new AlunoModel(aluno))
            })
        }
    }
}