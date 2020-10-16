require('isomorphic-fetch') 
const p1 = Promise.resolve(1)
console.log(p1)
p1  
    .then(x => x + 5)
    .then(x => Promise.resolve(x + 5))
    .then(x => Promise.reject('Error! algo salio mal'))
    .then(x => console.log('Esto no se va a llamar'))
    .catch(err => console.log(err))

const delayed = x => new Promise((resolve, reject) =>
    setTimeout(() => resolve(x), 1000)
)

delayed(7)
.then(x => {
    console.log(x)
    return delayed(7+7)
})
.then(x => console.log(x))
.then(x => Promise.reject('Hubo un error :('))
.catch(err => console.log(err))

fetch('https://jsonplaceholder.typicode.com/users')
    .then(x => x.json())
    .then(x =>console.log(x))

