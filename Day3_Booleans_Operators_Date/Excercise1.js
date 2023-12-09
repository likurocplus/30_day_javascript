//Khai báo biến firstName, lastName, country, city, age, isMarried, year và gán giá trị cho nó và sử dụng toán tử typeof để kiểm tra các kiểu dữ liệu khác nhau.
let firstName = "Luong";
let lastName = "Quoc"
let country = "Vietnam"
let city = "Ho Chi Minh City"
let age = 19;
let isMarried = false;
let year = 2023;
//Kiểm tra xem kiểu dữ liệu của '10' có giống với 10
console.log(typeof '10' === typeof 10);
//Kiểm tra parseInt('9.8') có bằng 10 không
console.log(parseInt('9.8')===10);
// Giá trị boolean có thể đúng hoặc sai
// Viết ba câu lệnh JavaScript cung cấp giá trị đúng.
// Viết ba câu lệnh JavaScript cung cấp giá trị sai.
// Hãy tìm ra kết quả của các biểu thức so sánh sau không sử dụng console.log(). Sau khi làm xong, hãy xác nhận nó bằng console.log()

console.log(4 > 3); //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4')   //false
console.log(4 == '4')   //true
console.log(4 === '4')  //false

//Hãy tìm ra kết quả của các biểu thức so sánh sau không sử dụng console.log(). Sau khi làm xong, hãy xác nhận nó bằng console.log()
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
//Không có 'on' trong cả 2 từ dragon và python
console.log('python'.match('on') !== 'on');
// Sử dụng đối tượng Date để làm các câu hỏi sau

// Năm nay là năm mấy?
let years = new Date();
console.log(years.getFullYear());
// Tháng này là tháng mấy dưới dạng số?
let month = new Date();
console.log(month.getMonth());
// Hôm nay ngày mấy?
let date = new Date();
console.log(date.getDate());
// Hôm nay là thứ mấy dưới dạng số?
let day = new Date();
console.log(day.getDay());
// Bây giờ mấy giờ?
let hour = new Date();
console.log(hour.getHours());
// Bây giờ mấy phút?
let minute = new Date();
console.log(minute.getMinutes());
// Tìm số giây đã trôi qua kể từ ngày 1, tháng 1, năm 1970 đến bây giờ.
let now = new Date();
console.log(now.getTime());