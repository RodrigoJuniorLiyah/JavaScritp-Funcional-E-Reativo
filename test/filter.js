const animes = ([
    {anime: 'konosuba', eps: 20},
    {anime: 'Naruto', eps: 40},
    {anime: 'SNk', eps: 20}
])

function filtrar(array) {
    const ep = array.filter(el => el.eps == 20)
    const nome = array.filter(n => n.anime)
    console.log(nome, ep)
    
}

filtrar(animes)