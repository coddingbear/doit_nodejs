/**
 * http 모듈로 요청받은 파일 내용을 일고 응답하기
 */
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res) {
    // 파일을 읽어 응답 스트림과 pipe()로 연결합니다.
    var instream = fs.createReadStream('./output.txt');
    instream.pipe(res);
});
server.listen(7001, '127.0.0.1', function(){
    console.log('테스트 서버 시작: http://127.0.0.1:7001');
});