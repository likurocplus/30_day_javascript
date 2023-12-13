const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
//   Iterate 0 to 10 using for loop, do the same using while and do while loop
let i = 1
while (countries[i]!=null) {
  console.log(countries[i])
  i++
}
// Iterate 10 to 0 using for loop, do the same using while and do while loop
do {
  console.log(countries[i])
  ++i;
} while (countries[i]!=null);
// Iterate 0 to n using for loop
for (let index = 0; index < countries.length; index++) {
  const element = countries[index];
  console.log(`${element}`) 
}
// Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
for (let i = 0; i < 7; i++){
    console.log('#'.repeat(i))
}
// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// Using loop print the following pattern
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i*i} `) 
}
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// Use for loop to iterate from 0 to 100 and print only even numbers
console.log('i   i^2   i^3')
for(let i = 0; i <= 10 ; i++){
  console.log(`${i}   ${i*i}   ${i*i*i}`)
}
// Use for loop to iterate from 0 to 100 and print only odd numbers
let c=1
while (c<=100) {
  if (c % 2 == 0) {
    console.log(`${i} `)
  }
  c++;
}
// Use for loop to iterate from 0 to 100 and print only prime numbers
let d=1
while (d<=100) {
  if (d % 2 != 0) {
    console.log(`${i} `)
  }
  d++;
}
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
while (c<=100) {
    console.log(`${i} `)
    c++;
}
// The sum of all numbers from 0 to 100 is 5050.
let e=1
let sum = 0;
while (e<=100) {
  sum += e;
  e++;
}
console.log(`Tong la: ${sum}`)
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
e=1
sum = 0;
while (e<=100) {
  if (e % 2 == 0) {
    sum += e;
  }
  e++;
}
console.log(`Tong so chan la: ${sum}`)
e=1
sum = 0;
while (e<=100) {
  if (e % 2 != 0) {
    sum += e;
  }
  e++;
}
console.log(`Tong so le la: ${sum}`)
//   [2550, 2500]
// Develop a small script which generate array of 5 random numbers
let Arr = [];
for (let i = 0; i < 5; i++) {
  let num = Math.floor(Math.random()*100)
  Arr.push(num);
}
console.log(Arr)
// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let Arr2 =[]
for (let i = 0; i < 5; i++) {
  let num2 = Math.floor(Math.random()*100);
  if(Arr2.indexOf(num2) === -1) Arr2.push(num2)
}
console.log(Arr2)
// Develop a small script which generate a six characters random id:\
let id = [];
while(id.length<=6) {
  let num3 = Math.floor(Math.random()*(122-48+1))+48
  if(num3 >= 48 && num3 <= 57) id.push(String.fromCharCode(num3))
  else if(num3 >= 96) id.push(String.fromCharCode(num3))
}
let idString = id.toString()
console.log(idString.replace(/,/gi,''))
// 5j2khz
