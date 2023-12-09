// Bài tập: Level 2
// Viết một đoạn lệnh yêu cầu người dùng nhập độ dài đáy và chiều cao của hình tam giác và tính diện tích của tam giác ấy (diện tích = 0.5 x đáy x cao).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let base = prompt("Hay nhap base:");
let height = prompt("Hay nhap height: ");
let S = 0.5 * base * height ;
console.log(`Dien tich cua tam giac la: ${S}`);

// Viết một đoạn lệnh yêu cầu người dùng nhập độ dài cạnh a, cạnh b, cạnh c của hình tam giác và tính chu vi của tam giác ấy (chu vi = a + b + c).
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let a = prompt("Nhap a");
let b = prompt("Nhap b");
let c = prompt("Nhap c");
let chuvi = a + b + c;
console.log(`Chu vi cua tam giac la: ${chuvi}`);

// Yêu cầu nhập độ dài và độ rộng sau đó tính diện tích hình chữ nhật (diện tích = dài x rộng) và tính chu vi hình chữ nhật (chu vi = 2 x (dài + rộng).
let chieudai = prompt("Hay nhap do dai: ")
let chieurong = prompt("Hay nhap chieu rong")
chuvi = ( chieudai +chieurong ) * 2;
let dientich = chieudai * chieurong;
console.log(`Dien tich cua hcn la: ${dientich} va chu vi cua hcn la: ${chuvi}`)

// Yêu cầu nhập bán kính r sau đó tính diện tích hình tròn (diện tích = pi x r x r) và tính chu vi hình tròn (chu vi = 2 x pi x r), lấy pi = 3.14.
let r = prompt("Hay nhap ban kinh: ")
console.log(`Dien tich hinh tron la: ${r*r*3.14} va chu vi cua hinh tron la: ${2*3.14*r}`)

// Tính hệ số góc, tung độ gốc x và tung độ gốc y của phương trình y = 2x -2

// Tung độ góc m = (y2-y1)/(x2-x1). Tìm tung độ góc giữa 2 điểm (2, 2) và (6, 10).

// So sánh tung độ góc của câu 5 và câu 6.

// Tính giá trị của y (y = x2 + 6x + 9). Hãy thử sử dụng các giá trị x khác nhau và tìm ra giá trị x để y bằng 0.

// Viết đoạn lệnh yêu cầu người dùng nhập thời gian và mức lương theo giờ. Tính lương của người đó?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// Nếu độ dài tên bạn lớn hơn 7, hiển thị 'your name is long' nếu không, hiển thị 'your name is short'.

// So sánh tên của bạn và họ của bạn, hiển thị kết quả theo cấu trúc sau.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Tạo 2 biến myAge và yourAge và gán giá trị vào 2 biến ấy. Hiển thị kết quả theo cấu trúc sau.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Yêu cầu người dùng nhập năm sinh. Nếu người dùng lớn hơn hoặc bằng 18, cho phép người dùng lái xe. Nếu không hiển thị số năm người dùng cần phải chờ để đủ 18.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Viết đoạn lệnh yêu cầu người dùng nhập số năm. Tính số giây của số năm đã nhập.

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Tạo các định dạng thời gian dễ đọc sử dụng đối tượng Date
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm