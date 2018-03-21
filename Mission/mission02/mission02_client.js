/**
 *  Echo 기능을 수행하는 소켓 클라이언트
 */
var net = require('net');
var hostname = 'localhost';
var port = 4000;

// 서버에 연결
var client = new net.Socket();
client.setEncoding('utf8');

client.connect(port, hostname, function() {
    console.log('client-> connected to server ' + hostname + ':' + port);
    client.write('안녕');
    //client.end();
});
process.stdin.resume();

// 콘솔로 입력받아 메세지를 보냄
process.stdin.on('data', function(data) {
    //console.log(data);
    client.write(data);
    //client.end();
});

// 서버로부터 데이터를 받았을 경우 발생하는 이벤트
client.on('data', function(data) {
    console.log('client-> ' + data); // 서버로 부터 받은 메세지 출력
});

client.on('close', function() {
    console.log('client-> connection is closed.');
});