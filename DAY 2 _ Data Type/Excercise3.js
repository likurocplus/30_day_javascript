let str ='Tình yêu là điều tuyệt vời nhất trên thế giới này. Một số đã tìm thấy tình yêu của mình và một số vẫn đang tìm kiếm tình yêu của mình.'
str.toLowerCase();
let Arr = str.match(/tình yêu/gi)
console.log(Arr.length)
str = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(str.match(/vì/gi).length)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Clean the text by removing special characters and extra symbols
const cleanedSentence = sentence.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');

// Split the cleaned sentence into an array of words
const words = cleanedSentence.split(' ');
console.log(words)***