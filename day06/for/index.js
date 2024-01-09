//for 쓰는 이유 : 코드 여러번 반복하기 위해서

const dan = parseInt(window.prompt('숫자 입력:'))
for(let i = 0; i < 10; i++){
    window.console.log(`${dan} * ${i} = ${dan * i}`)
}