// Khai báo một mảng trống;
let Arrays = [];
// Khai báo một mảng có số phần tử lớn hơn 5
const nyc = ["Diệu","Phương","Huyền","Anh","Vy","Linh"] 
// Tìm độ dài của mảng của bạn
console.log(`Độ dài chuỗi nyc là ${nyc.length}`)
// Lấy mục đầu tiên, mục giữa và mục cuối cùng của mảng
console.log(`Mục đầu tiên: ${nyc[0]}, mục giữa: ${nyc[nyc.length/2]}, mục cuối cùng là: ${nyc[nyc.length-1]}`)
// Khai báo một mảng có tên là mixDataTypes, đặt các kiểu dữ liệu khác nhau vào mảng và tìm độ dài của mảng. Kích thước mảng phải lớn hơn 5
let mixDataTypes = [
    1,
    "string",
    true,
    2.5,
    'c',
    false
]
console.log(mixDataTypes.length)
console.log(mixDataTypes)
// Khai báo một biến mảng tên itCompanies và gán giá trị ban đầu Facebook, Google, Microsoft, Apple, IBM, Oracle và Amazon
const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
]
// In mảng bằng console.log()
console.log(itCompanies)
// In số lượng công ty trong mảng
console.log(itCompanies.length)
// In công ty đầu tiên, công ty giữa và công ty cuối cùng
console.log(`Cty đầu tiên: ${itCompanies[0]}, mục giữa: ${itCompanies[nyc.length/2]}, mục cuối cùng là: ${itCompanies[itCompanies.length-1]}`)
// In ra từng công ty
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
// Thay đổi từng tên công ty thành chữ hoa và in chúng ra
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
// In mảng như một câu: Facebook, Google, Microsoft, Apple, IBM,Oracle và Amazon là những công ty CNTT lớn.
console.log(`${itCompanies.toString()} lá những công ty CNTT lớn`)
// Kiểm tra xem một công ty nhất định có tồn tại trong mảng itCompanies hay không. Nếu nó tồn tại thì trả lại công ty, nếu không thì trả lại không tìm thấy công ty
let check = prompt(`Kiem tra cong ty nao?`)
itCompanies.includes(check) ? console.log(`${check}`) : console.log(`Khong co cong ty nay`);
console.log(itCompanies.slice(check))

// Lọc ra các công ty có nhiều hơn một chữ 'o' mà không có phương pháp lọc

// Sắp xếp mảng bằng phương thức Sort()
itCompanies.sort()
console.log(itCompanies)
// Đảo ngược mảng bằng phương thức Reverse()
itCompanies.reverse()
console.log(itCompanies)
// Loại bỏ 3 công ty đầu tiên khỏi mảng
console.log(itCompanies.slice(0,3))
// Cắt bỏ 3 công ty cuối cùng khỏi mảng
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))
// Loại bỏ các công ty CNTT trung gian khỏi mảng
let middleIndex = Math.floor(itCompanies.length / 2)
let middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1);
console.log('Middle company:', middleCompanies);
// Xóa công ty CNTT đầu tiên khỏi mảng
console.log(itCompanies.shift());
// Xóa công ty CNTT cuối cùng khỏi mảng
console.log(itCompanies.pop())
// Xóa tất cả các công ty CNTT
itCompanies.length = 0;
console.log(itCompanies);