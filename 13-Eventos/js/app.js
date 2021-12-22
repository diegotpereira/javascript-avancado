const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

function clicou() {
    console.log('click função clicou');
}


// botão 1
btn1.onclick = function() {
    console.log('click btn1 função anonima');
}

btn1.onclick = clicou

// botão 2
btn2.onclick = function() {
    console.log('função anonima no btn2');
}

btn2.addEventListener('click', clicou)

btn2.addEventListener('click', function() {
    console.log('click função anonima');
})

// document
document.addEventListener('click', function(e) {
    console.log('clicou no document');
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(this);
}, false)

// botão 3
btn3.addEventListener('click', function(e) {
    console.log(e);
    e.stopPropagation()
    console.log('clicou no botão 3');
}, false)


// container
const container2 = document.querySelector('.container2')
const btns = document.querySelectorAll('.container2 button')
console.log(btns);

console.log("this------", this);
container2.addEventListener('click', (e) => {
    console.log('clicou no container 2');
    // vent.target que identifica o elemento ao qual o evento ocorreu
    console.log(e.target);

    // O currentTarget sempre se refere ao elemento associado ao event handler
    console.log(e.currentTarget);
    console.log(this);

    if (e.target.nodeName === 'Button') {
        console.log(e.target);
    }
})