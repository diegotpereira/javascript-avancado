const nodelist = document.querySelectorAll('#list li')
const collection = document.getElementById('list').getElementsByTagName('li')

console.log(nodelist);
console.log(collection);

document.querySelector('#list').innerHTML += '<li> Item 6 </li>'

console.log(nodelist);
console.log(collection);

document.querySelector('#list').innerHTML += '<li> Item 7 </li>'

console.log(nodelist);
console.log(collection);


document.getElementById('list').innerHTML = ''

console.log(nodelist);
console.log(collection);