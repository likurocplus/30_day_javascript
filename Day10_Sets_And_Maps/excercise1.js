const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
// create an empty set
let setA = new Set(a)
let setB = new Set(b)
let setcountries = new Set(countries)
// Create a set containing 0 to 10 using loop
myArr = []
let mySet = new Set(myArr)
for(let i = 0; i <= 10; i++){
    mySet.add(i)
}
console.log(mySet)
// Remove an element from a set
mySet.delete(1)
console.log(mySet)
// Clear a set
mySet.clear()
console.log(mySet)
// Create a set of 5 string elements from array
let ae = ["Quoc","Kien","Huy","Phu","Tri"]
let setAe = new Set(ae)
console.log(setAe)
// Create a map of countries and number of characters of a country
let bxhDiem = [
    [1, "Kien"],
    [2, "Quoc"],
    [3, "Huy"],
    [4,"Tri"],
    [5, "Phu"]
]
let mapBXHDiem = new Map(bxhDiem)
console.log(mapBXHDiem)
let str = prompt("Hay nhap thu tu diem ban muon xem do la ai")
console.log(typeof str)
console.log(mapBXHDiem.get(parseInt(str)))