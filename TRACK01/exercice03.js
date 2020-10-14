/**
 * Iterando un arreglo solo una vez, 
 * eliminar los undifined, cero, false y null
 */

 const clear = (arr) => arr.reduce((acc, el) => {
     if (el) {
         acc.push(el);
     }
     return acc
 },[])

 const c = clear([1, undefined, null, 0, 2, 4, false])
 console.log(c)