const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function chamandoPromise() {
  return new Promise(resolve => {
    fs.readFile(caminho, function (err, conteudo) {
      if (err) {
        console.log("[ERRO] arquivo não encontrado");
      } else {
        resolve(conteudo.toString());
        console.log("Arquivos encontrados");
      }
    });
  });
}

chamandoPromise()
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
