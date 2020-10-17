const suma = (ns) => {
    let acumulado = 0;
    for (let i = 0; i < ns.length; i++) {
        acumulado += ns[i]
    }
    return acumulado
}

const numeros = [1,2,3,4,5];
// multiplicar por dos
const multiplicados = numeros.map(x => x * 2);
console.log(multiplicados)
// pares
const parejas = numeros.map(x =>[x,x])
console.log(parejas)

const mascotas = [
    { nombre: 'Puchini', edad: 12, raza: 'perro'},
    { nombre: 'Cahnchito Feliz', edad: 3, raza: 'perro'},
    { nombre: 'Pulga', edad: 10, raza: 'perro'},
    { nombre: 'Pelusa', edad: 16, raza: 'gato'},
];
// edad promedio
const edades = mascotas.map(x => x.edad)
console.log(edades)
const resultado = suma(edades);
console.log(resultado / edades.length)

