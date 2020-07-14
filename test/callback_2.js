const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'callbackTest_2.js')

function exibirConteudo(err, conteudo) {
    if(err) {
        console.log('Deu ruim cara')
    } else {
        console.log(conteudo.toString())
    }
}

fs.readFile(caminho, {}, exibirConteudo)