var fs = require('fs');

/*//fs.stat类
fs.stat('/a/b', function(err, stats){
    if(err) {throw err;}
    console.log(stats);
});

//fs.open 打开文件
fs.open();*/

// 读取文件

fs.open('F:/Study/high_programming_node/chapter3/chapter3.js', 'r', function(err, fd){
    if(err) {throw err}

    var readBuffer = Buffer.from(new ArrayBuffer(1024)),
        bufferOffset = 0,
        bufferLength = readBuffer.length,
        filePosition = 100;

    fs.read(fd,
            readBuffer,
            bufferOffset,
            bufferLength,
            filePosition,
            function read(err, readBytes){
                if(err) {throw err;}
                console.log('just read' + readBytes + 'bytes');

                if(readBytes > 0) {
                    console.log(readBuffer.slice(0, readBytes).toString());
                }
            }
        )
        
})

// 写入文件
fs.open('./test.txt', 'a', function opened(err,fd){
    if(err) {throw err;}

    var writeBuffer =  Buffer.from('writing this string'),
        bufferPosition = 0,
        bufferLength = writeBuffer.length,
        filePosition = null;

    fs.write(fd,
            writeBuffer,
            bufferPosition,
            bufferLength,
            filePosition,
            function wrote(err, written) {
                if(err) {throw err;}
                console.log('wrote'+ written + 'bytes');
            }
    );

})