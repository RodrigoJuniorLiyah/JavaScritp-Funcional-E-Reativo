const path = require('path')
const fn = require('./funcoes')
const { somar, lerArquivo, lerDiretorio, elementosTerminadosCom, composicao } = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '♪', '"',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

const palavrasMaisUdas = fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeincluir('-->'),
    fn.removerElementosSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeApenasNumero,
    fn.agruparElementos,
    fn.ordenarPorAtribNumerico('qtde', 'desc'),
)

palavrasMaisUdas(caminho)
    .then(console.log)