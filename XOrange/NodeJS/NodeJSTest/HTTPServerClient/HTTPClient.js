var http = require('http');

// 127.0.0.1 是 IP 地址, 可以是 hostname 吗?

var options = {
    hostname: 'localhost',
    port: 8000,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var request = http.request(options, function (response) {});

request.write('Hello World');
request.end();

// http.get('http://127.0.0.1:8000', function (response) {
//     var body = [];
//     console.log(response.statusCode);
//     console.log(response.headers);
//
//     response.on('data', function (chunk) {
//         body.push(chunk);
//     });
//
//     response.on('end', function () {
//         body = Buffer.concat(body);
//         console.log(body.toString());
//     });
// });

