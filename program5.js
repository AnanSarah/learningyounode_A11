
//**5th problem**


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
