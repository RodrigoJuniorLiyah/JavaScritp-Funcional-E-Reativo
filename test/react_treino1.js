// const hey = 'hey'
// const arrayzed = [...hey]

// const teste = hey.split('')
// console.log(teste)
// console.log(arrayzed)

// const person = {
//     firstName: 'Tom',
//     lastName: 'Cruise',
//     actor: true,
//     age: 54 //made up
//   }
  
//   const { firstName: name, age } = person

// console.log(person)

class Person {
    constructor(name, idade) {
      this.name = name
      this.idade = idade
    }
    
    hello() {
      return 'Hello, I am ' + this.name + ', ' + 'My age is ' + this.idade + '.'
    }
}

const flavio = new Person('Flavio', 27)
console.log(flavio.hello())

class Programmer extends Person {
    hello() {
      return super.hello() + ' I am a programmer.'
    }
  }
  
  const flavio2 = new Programmer('Flavio', 27)
  console.log(flavio2.hello())