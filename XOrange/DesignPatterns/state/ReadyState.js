var ReadyState = function (onDownload) {
    State.apply(this);
    this.onDownload = onDownload;
};

ReadyState.prototype = new State();

ReadyState.prototype.download = function () {
    console.log("Start Download!");
    this.onDownload.setState(this.onDownload.getDownloadingState());
};

ReadyState.prototype.pause = function () {
    throw new Error("还没开始下载，不能暂停!");
};

ReadyState.prototype.fail = function () {
    throw new Error("文件还没开始下载，怎么能说失败呢!");
};

ReadyState.prototype.finish = function () {
    throw new Error("文件还没开始下载，当然也不能结束了!");
};