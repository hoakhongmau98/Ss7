var http = require('http')

http.createServer(function (req, res){
    // try to change 'text/plain'
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.writeHead(200)
    res.end('Hello world\n');
    // req.

    console.log('Server recive a request')
    // listen(port, ip)
}).listen(1337, '127.0.0.1')