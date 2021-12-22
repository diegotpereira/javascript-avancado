const ulAlvo = document.querySelector(".alvo ul")
const ulOriginal = document.querySelector(".original ul")

// nova li com texto "item 2"
// incluída na ul de div com class .alvo
const li = document.createElement('li')
li.textContent = 'item 2'
ulAlvo.appendChild(li)

// Mova a última li de original para alvo (mas antes da primeira li).
// a última li da original deve virar a primeira li de alvo
ulAlvo.insertBefore(ulOriginal.lastElementChild, ulAlvo.firstElementChild)

// texto da primeira li de .alvo para "item 0"
ulAlvo.children[0].textContent = 'item 0'

// clone da ul de .original incluindo na primeira li de .alvo
const ulClone = ulOriginal.cloneNode(true)
ulAlvo.firstElementChild.appendChild(ulClone)

// remove a ultima li (item2) da lista inserida na etapa anterior
console.log(ulClone);
ulClone.removeChild(ulClone.lastElementChild)

// remove as duas li's que sobraram na ul original
ulOriginal.innerHTML = ''