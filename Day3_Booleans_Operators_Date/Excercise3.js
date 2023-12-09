// Tạo định dạng thời gian mà con người có thể đọc được bằng cách sử dụng đối tượng Ngày giờ. Giờ và phút phải luôn có hai chữ số (7 giờ phải là 07 và 5 phút phải là 05 )
// YYY-MM-DD HH:mm chẳng hạn. 20120-01-02 07:05
let nam1 = new Date();
let nam = nam1.getFullYear();
let ngay1 = new Date();
let ngay = ngay1.getDate();
let thang1 = new Date();
let thang = thang1.getMonth(); 
let hours = new Date();
let gio = hours.getHours();
let minutes = new Date();
const phut = minutes.getMinutes();
console.log(`YYYY-MM-DD: ${nam}/${thang}/${ngay} ${gio}:${phut}`);
