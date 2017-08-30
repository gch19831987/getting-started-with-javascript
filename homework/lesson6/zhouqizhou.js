

// 异步方案
// 引入fs模块
var fs = require('fs');

// 定义要查询的目标文件夹。如果你想查lesson2的内容，就修改下面路径字符串。
var dirPathString = '../../homework/lesson4';

// 定义一个callback函数，用于接收读取文件夹内容后的结果
function read_callback(err,files) {
  if (err) {
    console.log('读取文件失败');
  }

  if (files.length > 0) {
    console.log(files);
    var filePathString = './lingxiaoAsync.txt';
    var fileContent = files;
    fs.writeFile(filePathString, fileContent, write_callback);
    console.log(files.length);
    //console.log(Buffer);
  } else {
    console.log('没有找到任何文件');
  }
}

//调用fs的readdir函数读取所有文件
fs.readdir(dirPathString,read_callback);

// 定义一个callback函数，用于接收写文件的返回结果
function write_callback(err) {
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}


