var net = require('net')


function dateTime(i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    var d = new Date()
    return d.getFullYear() + '-'
        + dateTime(d.getMonth() + 1) + '-'
        + dateTime(d.getDate()) + ' '
        + dateTime(d.getHours()) + ':'
        + dateTime(d.getMinutes())
}


var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})


server.listen(Number(process.argv[2]))
