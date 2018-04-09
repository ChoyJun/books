var exec = require('child_process').exec;
console.log(exec)
exec('cat *.js | wc -l', function(err, stdout, stderr){
    if(err) {
        console.log('chilid process exited with error code', err.code)
        return;
    }
    console.log(stdout);
})