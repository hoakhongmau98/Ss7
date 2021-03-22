var http = require('http');
var fs = require('fs')

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});

    // json
    var obj = {
        firstname:'Jonh',
        lastname: 'Doe'
    }
    // var html = fs.readFileSync(__dirname + '/index.html')
    // res.end(obj.toString()); // [object Object]
    res.end(JSON.stringify(obj)); // [object Object] // {"firstname":"Jonh","lastname":"Doe"}
}).listen(1337, '127.0.0.1')