function async(fn, callback) {
    setTimeout(function () {
        try {
            callback(null, fn());
        } catch (err) {
            callback(err);
        }
    }, 0);
}

async(null, function (err, data) {
    if (err) {
        console.log("Error: %s", err.message);
    } else {
        console.log("没有异常");
    }
});