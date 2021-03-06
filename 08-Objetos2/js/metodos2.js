const obj = {
    prop1: 'prop 1',
    prop2: 'prop 2'
}

const objFreeze = {...obj }
const objSeal = {...obj }
const objPrevent = {...obj }

//nao pode criar, nem atualizar 
// e nem remover propriedades
Object.freeze(objFreeze)

// nao pode criar, pode atualizar, 
// mas nao pode remover props
Object.seal(objSeal)

// nao pode criar, pode alterar e 
// pode remover props
Object.preventExtensions(objPrevent)