// Copy countries array(Avoid mutation)
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let copyCountries = ["LBANIA", "OLIVIA", "ANADA", "ENMARK", "THIOPIA", "INLAND", "ERMANY", "UNGARY", "RELAND", "APAN", "ENYA"]
let sortedCountries = copyCountries.sort()
console.log(sortedCountries)
// Sort the webTechs array and mernStack array
let mernStack = ['MongoDB', 'Express', 'React', 'Node']
let webTechs = [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
mernStack.sort()
webTechs.sort()
console.log(mernStack)
console.log(webTechs)
// Extract all the countries contain the word 'land' from the countries array and print it as array
let landCountries = []
for (const land of countries ) {
    if(land.includes('LAND')) landCountries.push(land)
}
console.log(landCountries);
// Find the country containing the hightest number of characters in the countries array
let maxlength = countries[0].length;
let j=0;
let k;
while (j<countries.length) {
    if(countries[j].length > maxlength){
        maxlength = countries[j].length
        k = j  
    }
    j++
}
console.log(countries[k])
// Extract all the countries containing only four characters from the countries array and print it as array
let fCharacters = []
for (const fourc of countries) {
    if(fourc.length === 4) fCharacters.join('') 
}
console.log(fCharacters)

// Reverse the countries array and capitalize each country and stored it as an array
console.log(countries.reverse())
let lower = []
for (const item of countries) {
    lower.push(item.toLowerCase())
}
console.log(lower)