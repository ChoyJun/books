// 创建缓冲区
var buf1 = Buffer.from('Hello World')
var buf2 = Buffer.from(new ArrayBuffer(11));

buf1.copy(buf2, 0, 6, 11);
console.log(buf2.toString());