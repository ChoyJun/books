var fs = require('fs');
function openAndWriteToSystemLog(writeBuffer, callback) {
    fs.open('./test.txt', 'a', function opened(err,fd) {
        if(err) {throw callback(err);}

        function notifyError(err){
            fs.close(fd, function(){
                callback(err);
            })
        }

        var bufferOffset = 0,
            bufferLength = writeBuffer.length,
            filePosition = null;

        fs.write(fd, 
                writeBuffer, 
                bufferOffset, 
                bufferLength, 
                filePosition,
                function wrote(err, written) {
                    if(err) {return notifyError(err);}
                    fs.close(fd, function() {
                        callback(err);
                    })
                }
        )
    })
}

openAndWriteToSystemLog(
        Buffer.from('writing this String'),
        function done(err) {
            if (err) {
                console.log('error while opening and writing', err)
                return ;
            }
            console.log('All done with no errors')
        }

    )