const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)

const testando = item => item[0]
new Promise(function(resolve) {
    resolve([
        { nome: 'Caneta', qtde: 10, preco: 7.99 },
        { nome: 'Impressora', qtde: 0, preco: 649.50 },
        { nome: 'Caderno', qtde: 4, preco: 27.10 },
        { nome: 'Lapis', qtde: 3, preco: 5.82 },
        { nome: 'Tesoura', qtde: 1, preco: 19.20 }
    ])
})

.then(testando)
.then(console.log)