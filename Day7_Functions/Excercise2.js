// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
let y = Math.floor(Math.random()*10)
function solveLinEquation(a,b,c,y) {
    let x = (-c - b*y)/a
    return x
}
console.log(`Phuong trinh co nghiem y la ${y} x la ${solveLinEquation(6,5,3,y)} `)
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const solveQuadEquation = function(a,b,c){
    let delta = Math.pow(b,2) - (4*a*c)
    if(delta < 0){
        return -1
    }
    else if(delta === 0){
        return -b/(2*a)
    }
    else {
        let x1 = (-b + Math.sqrt(delta))/(2*a)
        let x2 = (-b - Math.sqrt(delta))/(2*a)
        return {x1,x2}
    }
}
console.log(solveQuadEquation(1,4,4))
console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
console.log(solveQuadEquation(1, -1, 0)) //{1, 0}
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
const showDateTime = (function() {
    let date = new Date()
    let month = new Date()
    let years = new Date()
    let minute = new Date()
    let hours = new Date()
    console.log(`${date.getDate}/${month.getMonth()}/${years.getFullYear} ${hours.getHours}:${minute.getMinutes}`)
})
// Declare a function name swapValues. This function swaps value of x to y.
function swapValues (x, y){
  return [y, x];
}
console.log(swapValues(3, 4)) // x => 4, y=>3
console.log(swapValues(4, 5)) // x = 5, y = 4
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
let array = []
const reverseArray = function(array){
    let newArr = []
    for (let i = array.length -1 ; i >= 0 ; i-- ) {
        newArr.push(array[i])
    }
    return newArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = string => {
    return string.toUpperCase()
}
console.log(capitalizeArray('xinchao'))
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let Arr = [1,2,3]
const addItem = function(Arr,item){
    Arr.push(item)
    return Arr
}
console.log(addItem(Arr,4))
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItemItem = function(Arr,index){
    Arr.splice(index,1)
    return Arr
}
console.log(removeItemItem(Arr,1))
// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
let number = Math.floor(Math.random()*10)
let arrNum = new Array()
for (let i = 0 ; i <= number ; i++ ) {
    arrNum.push(Math.floor(Math.random()*100))
}
console.log(arrNum)
function sumOfNumbers(array) {
    let sum = 0
    for (const item of array) {
        sum+= item
    }
    return sum
}
console.log(sumOfNumbers(arrNum))
// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumofOdds(array) {
    let sum = 0
    for (const item of array) {
        if(item % 2 == 0){
            sum += item
        }
    }
    return sum
}
console.log(sumofOdds(arrNum))
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(array) {
    let sum = 0
    for (const item of array) {
        if(item % 2 != 0){
            sum += item
        }
    }
    return sum
}
console.log(sumOfEven(arrNum))
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
const evensAndOdds = function(number) {
    let counterOdd = 0
    let counterEven = 0
    let i = 0
    while(i<=number){
        if (i % 2 != 0) {
            counterOdd += 1
        } else {
            counterEven +=1
        }
        i++
    }
    console.log(`The number of odds are ${counterOdd}`)
    console.log(`The number of evens are ${counterEven}`)
}
evensAndOdds(100)
// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
const sum = (...ags) => {
    let sum1 = 0
    for (const num of ags) {
        sum1 += num
    }
    return sum1
}
console.log(sum(1, 2, 3)) // -> 6
console.log(sum(1, 2, 3, 4)) // -> 10
// Writ a function which generates a randomUserIp.
const randomUserIp = (function() {
    console.log(`${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`)
})()
// Write a function which generates a randomMacAddress
function generatesHexan() {
    return  [Math.floor(Math.random()*16).toString(16),Math.floor(Math.random()*16).toString(16)]
}
let randomMacAddress = function(){
    let Mac = []
    for(let i = 0 ; i < 6; i++){
        Mac.push(generatesHexan().join(''))
    }
    return Mac.join('.')
}
console.log(randomMacAddress())

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
function generatesHexan1() {
    return  Math.floor(Math.random()*16).toString(16)
}
let randomHexaNumberGenerator = function(){
    let HexaNum = []
    for(let i = 0 ; i < 6; i++){
        HexaNum.push(generatesHexan1())
    }
    return HexaNum.join('')
}
console.log(randomHexaNumberGenerator())
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
let userIdGenerator = function(){
    let id = []
    while(id.length<7){
        randChar = Math.floor(Math.random()*(255-48+1))+48
        if(randChar <=  57 ){
            id.push(String.fromCharCode(randChar))
        }
        else if(randChar >= 65 && randChar <=90){
            id.push(String.fromCharCode(randChar))
        }
        else if(randChar>=97 && randChar <=121){
            id.push(String.fromCharCode(randChar))
        }
    }
    return id.join('')
}
console.log(userIdGenerator())
// console.log(userIdGenerator());
// 41XTDbE
// Let us access the arguments object

