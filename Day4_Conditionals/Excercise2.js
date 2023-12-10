// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
let point = prompt(`Hay nhap diem cua học sinh`)
if(point>=80 && point <= 100 )
{
    console.log(`A`);
}
else if (point >= 70 && point <=79)
{
    console.log(`B`)
} 
else if (point >= 60 && point <= 69) 
{
    console.log(`C`)
}
else if (point >= 50 && point <= 59)
{
    console.log(`D`)
}
else console.log(`F`)

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let season = prompt(`Enter the season`)
switch (season) {
    case 'September', 'October', 'November':
        console.log(`Autumn`)
        break;
    case 'December', 'January', 'February':
        console.log(`Winter`)
        break;
    case 'March', 'April', 'May':
        console.log(`Spring`)
        break;
    default:
        console.log(`Summer`)
        break;
}
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
let day = prompt(`What is the day today?`)
day = day.toLowerCase();
if(day.toLowerCase() == 'saturday')
{
    
    console.log(`${day.replace(day[0],day[0].toUpperCase())} is a weekend.`)
}
else
{
    console.log(`${day.replace(day[0],day[0].toUpperCase())} is a working day.`)
} 