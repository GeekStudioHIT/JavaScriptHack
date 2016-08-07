var DownloadFailedState = function (oDownload) {
    State.apply(this);
    this.oDownload = oDownload;
};

DownloadFailedState.prototype = new State();

DownloadFailedState.prototype.download = function () {
    this.oDownload.setState(this.oDownload.getDownloadingState());
    console.log("尝试重新下载!");
};

DownloadFailedState.prototype.pause = function () {
    throw new Error("失败的下载，也不能暂停!");
};

DownloadFailedState.prototype.fail = function () {
    throw new Error("都失败了，咋还失败呢!");
};

DownloadFailedState.prototype.finish = function () {
    throw new Error("失败的下载，肯定也不会成功!");
};