const teste = (function(n) {

    return function testeInterno() {

        console.log('teste interno chamado', ++n);

        return 'retorno de teste interno ' + n
    }
})(10)

let str = teste()
teste()
teste()

let str2 = teste()
console.log(str);
console.log(str2);