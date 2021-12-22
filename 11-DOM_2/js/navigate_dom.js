console.log(document.body);
console.log(document.body.parentElement);
console.log(document.body.parentNode);

const html = document.body.parentElement === document.body.parentNode
console.log(document.body.parentElement === document.body.parentNode);

console.log(html.parentElement)
console.log(html.parentNode)

const h2 = document.querySelector('h2')
const h2nextSibling = h2.nextElementSibling
h2nextSibling.style.background = 'yellow'

console.log(h2.previousElementSibling);

const link = document.querySelector('a')
const list = document.querySelector('ul ul')

console.log(link);


console.log(link.parentElement.lastChild);
console.log(link.parentElement.lastElementChild);

console.log(list.lastElementChild.hasChildNodes())
console.log(list.lastElementChild.childNodes[1].nodeType)