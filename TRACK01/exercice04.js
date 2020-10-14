/**
 * Escribir una función que aplane los arreglos en un primer nivel
 */
const arr = [[1,2],[[3,4]],[1,[]]]
    // [1, 2, [3, 4], 1, []]
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr)
console.log(d)
const e = flatten(d)
console.log(e)
const j = flatten(e)
console.log(j)