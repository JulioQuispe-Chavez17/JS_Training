/*
Obtener el numero mayor de un arreglo,
pero iterando una sola vez
 */
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([50, -1500, 1000, 0, 1, 54])
console.log(b)