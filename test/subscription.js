const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)

const sub = obs.subscribe((num, array) => {
    array = [
        ['Konosuba', 'SNK', 'Naruto'],
        ['Perfeito', 'Perfeito', 'Ótimo']
    ]
    console.log(array[1][2][0], num)
})

setTimeout(() => {
    sub.unsubscribe()
}, 5000)

