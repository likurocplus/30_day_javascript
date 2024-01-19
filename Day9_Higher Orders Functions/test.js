const ArrayAE = [
    {name: "Vo Trung Kien", age: 22},
    {name: "Pham Huu Phu", age: 19},
    {name: "Doan Minh Tri", age: 19},
    {name: "Pham Thanh Huy", age: 19},
    {name: "Luong Vo Khoi Quoc", age: 19}
]
// Filter
let age19 = ArrayAE.filter(function(ArrayAE) {
    return ArrayAE.age === 19 // true or false
})
console.log(age19);
// Normal
let age19_normal = []
for(let i  = 0 ; i < ArrayAE.length ; i++ ){
  if(ArrayAE[i].age === 19){
    age19_normal.push(ArrayAE[i])
  }
}
console.log(age19_normal)

const modifiedArray = arr.map(function (element, index, arr) {
    return element
  })