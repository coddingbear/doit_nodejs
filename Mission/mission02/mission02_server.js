/**
 * Do it! 도전 문제 :
 * 02. 소켓 서버와 소켓 클라이언트 기능을 노드로 구성하여 소켓 클라이언트에서 데이터를
 *    보내면 소켓 서버에서 다시 돌려주는 기능을 만들어 보세요
 * (1) 노드의 소켓 기능을 이용해 소켓 서버와 소켓 클라이언트를 만듭니다.
 * (2) 소켓 클라이언트에서 소켓 서버로 연결합니다.
 * (3) 소켓 클라이언트에서 소켓 서버로 '안녕!' 같은 글자를 보내면 소켓 서버에서 그 글자를 그대로 
 *     다시 소켓 클라이언트로 보냅니다.
 * (4) 소켓 클라이언트와 소켓서버에서 보내고 받은 데이터를 화면에 출력합니다.
 ***************************************************************************************************/
var net = require('net');

// 소켓 서버 생성
var server = net.createServer(function(conn) {
    console.log('server-> tcp server created');

      
    // 클라이언트로 부터 메세지를 받았을 때 발생하는 이벤트
    conn.on('data', function (data) {
        console.log('server-> ' + data + ' from ' +  conn.remoteAddress + ':' + conn.remotePort);
        
        // 받은 메세지를 돌려준다.
        conn.write( data + ' from server.');
        //conn.end();
    });

    // 클라이언트 연결이 끊어진 경우 이벤트
    conn.on('close', function() {
        console.log('server-> client closed connection');
    });
})

// 소켓 서버 실행
var port = 4000;
server.listen(port);
console.log('listening on port ' + port);