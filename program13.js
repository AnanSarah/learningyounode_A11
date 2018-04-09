var net = require('net')
 function time(nb) {
     return (nb < 10) ? ('0' + nb) : (nb)
 }
 function formatDate(date) {
     return date.getFullYear()
         +'-'+time((date.getMonth() + 1))
         +'-'+time(date.getDate())
         +' '+time(date.getHours())
         +':'+time(date.getMinutes())
 }
 var server = net.createServer(function(socket) {
     var date = new Date();
     socket.end(formatDate(date) + '\n')
 })
 server.listen(Number(process.argv[2]))
