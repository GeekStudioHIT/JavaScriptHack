var fs = require('fs');

/**
 * 文件拷贝
 * @param src 源文件路径
 * @param dst 目标文件路径
 */
function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));

