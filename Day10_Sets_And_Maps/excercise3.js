import { countries } from "./countries_data";
let arrNgonNgu = countries.map((country)=>{
    return country.languages;
})
let setLanguages = new Set(arrNgonNgu.flat())
function mostSpokenLanguages(countries, soluong) {
    let spoker = arrNgonNgu.flat().reduce((languages)=>{
        if(languages)
    },{})
}