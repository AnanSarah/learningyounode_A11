// **4th problem**

  var fs = require('fs');
  var path = process.argv[2];
  var buffer = fs.readFile(path);
  function addNewLine(callback) {
 fs.readFile(path, function doneCounting(err, buffer) {
   var res = buffer.toString().split("\n") ;
   length = res.length-1;
    callback()
 })
}
function countNewLine() {
 console.log(length);
}
addNewLine(countNewLine)
