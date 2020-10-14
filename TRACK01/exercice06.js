/**
 * Revisar si un string es un palindrome
 */
const isPalindrome = (str) => {
    str = str.replace(/\s/g, '')
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reverse = splitted.reverse()
    const joined = reverse.join('')
    return lowered == joined
}

const f = isPalindrome('A Colima va mi loca')
console.log(f)