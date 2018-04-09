var http = require('http');
var results = [];
var counter = 0;
var bl = require('bl');

function result () {
  for (var i = 0; i < 3; i++)
    console.log(results[i]);
}

function httpReq (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);
      results[index] = data.toString();
      counter++;
      if (counter == 3)
          result();
    }))
  })
}

for (var i = 0; i < 3; i++)
httpReq(i);
