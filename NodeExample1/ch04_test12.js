var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

// 파일이 존재하는 지 확인
fs.exists(outname, function(exists) {
    if(exists) {
        // 파일 삭제 하기
        fs.unlink(outname, function(err) {
            if(err) throw err;
            console.log('기존 파일 [' + outname + '] 를 삭제함.');
        });
    }
    var infile = fs.createReadStream(inname, {flags: 'r'});
    var outfile = fs.createWriteStream(outname, {flags: 'w'});
    infile.pipe(outfile);
    console.log(`파일 복사 [${inname}] -> [${outname}]`);
});