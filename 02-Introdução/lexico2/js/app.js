let x = 10
x = 'uma string'

let msg = 'uma \'string'
console.log(msg);

console.log('2' * 2);

function teste() {

    console.log(this);
}

teste()

const teste2 = () => {

    console.log('teste');
    console.log(this);
}

const obj = {

    n: 1,
    teste,
    teste2
}

obj.teste2()