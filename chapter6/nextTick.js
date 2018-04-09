/*process.nextTick(function nextTick1(){
    var a = 0;
    while(true) {
        console.log("i was  blocking");
        a ++;
    }
});

process.nextTick(function nextTick2(){
    console.log("nextTick");
});

setTimeout(function timeout(){
    console.log("timeout");
}, 1000);*/

// 通过使用process.nextTick 可以将一个非关键性得任务推迟到时间循环得下一轮再执行。
// 下面例子：如果删除一个之前创建的临时文件，
// 但又不想对客户端做出响应之前进行该操作，就可以延迟删除操作。
/*stream.on("data", function(data){
    stream.end("my response");
    process.nextTick(function(){
        fs.unlink("...")
    })
})*/

// 
var interval = 1000;

(function schedule() {
    setTimeout(function do_it(){
        my_async_function(function(){
            console.log('async is done');
            schedule();
        })
    }, interval)
}());