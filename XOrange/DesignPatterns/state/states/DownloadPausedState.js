var DownloadPausedState = function (oDownload) {
    State.apply(this);
    this.oDownload = oDownload;
};

DownloadPausedState.prototype = new State();

DownloadPausedState.prototype.download = function () {
    this.oDownload.setState(this.oDownload.getDownloadingState());
    console.log("继续下载!");
};

DownloadPausedState.prototype.pause = function () {
    throw new Error("已经暂停了，咋还要暂停呢!");
};

DownloadPausedState.prototype.fail = function () { this.oDownload.setState(this.oDownload.getDownloadedFailedState());
    console.log("下载失败!");
};

DownloadPausedState.prototype.finish = function () {
    this.oDownload.setState(this.oDownload.getDownloadedState());
    console.log("下载完毕!");
};