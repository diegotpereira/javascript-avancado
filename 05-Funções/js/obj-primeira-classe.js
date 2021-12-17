function fn(cb) {

    console.log('Executar ação de callback');
    console.log(typeof cb);

    typeof cd === 'function' && cb()
}

console.log('---------------------');

function callback() {

    console.log('Função passada por parâmetro');
}

fn(callback)


console.log('---------------------');


const obj = {

    callback: callback
}

obj.callback()


console.log('---------------------');

function fn2(n1) {

    return function(n2) {

        return n1 * n2
    }
}

const funcao2 = fn2(10)
const mult = funcao2(2)

console.log(mult);

console.log('---------------------');

function fn3() {

    fn3.count++

        return function _fn3() {

            console.log('Função retornada por parâmetro');
        }
}

fn3.count = 0

const funcao3 = fn3()
const funcao3a = fn3()
const funcao3b = fn3()

funcao3()
console.log(fn3.count);