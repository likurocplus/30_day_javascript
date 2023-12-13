// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
let id = []
let num = Math.floor(Math.random()*20)
while (id.length < num) {
    let randomnum = Math.floor(Math.random()*(122-48+1))+48
    if(randomnum <= 57) id.push(String.fromCharCode(randomnum)) 
    else if(randomnum >= 96) id.push(String.fromCharCode(randomnum))
}
let idString = id.toString()
console.log(idString.replace(/,/gi,''))
// Write a script which generates a random hexadecimal number.
// '#ee33df'
let hexadecimal = []
while (hexadecimal.length < 6) {
    let num1 = Math.floor(Math.random()*16+1)
    hexadecimal.push(num1.toString(16))
}
console.log(hexadecimal.toString().replace(/,/gi,''));
// Write a script which generates a random rgb color number.
// rgb(240,180,80)
let rgb = []
for(let i = 0 ; i<3;i++){
    let a = Math.floor(Math.random()*240+1)
    rgb.push(a)
}
console.log(`rgb(${rgb.toString()})`)

// Using the above countries array, create the following new array.
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countrieslength = []
let i = 0;
while (countrieslength.length < countries.length) {
    let b = countries[i].length
    countrieslength.push(b)
    i++
}
console.log(countrieslength)
// Cách 2
let countrieslength2 = []
for (const string of countries) {
    countrieslength2.push(string.length)
}
console.log(countrieslength2)
// Use the countries array to create the following array of arrays:
let ArrCountries =  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. 
//If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
let landCountries = []
for (const land of ArrCountries) {
    if(land[0].includes('land')) landCountries.push(land[0])
}
console.log(landCountries);
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let iaCountries = new Array();
for (const ia of ArrCountries) {
    if(ia[0].substring(ia[0].length-2,ia[0].length) === 'ia') iaCountries.push(ia[0]);
}
console.log(iaCountries);
// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
let maxlength = ArrCountries[0][0].length;
let j=0;
let k;
while (j<ArrCountries.length) {
    if(ArrCountries[j][0].length > maxlength){
        maxlength = ArrCountries[j][0].length
        k = j  
    }
    j++
}
console.log(ArrCountries[k][0])
// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
let Five = new Array();
for (const length5 of ArrCountries) {
    if(length5[0].length == 5) Five.push(length5[0])
}
console.log(Five);

// Find the longest word in the webTechs array
// Use the webTechs array to create the following array of arrays:
let webTechs = [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernStack = ['MongoDB', 'Express', 'React', 'Node']
let result = []
for (const str of mernStack) {
    result.push(str[0])
}
console.log(result.join(''))
// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (const item of webTechs) {
    console.log(item)
}
array = ['banana', 'orange', 'mango', 'lemon'] 
//reverse the order using loop without using a reverse method.
let result1 = []
for (let k = array.length -1 ; k >= 0; k--) {
    result1.push(array[k])
}
console.log(result1)

// Print all the elements of array as shown below.

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (const items of fullStack) {
    for (const items2 of items) {
        console.log(items2)
    }
}
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB