// **1st problem**
// console.log("HELLO WORLD");

// **2nd problem**
/* var sum= 0;
  for(i=2; i<process.argv.length; i++){
    sum = sum + Number(process.argv[i]);
  }
console.log(sum); */

// **3rd problem**
/*
  var fs = require('fs');
  var path = process.argv[2];
  var buffer = fs.readFileSync(path);
  var str = buffer.toString() ;
  var res = str.split("\n");
  console.log(res.length-1);
*/

// **4th problem**

/*  var fs = require('fs');
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
*/


//**5th problem**

/*
var fs = require('fs');
var path = require('path');
var dirpath = process.argv[2];
var ext = "."+ process.argv[3];
//console.log(dirpath);
//console.log(ext);
fs.readdir(dirpath, function callback (err, list){
  //  console.log("The File List: "+ list);
      for(i=0; i<list.length; i++){
        if(path.extname(list[i]) == ext){
          console.log(list[i]);
        }
      }
})
*/

//**6th problem**
var fs = require('fs');
var path = require('path');
var module = require('./module.js')
module(process.argv[2],process.argv[3], callback(err,list))
