var State = function () {

};

State.prototype.download = function () {
    throw new Error("该方法必须被重载!");
};

State.prototype.pause = function () {
    throw new Error("该方法必须被重载!");
};

State.prototype.fail = function () {
    throw new Error("该方法必须被重载!");
};

State.prototype.finish = function () {
    throw new Error("该方法必须被重载!");
};