var http = require('http');
var zlib = require('zlib');

var options = {
    hostname: 'localhost',
    port: 8000,
    method: 'GET',
    headers: {
        'Accept-Encoding': 'gzip, deflate'
    }
};

http.request(options, function (response) {
    var body = [];

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);

        if (response.headers['content-encoding'] == 'gzip') {
            zlib.gunzip(body, function (err, data) {
                console.log('我是有 gzip 的');
                console.log(data.toString());
            });
        } else {
            console.log("我没有 gzip");
            console.log(data.toString());
        }
    });
}).end();