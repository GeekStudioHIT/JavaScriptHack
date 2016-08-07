var DownloadingState = function (oDownload) {
    State.apply(this);
    console.log(oDownload);
    this.oDownload = oDownload;
};

DownloadingState.prototype = new State();

DownloadingState.prototype.download = function () {
    throw new Error("文件已经正在下载中了!");
};

DownloadingState.prototype.pause = function () {
    this.oDownload.setState(this.oDownload.getDownloadPausedState());
    console.log("暂停下载!");
};

DownloadingState.prototype.fail = function () {
    this.oDownload.setState(this.oDownload.getDownloadedFailedState());
    console.log("下载失败!");
};

DownloadingState.prototype.finish = function () {
    this.oDownload.setState(this.oDownload.getDownloadedState());
    console.log("下载完毕!");
};