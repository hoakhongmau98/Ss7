var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/'){
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }

  else if (req.url === '/api'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {firstname: 'jonh',
               lastname: 'Doe'};
    res.end(JSON.stringify(obj))
  }
  // place replace issuse from none link by 404 || if not link loading overtime
  else {
    res.writeHead(404);
    res.end();
  }

}).listen(8080, '127.0.0.1');
