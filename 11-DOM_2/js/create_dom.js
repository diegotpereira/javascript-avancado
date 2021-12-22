const title = document.createElement('h1')
const atributo = document.createAttribute('id')
atributo.value = 'title1'
title.setAttributeNode(atributo)

title.setAttribute('title', 'title inserido dinamicamente')
title.setAttribute('style', 'color: red;')

const text = document.createTextNode('criar nós no DOM')
title.appendChild(text)

title.textContent = 'texto inserido com textContent'

console.log(title);

document.querySelector('.container').appendChild(title)

const title2 = document.createElement('h1')
title2.textContent = 'titulo 2 ------------'

const list = document.querySelector('ul')

const container = document.querySelector('.container')

container.insertBefore(title2, list)
container.insertBefore(title2, container.firstChild)

let sublevel = document.querySelector('ul ul')
sublevel = sublevel.cloneNode(true)

const h2 = document.querySelector('h2')

container.insertBefore(sublevel, h2.nextElementSibling)

const segundoParagrafo = container.firstElementChild.nextElementSibling.nextElementSibling
console.log(container.firstElementChild);
console.log(segundoParagrafo);

const span = document.createElement('span')
span.textContent = 'span dinamica'

segundoParagrafo.before(span)

const container2 = document.querySelector('.container2')
container2.insertAdjacentHTML('beforebegin', '<br> Texto inserido </br>')
container2.insertAdjacentHTML('afterbegin', '<br> Texto inserido 2</br>')
container2.insertAdjacentHTML('beforeend', '<br> Texto inserido 3</br>')
container2.insertAdjacentHTML('afterend', '<br> Texto inserido 4</br>')
container2.insertAdjacentHTML('afterbegin', '<br> Texto inserido 5</br>')

const em = document.createElement('em')
em.textContent = 'texto com enfase'
container2.insertAdjacentElement('beforeend', em)

list.parentElement.removeChild(list)

const parent = document.body
const newChild = container.querySelector("h1").cloneNode(true)
const oldChild = document.querySelector("h1")
parent.replaceChild(newChild, oldChild)