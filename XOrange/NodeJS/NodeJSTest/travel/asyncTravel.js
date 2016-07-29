var fs = require('fs');
var path = require('path');

function asyncTravel(dir, callback, finish) {
    fs.readdir(dir, function (err, files) {
        (function next(i) {
            if (i < files.length) {
                var pathname = path.join(dir, files[i]);

                fs.stat(pathname, function (err, stats) {
                    if (stats.isDirectory()) {
                        asyncTravel(pathname, callback, function () {
                            next(i + 1);
                        });
                    } else {
                        callback(pathname, function () {
                            next(i + 1);
                        });
                    }
                });
            } else {
                finish && finish();
            }
        }(0));
    });
}

function main(argv) {
    asyncTravel(argv[0], function(pathname, next) {
        console.log(pathname);
        next();
    }, function() {
        console.log("visiting finished.");
    });
}

main(process.argv.slice(2));