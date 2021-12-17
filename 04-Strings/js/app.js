const paragrafos = Array.from(document.querySelectorAll('.card p'))
const originTexts = paragrafos.map(p => p.innerText)
const maxLength = 100

paragrafos.forEach((p, i) => {

    if (p.innerText.length > maxLength) {

        // substring() retorna a parte da string entre os 
        // índices inicial e final, ou até o final da string.
        p.textContent = p.innerHTML.substring(0, maxLength) + '...'

        const btn = document.createElement('button')
        btn.innerHTML = '<i class="fas fa-chevron-down"></i>'
        p.parentElement.classList.add('text-hidden')

        btn.addEventListener('click', function(e) {

            toggleText(e, p, i)
        })

        p.parentElement.appendChild(btn)
    }
})

function toggleText(e, p, i) {

    console.log(e.currentTarget);
    const card = e.currentTarget.parentElement

    // classList é uma propriedade somente leitura que retorna uma 
    // coleção DOMTokenList (en-US) ativa dos atributos de classe do elemento.
    card.classList.toggle('text-hidden')

    // Quando apenas um argumento está presente: Toggle class value; 
    // Ou seja, se a classe existir, em seguida, removê-lo e retornar 
    // false, se não, então adicioná-lo e retornar true.
    // Quando um segundo argumento está presente: Se o segundo argumento 
    //é avaliado como true, adicione o valor especificado da classe e, se ele 
    // for avaliado como false, remova-o.
    e.currentTarget.querySelector('i').classList.toggle('fa-chevron-down')
    e.currentTarget.querySelector('i').classList.toggle('fa-chevron-up')

    if (card.classList.contains('text-hidden')) {

        card.querySelector('p').textContent = originTexts[i].substring(0, maxLength) + '...'

    } else {

        card.querySelector('p').textContent = originTexts[i]
    }
}