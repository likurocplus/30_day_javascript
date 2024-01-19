const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// Use forEach to console.log each country in the countries array.
countries.forEach((countries) => {
  console.log(countries)
})
// Use forEach to console.log each name in the names array.
names.forEach((names)=>{
  console.log(names)
})
// Use forEach to console.log each number in the numbers array.
numbers.forEach((numbers)=>{
  console.log(numbers)
})
// Use map to create a new array by changing each country to uppercase in the countries array.
let newCountries = countries.map((countries)=>{
  return countries.toLocaleUpperCase()
})
console.log(newCountries)
// Use map to create an array of countries length from countries array.
let newCountriesLength = countries.map((countries)=>{
  return countries.length
})
console.log(newCountriesLength)
// Use map to create a new array by changing each number to square in the numbers array
let squareNumber = numbers.map((numbers)=>{
  return numbers*numbers;
})
console.log(squareNumber)
// Use map to change to each name to uppercase in the names array
let upperCaseName = names.map((names)=>{
  return names.toLocaleUpperCase()
})
console.log(upperCaseName)
// Use filter to filter out countries containing land.
let landCountries = countries.filter((countries)=>{
    return countries.toLowerCase().includes('land') 
})
console.log(landCountries)
// Use filter to filter out countries having six character.
let sixCr = countries.filter((item)=>{
    return item.length === 6
})
console.log(sixCr)
// Use filter to filter out countries containing six letters and more in the country array.
let newCr = countries.filter((item)=>{
    return item.length >= 6
})
console.log(newCr)
// Use filter to filter out country start with 'E';
let ECountry = countries.filter((item)=>{
    return item.at(0) === 'E'
})
// Use filter to filter out only prices with values.
let prices = products.filter((item)=>{
    return Boolean(item.price)
})
console.log(prices)
// Use reduce to sum all the numbers in the numbers array.
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// Explain the difference between some and every
// Use some to check if some names' length greater than seven in names array
// Use every to check if all the countries contain the word land
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
// Use findIndex to find the position of the first country containing only six letters in the countries array
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.