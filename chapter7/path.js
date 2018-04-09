var path = require('path');
// 规范化路径 /foo/bar/baz/asdf/
path.normalize('/foo/bar/baz/asdf/quux/..');

// 连接路径 /foo/bar
path.join('/foo', 'bar');

// 解析路径 /foo/bar/gif/image.gif
console.log(path.resolve("/foo/bar", '../gif/image.gif'));
// 绝对路径后者替换前者？
console.log(path.resolve("/foo/bar", "/fig/", "/b"));

// 查找两个绝对路径之间的相对路径
console.log(path.relative('/data/a/b', '/data/b/c/e'))

// 提取路径的组成部分,提取目录
path.dirname('/a/b/c/tets.js');

// 提取文件路径中的文件名

path.basename('/a/b/c/quux.html')