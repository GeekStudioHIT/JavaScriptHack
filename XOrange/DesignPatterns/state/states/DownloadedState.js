var DownloadedState = function (oDownload) {
    State.apply(this);
    this.oDownload = oDownload;
};

DownloadedState.prototype = new State();

DownloadedState.prototype.download = function () {
    this.oDownload.setState(this.oDownload.getDownloadingState());
    console.log("重新下载!");
};

DownloadedState.prototype.pause = function () {
    throw new Error("对下载完了，还暂停啥？");
};

DownloadedState.prototype.fail = function () {
    throw new Error("都下载成功了，咋会失败呢？");
};

DownloadedState.prototype.finish = function () {
    throw new Error("下载成功了，不能再为成功了吧!");
};