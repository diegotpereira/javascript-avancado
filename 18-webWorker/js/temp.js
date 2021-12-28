const servico = new Worker('js/worker.js')

servico.addEventListener('message', function(e) {
    showMessage(e.data)
})

async function obterEndereco(cep, url) {
    try {
        const resposta = await fetch(url)
        console.log(resposta);

        if (!resposta.ok) throw Error('Error')

        const json = await resposta.json()

        return json
    } catch (error) {
        throw Error('Erros:' + error.message)
    }
}

export function createPromise(method, url, data = null) {
    const promise = new Promise(function(resolve, reject) {

        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF=8')
        xhr.send(data)
        xhr.onreadystatechange = verificaAjax

        function verificaAjax() {
            if (xhr.readyState === 4) {
                if (xhr.status < 400) {
                    const json = JSON.parse(xhr.responseText)

                    resolve(json)
                } else {
                    reject(Error('Algo deu errado com a conexão '))
                }
            }
        }
    })
    console.log(promise);

    return promise
}

obterEndereco()