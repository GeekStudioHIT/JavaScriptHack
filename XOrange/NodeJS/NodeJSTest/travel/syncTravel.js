var fs = require('fs');
var path = require('path');

function syncTravel(dir, callback) {
    fs.readdirSync(dir).forEach(function(file) {
        var pathname = path.join(dir, file);
        
        if (fs.statSync(pathname).isDirectory()) {
            syncTravel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

syncTravel('/Users', function(pathname) {
    console.log(pathname);
});