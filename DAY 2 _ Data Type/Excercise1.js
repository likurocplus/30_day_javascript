let challenge = "Học JavaScript trong 30 ngày"
console.log(challenge);
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,3))
console.log(challenge.slice(15,challenge.length))
console.log(challenge.includes('Script',0))
let StringArray = challenge.split();
console.log(StringArray);
StringArray = challenge.split(' ');
console.log(StringArray);
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(','))
console.log(challenge.replace('Học JavaScipt','Học Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(4))
console.log(challenge.indexOf('o'))
console.log(challenge.lastIndexOf('o'))
str = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(str.indexOf('vì'))
console.log(str.lastIndexOf('vì'))
console.log(str.search('vì'));
console.log(challenge.trim());
console.log(challenge.startsWith('H'))
console.log(challenge.endsWith('y'))
console.log(challenge.match('o'))
let str2 = '';
console.log(str2.concat('Học JavaScript trong',' 30 ngày'))
console.log(challenge.repeat(2));