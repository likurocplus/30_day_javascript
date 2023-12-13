// // Write a program which tells the number of days in a month.
// //   Enter a month: January
// //   January has 31 days.

// //   Enter a month: JANUARY
// //   January has 31 day

// //   Enter a month: February
// //   February has 28 days.

// //   Enter a month: FEbruary
// //   February has 28 days.
// // Write a program which tells the number of days in a month, now consider leap year.
// let month = prompt(`Hay nhap thang trong nam: `);
// switch (month.toLowerCase()) {
//     case 'april', 'june', 'september', 'november':
//         console.log(`${month.replace(month[0],month[0].toUpperCase())} has 30 days.`)
//         break;
//     case 'january', 'march', 'may', 'july', 'august', 'october', 'december':
//         console.log(`${month.replace(month[0],month[0].toUpperCase())} has 31 days.`)
//         break;
//     case 'february':
//         console.log(`February has 28 days`)
//         break;
//     default:
//         console.log(`Ban da nhap sai`)
//         break;
// }
let month = prompt(`Hãy nhập tên tháng trong năm: `);
month = month.toLowerCase();
switch (month) {
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${month.replace(month[0], month[0].toUpperCase())} has 30 days.`);
    break;
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${month.replace(month[0], month[0].toUpperCase())} has 31 days.`);
    break;
  case 'february':
    console.log(`February has 28 days.`);
    break;
  default:
    console.log(`Bạn đã nhập sai.`);
    break;
}



