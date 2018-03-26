
// **3rd problem**

  var fs = require('fs');
  var path = process.argv[2];
  var buffer = fs.readFileSync(path);
  var str = buffer.toString() ;
  var res = str.split("\n");
  console.log(res.length-1);
