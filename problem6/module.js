 module.exports = function (dirpath, ext, callback ){
   fs.readdir(dirpath, function callback (err, list){
     if(err) return callback(err);
        else{
           for(i=0; i<list.length; i++){
           if(path.extname(list[i]) == ext){
           }
         }
       }
   })
 }
