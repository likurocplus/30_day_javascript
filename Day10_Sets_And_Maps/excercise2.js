const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

let setA = new Set(a)
let setB = new Set(b)

// Find a union b
const c = [...a,...b]
let setC = new Set(c)
// Find a intersection b
let ainb = a.filter((num)=>{
    return setB.has(num)
})
console.log(ainb)
// Find a with b
let ab = a.filter((num)=>{
    return !setB.has(num)
})
console.log(ab)
let abb = b.filter((num)=>{
    return !setA.has(num)
})
console.log(abb)