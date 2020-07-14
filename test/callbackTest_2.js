function exec(fn, a, b) {
    return fn(a, b)
}

const somar = (a, b) => console.log(a + b)

exec(somar, 4, 5)