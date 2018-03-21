/**
 * Do it! 도전 문제 :
 * 01. 파일의 내용을 한 줄 씩 읽어 들여 화면에 출력하는 기능을 만들어 보세요.
 * (1) 하나의 파일을 만들고 각 줄에는 공백으로 구분된 이름, 나이, 전화번호가 들어가도록 구성합니다.
 * (2) 파일의 내용을 한 줄씩 읽어 들이면서 각 정보를 공백으로 구분합니다.
 * (3) 구분된 정보 중에서 이름만 화면에 출력합니다.
 ***************************************************************************************************/
const fs = require('fs'); 
const readline = require('readline');

const filename = 'sample.txt';
let count = 0;

const rl = readline.createInterface({
    input: fs.createReadStream(filename)
});

// 한줄 읽은 후에 발생되는 이벤트
rl.on('line', function(line) {
    console.log('한 줄 읽음: ', line);
    count += 1;

    // 공백으로 구분
    let tokens = line.split(' ');
    if (tokens != undefined && tokens.length > 0) {
        console.log(`#${count} -> ${tokens[0]}`);
    }
});

// 모두 읽은 후에 발생하는 이벤트
rl.on('close', function(line) {
    console.log('파일 읽기가 종료되었습니다.');
});