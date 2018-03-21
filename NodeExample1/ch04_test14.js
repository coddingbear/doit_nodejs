/**
 * fs 모듈로 새 디렉토리 만들고 삭제하기
 */
var fs = require('fs');
fs.mkdir('./docs', 0666, function(err) {
    if (err) throw errr;
    console.log('새로운 docs 폴더를 만들었습니다.');

    fs.rmdir('./docs', function(err) {
        if (err) throw err;
        console.log('docs 폴더를 삭제했습니다.');
    });
});