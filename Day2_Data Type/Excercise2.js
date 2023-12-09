console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")
console.log(typeof "10");
console.log(parseInt("10") === 10);
console.log(Math.round(parseFloat('9.8'),1) === 10)
console.log('python'.includes('on'), 'jargon'.includes('on'))
console.log('Tôi hy vọng khóa học này không chứa đầy những biệt ngữ.'.includes('biệt ngữ'))
let RandomNumber = Math.round(Math.random()*100,1);
console.log(RandomNumber);
// Tạo số ngẫu nhiên từ 50 đến 100
let randomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(randomNumber);
RandomNumber = Math.round(Math.random()*256,1);
console.log(RandomNumber);
let str = 'JavaScript'
randomIndexStr = Math.round(Math.random()*9,1);
console.log(str[randomIndexStr]);
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
str = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(str.substring(str.indexOf('bởi vì'),str.lastIndexOf('bởi vì')))
