var Download = function () {
    this.oState = new ReadyState(this);
};

Download.prototype.setState = function (oState) {
    this.oState = oState;
};

// 对外暴露的四个公共方法，以便外部调用

Download.prototype.download = function () {
    this.oState.download();
};

Download.prototype.pause = function () {
    this.oState.pause();
};

Download.prototype.fail = function () {
    this.oState.fail();
};

Download.prototype.finish = function () {
    this.oState.finish();
};

//获取各种状态，传入当前this对象
Download.prototype.getReadyState = function () {
    return new ReadyState(this);
};

Download.prototype.getDownloadingState = function () {
    return new DownloadingState(this);
};

Download.prototype.getDownloadPausedState = function () {
    return new DownloadPausedState(this);
};

Download.prototype.getDownloadedState = function () {
    return new DownloadedState(this);
};

Download.prototype.getDownloadedFailedState = function () {
    return new DownloadFailedState(this);
};