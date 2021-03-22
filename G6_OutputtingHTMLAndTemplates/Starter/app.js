var http = require('http');
var fs = require('fs')
http.createServer(function(req, res) {
    
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello world\n');


    // difference: text/html vs text/plain
    // import file html: var html = fs.readFileSync(__dirname + '/index.html')
    // call html data: res.end(html)
    // text/plain will post txt file || text/html will post html format
    res.writeHead(200, { 'Content-Type': 'text/html' });


    // var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    // var message = 'here ...'
    // html = html.replace('{Message}', message)
    // res.end(html);

    // stream and Performance
    fs.createReadStream(__dirname + '/index.html').pipe(res)
}).listen(1337, '127.0.0.1');