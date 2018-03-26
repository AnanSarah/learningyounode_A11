var fs = require('fs');
var path = require('path');
 module.exports = function (dirpath, ext, callback ){
   fs.readdir(dirpath, function(err, list){
     if (err)
      return callback(err)
      list = list.filter(function(file){
          return path.extname(file) === '.' + ext;
        })
        // console.log(list);
        callback(null, list)
      })
 }
