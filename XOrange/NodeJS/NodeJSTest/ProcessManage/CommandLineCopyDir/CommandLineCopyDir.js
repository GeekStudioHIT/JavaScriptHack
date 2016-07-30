var child_process = require('child_process');
var util = require('util');

function copy (source, target, callback) {
    child_process.exec(util.format('cp -r %s/* %s', source, target), callback);
}

copy(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data + " Good Job ");
    }
});