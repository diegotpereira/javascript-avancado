export class AlunosView {

    constructor(table, materias) {
        this.tableList = table 
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableHeader = this.tableList.querySelector("thead")
        this.materias = materias
        this.tableBody = this.tableList.querySelector('tbody')
        this.renderHeader() 
    }

    renderHeader() {
        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = '<td>Nome</td>'

        let htmlheaderMaterias = this.materias.map(materia => {

            return '<td>' + materia + '</td>'
        }).join('')

        htmlHeader.innerHTML += htmlheaderMaterias
        this.tableHeader.appendChild(htmlHeader)
    }

    render(alunos) {

    }
}

