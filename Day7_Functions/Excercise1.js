// Exercises: Level 1
// Declare a function fullName and it print out your full name.
function fullName() {
    console.log(`Luong Vo Khoi Quoc`)
}
fullName()
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const fullNamee = function(firstName,lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullNamee('Luong Vo','Khoi Quoc'))
// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (a,b) => {
    return (a+b)
}
console.log(addNumbers(5,6))
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (function(length,width) {
    let area = length * width
    console.log(`Area: ${area}`)
})(5,10)
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width) {
    console.log(2*(length+width))
}
perimeterOfRectangle(5,10)
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length,width,height) => length*width*height
console.log(volumeOfRectPrism(5,5,5))
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (function(r) {
    console.log(3.14*r*r)
})(5)
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    let circumference = 2 * 3.14 * r
    console.log(circumference)
}
circumOfCircle(5)
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = function(mass, volume){
    return (mass/volume)
}
console.log(density(100,5))
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speed = (S,t) => {
    return (S/t)
}
console.log(speed(100,2))
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
let weight = function(mass,gravity) {
    console.log(mass * gravity)
}
weight(5,3)
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

let convertCelsiusToFahrenheit = (function(oC) {
    console.log((oC * 2)*9.5 + 32) }
)(5)
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
let BMI = function(height,weight){
    let bmi = weight / ( height * height)
    if(bmi < 18.5 ){
        console.log(`Underweight`)
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        console.log(`Normal weight`)
    }
    else if (bmi >=  30){
        console.log(`Obese`)
    } else {
        console.log(`Over weight`)
    }
}
BMI(52,1.8)
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let month = new Date();
let checkSeason = month => {
    if(month >= 3 && month <=5){
        console.log(`Spring`)
    }
    else if(month >=6 && month <= 8){
        console.log(`Summer`)
    }
    else if(month >= 9 && month <=11){
        console.log(`Autumn`)
    }
    else if(month>=12 && month <=2){
        console.log(`Winter`)
    }
    else console.log(`default`)
} 
checkSeason(month.getMonth());
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
function findMax(a,b,c) {
    let max = a
    if(b>max) max = b
    if(c>max) max = c
    return max
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))