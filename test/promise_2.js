function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            const animes = ['SNK', 'Konosuba', 'Demon Slayer', 'Naruto']
            const teste = anime => anime
            const oMelhorAnime = animes.reduce(teste)
            console.log(`O melhor anime do século é ${oMelhorAnime}`)
            resolve()
        }, tempo)
    })
}

esperarPor()
.then(() => esperarPor())
.then(esperarPor)