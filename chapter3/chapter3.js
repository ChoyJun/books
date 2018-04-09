/*
    导出：
        module概念：module是一个变量，表示当前的木块自身。
        module.exports 表示模块向需要他的脚本所导出的对象，可以是任意对象。
    加载： 
        require函数加载模块
        --使用文件夹路径加载模块：
                var myModule = require('./myModuleDir');
        -- 加载过程。
            1.Node 就会在指定的文件夹下查找模块，node会假定该文件夹是一个包，并试图查找包定义。
            包定义包含在名为package.json 的文件中。
            2.如果文件夹中不存在包定义（package.json），那么包的入口点会假定为默认的index.js。
            （本例路径寻找./myModuleDir/index.js下查找文件)
            3.

 */